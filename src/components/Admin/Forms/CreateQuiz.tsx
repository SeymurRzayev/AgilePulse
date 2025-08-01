import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import DynamicForm, { type FieldConfig } from "../../General/DynamicForm";
import type { Quiz } from "../../../types/types";
import { useCreateQuizMutation } from "../../../services/features/trainingPage/quizApi";
import Swal from "sweetalert2";

// Boş cavab obyekti
const createEmptyAnswer = () => ({
  content: "",
  isCorrect: false,
});

// Boş sual obyekti
const createEmptyQuestion = () => ({
  content: "",
  answers: Array(5).fill(null).map(() => createEmptyAnswer()),
});

interface CreateQuizProps {
  trainingId: number,
  refreshQuiz: () => void
  onSuccess: () => void
}

const CreateQuiz = ({ trainingId, onSuccess }: CreateQuizProps) => {
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null);
  const [quizInfo, setQuizInfo] = useState<Omit<Quiz, "questions"> | null>(null);

  const [createQuiz] = useCreateQuizMutation();

  const handleContinue = async (values: typeof initialValuess) => {
    setTotalQuestions(Number(values.totalQuestions));
    setQuizInfo({
      totalQuestions: Number(values.totalQuestions)!,
      passPercentage: Number(values.passPercentage)!,
      durationInMinutes: Number(values.durationInMinutes)!,
      trainingId: trainingId!,
    });
  };

  const fields: FieldConfig[] = [
    { name: "totalQuestions", type: "text" },
    { name: "passPercentage", type: "text" },
    { name: "durationInMinutes", type: "text" },
  ];

  const fieldLabels = {
    totalQuestions: "Sual sayı",
    passPercentage: "Keçid faizi",
    durationInMinutes: "Quizin müddəti (dəqiqə)",
  };

  const validationSchemaa = Yup.object({
    totalQuestions: Yup.number()
      .typeError("Sual sayı yalnız rəqəmlə olmalıdır")
      .required("Sual sayı vacibdir")
      .min(25, "Ən azı 25 sual olmalıdır"),
    passPercentage: Yup.number()
      .typeError("Keçid faizi yalnız rəqəmlə olmalıdır")
      .required("Keçid faizi vacibdir")
      .min(0, "Keçid faizi 0-dan böyük olmalıdır")
      .max(100, "Keçid faizi 100-dən kiçik olmalıdır"),
    durationInMinutes: Yup.number()
      .typeError("Quizin müddəti yalnış rəqəmlə olmalıdır")
      .required("Quizin müddəti vacibdir")
      .min(25, "Quizin müddəti 25-dən böyük olmalıdır"),
  });

  const initialValuess = {
    totalQuestions: "",
    passPercentage: "",
    durationInMinutes: "",
  };

  if (totalQuestions === null) {
    return (
      <DynamicForm
        fields={fields}
        fieldLabels={fieldLabels}
        validationSchema={validationSchemaa}
        initialValues={initialValuess}
        onSubmit={handleContinue}
        submitLabel={"Davam et"}
      />
    );
  }

  const initialValues = {
    questions: Array(totalQuestions).fill(null).map(() => createEmptyQuestion()),
  };

  const validationSchema = Yup.object({
    questions: Yup.array()
      .of(
        Yup.object({
          content: Yup.string().required("Sual boş ola bilməz"),
          answers: Yup.array()
            .of(
              Yup.object({
                content: Yup.string().required("Cavab boş ola bilməz"),
                isCorrect: Yup.boolean(),
              })
            )
            .min(1, "Ən azı 1 cavab olmalıdır")
            .test(
              "oneCorrect",
              "Hər sual üçün ən azı bir doğru cavab seçilməlidir",
              (answers) => answers?.some((a) => a.isCorrect)
            ),
        })
      )
  });

  const handleSubmit = async (values: any) => {
    const { questions } = values
    try {
      if (!quizInfo) return;

      const payload = {
        ...quizInfo,
        questions,
      }
      await createQuiz(payload).unwrap();
      onSuccess()
      Swal.fire('Uğurlu', 'Quiz uğurla yaratıldı!', 'success')
    } catch (e:any) {
      Swal.fire('Xəta', `Quizi yaratmaq mümkün olmadı! ${e.data}`, 'error')
    }
  };

  return (
    <div className="p-4"> {/* QUIZ CREATE */}
      <h2 className="text-2xl font-bold mb-4">Kurs üçün quiz yarat</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue, isSubmitting, errors }) => (
          <Form className="space-y-6">
            {values.questions.map((question, qIndex) => (
              <div key={qIndex} className="border rounded-xl p-6 shadow-md space-y-4">
                <label className="block text-lg font-semibold text-gray-800">
                  Sual {qIndex + 1}
                </label>

                {/* Doğru cavab seçilmədiyi zaman error mesajı */}
                {errors.questions &&
                  Array.isArray(errors.questions) &&
                  errors.questions[qIndex] &&
                  typeof errors.questions[qIndex] === 'object' &&
                  (errors.questions[qIndex] as any)?.answers &&
                  typeof (errors.questions[qIndex] as any).answers === 'string' && (
                    <div className="text-red-500 text-sm mt-1">
                      {(errors.questions[qIndex] as any).answers}
                    </div>
                  )}

                <div>
                  <Field
                    name={`questions[${qIndex}].content`}
                    placeholder="Sual mətnini daxil edin"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
                  />
                  <ErrorMessage
                    name={`questions[${qIndex}].content`}
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <FieldArray name={`questions[${qIndex}].answers`}>
                  {() => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 !gap-0">
                      {question.answers.map((answer, aIndex) => (
                        <div key={aIndex} className=" p-3 rounded-lg space-y-2">
                          <div>
                            <Field
                              name={`questions[${qIndex}].answers[${aIndex}].content`}
                              placeholder={`Cavab ${aIndex + 1}`}
                              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
                            />
                            <ErrorMessage
                              name={`questions[${qIndex}].answers[${aIndex}].content`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>

                          <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                              type="radio"
                              name={`questions[${qIndex}].correctAnswer`}
                              checked={answer.isCorrect}
                              onChange={() => {
                                question.answers.forEach((_, idx) => {
                                  setFieldValue(
                                    `questions[${qIndex}].answers[${idx}].isCorrect`,
                                    idx === aIndex
                                  );
                                });
                              }}
                              className="w-4 h-4"
                            />
                            Doğru cavab
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </div>
            ))}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition"
              >
                {isSubmitting ? "Yaradılır..." : "Quiz Yarat"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateQuiz;