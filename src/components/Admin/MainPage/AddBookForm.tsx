import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useCreateBookMutation, useGetAllBookQuery } from '../../../services/features/mainPage/bookApi';
import DynamicForm, { type FieldConfig } from '../../General/DynamicForm';

const AddBookForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [createBook] = useCreateBookMutation();
  const { refetch } = useGetAllBookQuery();

const fields: FieldConfig[] = [
  { name: 'name', type: 'text' },
  { name: 'author', type: 'text' },
  { name: 'language', type: 'text' },
  { name: 'pageCount', type: 'text' },
  { name: 'image', type: 'file', accept: 'image/*', colSpan: 2 },
  { name: 'pdfFile', type: 'file', accept: 'application/pdf', colSpan: 2 },
];

  const fieldLabels = {
    name: 'Kitabın adı',
    author: 'Müəllif',
    language: 'Dil',
    pageCount: 'Səhifə sayı',
    image: 'Şəkil',
    pdfFile: 'PDF faylı',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Kitabın adı vacibdir'),
    author: Yup.string().required('Müəllif vacibdir'),
    pdfFile: Yup.mixed().required('PDF faylı vacibdir'),
    image: Yup.mixed().required('Şəkil vacibdir'),
  });

  const initialValues = {
    name: '',
    author: '',
    pdfFile: '',
    language: '',
    pageCount: '',
    image: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await createBook(formData).unwrap();
      refetch();
      Swal.fire('Uğurla', 'Kitab əlavə olundu', 'success');
      onSuccess();
    } catch (e) {
      Swal.fire('Xəta', 'Kitab əlavə edilə bilmədi', 'error');
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

export default AddBookForm;
