import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useCreateArticleMutation, useGetAllArticleQuery } from '../../../services/features/mainPage/articleApi';
import DynamicForm, { type FieldConfig } from '../../General/DynamicForm';

const AddArticleForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [createArticle] = useCreateArticleMutation();
  const { refetch } = useGetAllArticleQuery();

  const fields: FieldConfig[] = [
    { name: 'title', type: 'text' },
    { name: 'content', type: 'text' },
    { name: 'text', type: 'textarea', colSpan: 2 },
    { name: 'author', type: 'text' },
    { name: 'image', type: 'file', accept: 'image/*', colSpan: 2 },
  ];

  const fieldLabels = {
    title: 'Başlıq',
    content: 'Məzmun',
    text: 'Məqalə mətni',
    author: 'Müəllif',
    image: 'Şəkil',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Başlıq vacibdir'),
    content: Yup.string().required('Məzmun vacibdir'),
    text: Yup.string().required('Məqalə mətni vacibdir'),
    author: Yup.string().required('Müəllif vacibdir'),
    image: Yup.mixed().required('Şəkil vacibdir'),
  });

  const initialValues = {
    title: '',
    content: '',
    text: '',
    author: '',
    image: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await createArticle(formData).unwrap();
      refetch();
      Swal.fire('Uğurla', 'Məqalə əlavə olundu', 'success');
      onSuccess();
    } catch (e) {
      Swal.fire('Xəta', 'Məqalə əlavə edilə bilmədi', 'error');
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

export default AddArticleForm;
