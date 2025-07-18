import * as Yup from 'yup';
import Swal from 'sweetalert2';
import DynamicForm, { type FieldConfig } from '../../General/DynamicForm';
import { useCreateQuoteMutation, useUpdateQuoteMutation } from '../../../services/features/mainPage/quotesApi';

interface QuoteFormProps {
    onSuccess: () => void;
    initialData?: { id?: number; text: string; author: string };
}

const QuoteForm = ({ onSuccess, initialData }: QuoteFormProps) => {
    const [createQuote] = useCreateQuoteMutation();
    const [updateQuote] = useUpdateQuoteMutation();

    const isEdit = Boolean(initialData?.id);

    const fields: FieldConfig[] = [
        { name: 'text', type: 'text' },
        { name: 'author', type: 'text' },
    ];

    const fieldLabels = {
        text: 'Sitat',
        author: 'Müəllif',
    };

    const validationSchema = Yup.object({
        text: Yup.string().required('Sitat vacibdir'),
        author: Yup.string().required('Müəllif vacibdir'),
    });

    const initialValues = {
        text: initialData?.text || '',
        author: initialData?.author || '',
    };

    const handleSubmit = async (values: typeof initialValues) => {
        try {
            if (isEdit && initialData?.id) {
                await updateQuote({ id: initialData.id, quote: { ...values } }).unwrap();
                Swal.fire('Uğurla', 'Sitat yeniləndi', 'success');
            } else {
                await createQuote(values).unwrap();
                Swal.fire('Uğurla', 'Sitat əlavə olundu', 'success');
            }
            onSuccess();
        } catch (e) {
            Swal.fire('Xəta', isEdit ? 'Sitat yenilənə bilmədi' : 'Sitat əlavə edilə bilmədi', 'error');
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

export default QuoteForm;
