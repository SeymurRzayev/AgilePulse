import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useCreateBookMutation, useUpdateBookMutation } from '../../../services/features/mainPage/bookApi';
import DynamicForm, { type FieldConfig } from '../../General/DynamicForm';
import type { Book } from '../../../types/types';

interface AddBookFormProps {
  onSuccess: () => void;
  initialData?: Book;
}

const AddBookForm = ({ onSuccess, initialData }: AddBookFormProps) => {

  const [createBook] = useCreateBookMutation();
  const [updateBook] = useUpdateBookMutation();


  const isEdit = Boolean(initialData?.id);

  const fields: FieldConfig[] = [
    { name: 'name', type: 'text' },
    { name: 'author', type: 'text' },
    { name: 'language', type: 'text' },
    { name: 'pageCount', type: 'text' },
    { name: 'description', type: 'textarea' },
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
    description: 'Açıqlama',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Kitabın adı vacibdir'),
    author: Yup.string().required('Müəllif vacibdir'),
    pdfFile: Yup.mixed().required('PDF faylı vacibdir'),
    image: Yup.mixed().required('Şəkil vacibdir'),
    language: Yup.string().required('Dil vacibdir'),
    // pageCount: Yup.string().required('Səhifə sayı vacibdir'),
    description: Yup.string().required('Açıqlama vacibdir'),
  });

  const initialValues = {
    name: initialData?.name || '',
    author: initialData?.author || '',
    pdfFile: initialData?.pdfUrl || '',
    language: initialData?.language || '',
    pageCount: initialData?.pageCount || '',
    description: initialData?.description || ' ',
    image: initialData?.imageUrl || '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });
    if (!isEdit) {
      try {
        await createBook(formData).unwrap();
        Swal.fire('Uğurla', 'Kitab əlavə olundu', 'success');
        onSuccess();
      } catch (e) {
        Swal.fire('Xəta', 'Kitab əlavə edilə bilmədi', 'error');
      }
    } else {
      try {
        await updateBook({ bookId: +initialData?.id!, formData }).unwrap();
        Swal.fire('Uğurla', 'Kitab redaktə olundu', 'success');
        onSuccess();
      } catch (e) {
        Swal.fire('Xəta', 'Kitab redaktə olunan zaman xəta baş verdi', 'error');
      }
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
