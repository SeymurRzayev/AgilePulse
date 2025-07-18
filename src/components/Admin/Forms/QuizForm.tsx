import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useCreateQuestionMutation, useUpdateQuestionMutation } from '../../../services/features/trainingPage/quizApi';

interface QuoteFormProps {
    onSuccess: () => void;
    initialData?: {
        refreshQuiz: () => void;
        quesId?: number;
        quizId?: number;
        trainingId?: number;
        isEdit?: boolean;
        content?: string;
        answers1?: string;
        answers2?: string;
        answers3?: string;
        answers4?: string;
        answers5?: string;
        correctAnswer?: string;
    };
    refreshQuiz: () => void;


    /*  selectedQuiz?: {
         id?: number;
         question?: string;
         correctAnswer?: string;
         answers: { text: string; isCorrect: boolean }[];
     }; */
}

const QuizForm = ({ onSuccess, initialData,refreshQuiz }: QuoteFormProps) => {

    const isEdit = initialData?.isEdit;
    console.log(isEdit, 'isEdit');

    const [createQuestion] = useCreateQuestionMutation();
    const [updateQuestion] = useUpdateQuestionMutation();

    const fields = [
        { name: 'content', type: 'text' },
        { name: 'answers1', type: 'text' },
        { name: 'answers2', type: 'text' },
        { name: 'answers3', type: 'text' },
        { name: 'answers4', type: 'text' },
        { name: 'answers5', type: 'text' },
    ];

    const fieldLabels: Record<string, string> = {
        content: 'Sual',
        answers1: 'Cavab 1',
        answers2: 'Cavab 2',
        answers3: 'Cavab 3',
        answers4: 'Cavab 4',
        answers5: 'Cavab 5',
    };

    const validationSchema = Yup.object({
        content: Yup.string().required('Sual vacibdir'),
        answers1: Yup.string().required('Cavab 1 vacibdir'),
        answers2: Yup.string().required('Cavab 2 vacibdir'),
        answers3: Yup.string().required('Cavab 3 vacibdir'),
        answers4: Yup.string().required('Cavab 4 vacibdir'),
        answers5: Yup.string().required('Cavab 5 vacibdir'),
        correctAnswer: Yup.string().required('Doğru cavab seçilməlidir'),
    });

    const initialValues = {
        content: initialData?.content || '',
        answers1: initialData?.answers1 || '',
        answers2: initialData?.answers2 || '',
        answers3: initialData?.answers3 || '',
        answers4: initialData?.answers4 || '',
        answers5: initialData?.answers5 || '',
        correctAnswer: initialData?.correctAnswer || '', // seçilmiş cavabın adı burada saxlanacaq
    };

    const handleSubmit = async (values: any) => {
        const answers = [
            { content: values.answers1, isCorrect: values.correctAnswer === 'answers1' },
            { content: values.answers2, isCorrect: values.correctAnswer === 'answers2' },
            { content: values.answers3, isCorrect: values.correctAnswer === 'answers3' },
            { content: values.answers4, isCorrect: values.correctAnswer === 'answers4' },
            { content: values.answers5, isCorrect: values.correctAnswer === 'answers5' },
        ];

        const payload = {
            content: values.content,
            answers,
        };

        if (!isEdit) {
            try {
                await createQuestion({ question: payload, quizId: initialData?.quizId! }).unwrap();
                Swal.fire('Uğurlu', 'Suaı uğurla əlavə edildi', 'success');
                refreshQuiz()
                onSuccess();
            } catch (error) {
                Swal.fire('Xəta!', 'Sual əlavə edilərkən problem oldu.', 'error');
                return;
            }
        } else {
            try {
                await updateQuestion({ question: payload, questionId: initialData?.quesId!, quizId: initialData?.quizId! }).unwrap();
                Swal.fire('Uğurlu', 'Suaı uğurla redaktə edildi', 'success');
                refreshQuiz()
                onSuccess();
            } catch (error) {
                Swal.fire('Xəta!', 'Sual redaktə edilərkən problem oldu.', 'error');
                return;
            }
        }


        onSuccess();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue, isSubmitting }) => (
                <Form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {fields.map((field) => (
                            <div key={field.name} className={`w-full ${field.name === 'content' ? 'sm:col-span-2' : ''}`}>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    {fieldLabels[field.name]}
                                </label>
                                <Field
                                    type="text"
                                    name={field.name}
                                    placeholder={fieldLabels[field.name]}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                />
                                <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm mt-1" />
                                {field.name != 'content' && (
                                    <div className="mt-1 flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="correctAnswer"
                                            value={field.name}
                                            checked={values.correctAnswer === field.name}
                                            onChange={() => setFieldValue('correctAnswer', field.name)}
                                        />
                                        <span className="text-sm text-gray-600">Duzgun cavab kimi isare et</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <ErrorMessage name="correctAnswer" component="div" className="text-red-500 text-sm mt-1" />

                    <div className="sm:col-span-2 ">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition"
                        >
                            {isSubmitting ? 'Göndərilir...' : isEdit ? 'Redaktə et' : 'Əlavə et'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default QuizForm;
