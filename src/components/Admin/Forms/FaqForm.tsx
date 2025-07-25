import * as Yup from 'yup';
import Swal from 'sweetalert2';
import DynamicForm, { type FieldConfig } from '../../General/DynamicForm';
import { useCreateFaqMutation, useUpdateFaqMutation } from '../../../services/features/mainPage/faqApi';


interface FaqFormProps {
    onSuccess: () => void;
    initialData?: { id?: number; question: string; answer: string };
}

const FaqForm = ({ onSuccess, initialData }: FaqFormProps) => {
    const [createFaq] = useCreateFaqMutation();
    const [updateFaq] = useUpdateFaqMutation();

    const isEdit = Boolean(initialData?.id);

    const fields: FieldConfig[] = [
        { name: 'question', type: 'text' },
        { name: 'answer', type: 'text' },
    ];

    const fieldLabels = {
        question: 'Sual',
        answer: 'Cavab',
    };

    const validationSchema = Yup.object({
        question: Yup.string().required('Sual mətni vacibdir'),
        answer: Yup.string().required('Cavab mətni vacibdir'),
    });

    const initialValues = {
        question: initialData?.question || '',
        answer: initialData?.answer || '',
    };

    const handleSubmit = async (values: typeof initialValues) => {
        try {
            if (isEdit && initialData?.id) {
                await updateFaq({ id: initialData.id, faq: { ...values } }).unwrap();
                Swal.fire('Uğurla', 'Faq yeniləndi', 'success');
            } else {
                await createFaq({ data: values }).unwrap();
                Swal.fire('Uğurla', 'Faq əlavə olundu', 'success');
            }
            onSuccess();
        } catch (e) {
            Swal.fire('Xəta', isEdit ? 'Faq yenilənə bilmədi' : 'Faq əlavə edilə bilmədi', 'error');
        }
    };

    return (
        <DynamicForm
            fields={fields}
            fieldLabels={fieldLabels}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        />
    );
};

export default FaqForm;
