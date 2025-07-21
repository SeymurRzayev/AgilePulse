import Swal from "sweetalert2";
import { useCreateModuleMutation, useUpdateModuleMutation } from "../../../services/features/trainingPage/moduleApi";
import DynamicForm, { type FieldConfig } from "../../General/DynamicForm";
import * as yup from 'yup';


interface ModuleFormProps {
    isEdit: boolean;
    initialData: any;
    onSuccess: () => void;
}


const ModuleForm = ({ isEdit, initialData, onSuccess }: ModuleFormProps) => {

    const [createModule] = useCreateModuleMutation()
    const [updateModule] = useUpdateModuleMutation()

    const fields: FieldConfig[] = [
        { name: 'title', type: 'text' },
        { name: 'orderNumber', type: 'text' },
    ]

    const fieldLabels = {
        title: 'Modulun adı',
        orderNumber: 'Modulun sıra numarası',
    };

    const validationSchema = yup.object({
        title: yup.string().required('Modulun adı boş ola bilməz'),
        orderNumber: yup.number().required('Modulun sıra numarası boş ola bilməz'),
    });

    const initialValues = {
        title: initialData?.title || '',
        orderNumber: initialData?.orderNumber || '',
        courseId: initialData?.trainingId || '',
    };

    const onSubmit = async (values: any) => {
        try {
            if (isEdit) {
                await updateModule({ module: values, moduleId: initialData.id }).unwrap()
                initialData.refreshTraining?.()
                Swal.fire('Modul redaktə edildi', 'Modulun məlumatları uğurla redaktə edildi', 'success')
            } else {
                await createModule(values).unwrap()
                initialData.refreshTraining?.()
                Swal.fire('Modul yaradıldı', 'Modulun məlumatları uğurla yaradıldı', 'success')
            }
        } catch (error) {
            Swal.fire('Xəta', 'Modulun məlumatları yadda saxlanırken xəta baş verdi', 'error')
        }
        onSuccess()
    };


    return (
        <DynamicForm
            fields={fields}
            fieldLabels={fieldLabels}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        />
    )
}

export default ModuleForm