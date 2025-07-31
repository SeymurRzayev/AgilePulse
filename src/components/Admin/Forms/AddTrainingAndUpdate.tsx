import * as Yup from 'yup';
import Swal from 'sweetalert2';
import TrainingForm from './TrainingForm';
import { useGetCategoriesQuery } from '../../../services/features/trainingPage/categoryApi';
import { useCreateTrainingMutation, useUpdateTrainingMutation } from '../../../services/features/trainingPage/trainingsApi';

interface TrainingProps {
  onSuccess: () => void;
  isEdit: boolean;
  initialData?: {
    id?: number;
    title: string;
    description: string;
    authorName: string;
    image: File;
    authorAvatar: File;
    categoryId: string
    categoryName?: string
  };
  refreshAllCourse: () => void;
}

interface FieldConfig {
  name: string;
  type: 'text' | 'textarea' | 'file' | 'autocomplete';
  accept?: string;
  colSpan?: number;
}

const AddTrainingAndUpdate = ({ onSuccess, isEdit, initialData, refreshAllCourse }: TrainingProps) => {

  const { data: categoryOptions } = useGetCategoriesQuery()
  const [createTraining] = useCreateTrainingMutation()
  const [updateTraining] = useUpdateTrainingMutation()

  const selectedCategory = categoryOptions?.find((item) => item.name === initialData?.categoryName)


  const fields: FieldConfig[] = [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'authorName', type: 'text' },
    { name: 'image', type: 'file' },
    { name: 'authorAvatar', type: 'file' },
    { name: 'categoryId', type: 'autocomplete' }
  ];

  const fieldLabels = {
    title: 'Kursun Adı',
    description: 'Kursun Açıqlaması',
    authorName: 'Kursun Yaradıcısı',
    image: 'Kursun Şəkli',
    authorAvatar: 'Kursun Yaradıcısı Avatarı',
    categoryId: 'Kursun Kateqoriyası'
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Kursun adı vacibdir')
  .matches(/^[\p{L}\s]+$/u, 'Yalnız hərflər qəbul olunur'),
    description: Yup.string().required('Kursun açıqlaması vacibdir'),
    authorName: Yup.string().required('Kursun yaradıcısı vacibdir'),
    image: Yup.string().required('Kursun şəkli vacibdir'),
    authorAvatar: Yup.string().required('Kursun yaradıcısı avatarı vacibdir'),
    categoryId: Yup.string().required('Kursun kateqoriyası vacibdir'),
  });

  const initialValues = {
    title: initialData?.title || '',
    description: initialData?.description || '',
    authorName: initialData?.authorName || '',
    image: initialData?.image || '',
    authorAvatar: initialData?.authorAvatar || '',
    categoryId: selectedCategory?.id || '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const formData = new FormData();

      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('authorName', values.authorName);

      if (values.image instanceof File) {
        formData.append('image', values.image);
      }

      if (values.authorAvatar instanceof File) {
        formData.append('authorAvatar', values.authorAvatar);
      }

      formData.append('categoryId', values.categoryId.toString());

      if (isEdit && initialData?.id) {
        await updateTraining({ trainingId: initialData.id, training: formData }).unwrap();
        refreshAllCourse()
        Swal.fire('Uğurla', 'Kurs yeniləndi', 'success');
      } else {
        await createTraining(formData).unwrap()
        refreshAllCourse()
        Swal.fire('Uğurla', 'Kurs əlavə olundu', 'success');
      }
      onSuccess();
    } catch (e) {
      Swal.fire('Xəta', isEdit ? 'Sitat yenilənə bilmədi' : 'Sitat əlavə edilə bilmədi', 'error');
    }
  };

  return (
    <TrainingForm
      fields={fields}
      fieldLabels={fieldLabels}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      categoryOptions={categoryOptions || []}
    />
  );
};

export default AddTrainingAndUpdate;
