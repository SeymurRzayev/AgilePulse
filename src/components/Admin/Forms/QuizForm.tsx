import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useCreateQuestionMutation, useUpdateQuestionMutation } from '../../../services/features/trainingPage/quizApi';
import QuestionsForm, { type FieldConfigQuestion } from '../General/QuestionsForm';

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
    refetchQuizes: () => void;
    refetchTrainings: () => void;
    refreshIdQuiz?: () => void;
}

const QuizForm = ({ onSuccess, initialData, refetchQuizes, refetchTrainings, refreshIdQuiz }: QuoteFormProps) => {

    const isEdit = initialData?.isEdit;

    const [createQuestion] = useCreateQuestionMutation();
    const [updateQuestion] = useUpdateQuestionMutation();

    const fields: FieldConfigQuestion[] = [
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
                Swal.fire('Uğurlu', 'Sual uğurla əlavə edildi', 'success');
                refetchQuizes();
                refetchTrainings();
                refreshIdQuiz?.();
                onSuccess();
            } catch (error) {
                Swal.fire('Xəta!', 'Sual əlavə edilərkən problem oldu.', 'error');
                return;
            }
        } else {
            try {
                await updateQuestion({ question: payload, questionId: initialData?.quesId!, quizId: initialData?.quizId! }).unwrap();
                Swal.fire('Uğurlu', 'Sual uğurla redaktə edildi', 'success');
                refetchQuizes();
                refetchTrainings();
                onSuccess();
            } catch (error) {
                Swal.fire('Xəta!', 'Sual redaktə edilərkən problem oldu.', 'error');
                return;
            }
        }
        onSuccess();
    };

    return (
        <QuestionsForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            fields={fields}
            fieldLabels={fieldLabels}
            isEdit={isEdit}
        />
    );
};

export default QuizForm;
