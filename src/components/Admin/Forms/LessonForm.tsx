import Swal from "sweetalert2";
import { useCreateLessonMutation, useUpdateLessonMutation } from "../../../services/features/trainingPage/lessonsApi";
import DynamicForm, { type FieldConfig } from "../../General/DynamicForm";
import * as yup from 'yup';
import type { Lesson, Module } from "../../../types/types";
import DeleteIcon from '../../../assets/icons/adminDelete.svg'
import { useState } from "react";

interface LessonFormProps {
    isEdit: boolean;
    initialData: Module & { refreshTraining?: () => void };
    onSuccess: () => void;
    onDelete: (refreshCourse: () => void, clickInfo: { id: number, type: 'course' | 'module' | 'lesson' }) => void;
}


const LessonForm = ({ initialData, onSuccess, isEdit, onDelete }: LessonFormProps) => {
    console.log(initialData)

    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

    const [updateLesson] = useUpdateLessonMutation()
    const [createLesson] = useCreateLessonMutation()

    const fields: FieldConfig[] = [
        { name: 'title', type: 'text' },
        { name: 'orderNumber', type: 'text' },
        { name: 'contentHtml', type: 'textarea' },
    ]

    const fieldLabels = {
        title: 'Dərsin adı',
        orderNumber: 'Dərsin sıra nömrəsi',
        contentHtml: 'Dərsin məzmunu',
    };

    const validationSchema = yup.object({
        title: yup.string().required('Dersin adı boş ola bilməz'),
        orderNumber: yup.number().required('Dersin sıra numarası boş ola bilməz'),
        contentHtml: yup.string().required('Dersin məzmunu boş ola bilməz'),
    });

    const onSubmit = async (values: any) => {
        try {
            if (isEdit) { // Dersi redakte et
                await updateLesson({ lessonId: +selectedLesson?.id!, body: { ...values, moduleId: initialData.id } }).unwrap()
                initialData.refreshTraining?.()
                Swal.fire('Ders redaktə edildi', 'Dersin məlumatları uğurla yeniləndi edildi', 'success')
            } else { // Yeni ders yarat
                await createLesson(values).unwrap()
                initialData.refreshTraining?.()
                Swal.fire('Uğurlu!', 'Ders uğurla yaradıldı', 'success')
            }
        } catch (error) {
            Swal.fire('Xəta', 'Dersin məlumatları yadda saxlanırken xəta baş verdi', 'error')
        }
        onSuccess()
    };

    return (

        <div>
            {
                isEdit
                    ? (
                        !selectedLesson ? (
                            <div>
                                <h2 className="mb-4 font-medium text-2xl">Redaktə etmək üçün dərs seçin:</h2>
                                <div className="space-y-2">
                                    { //Hansi dersi redakte edeceyini sec
                                        initialData.lessons
                                            ?.slice() // orijinal array-ə toxunmamaq üçün
                                            .sort((a, b) => a.orderNumber - b.orderNumber)
                                            .map(lesson => (
                                                <div
                                                    className="border flex items-center justify-between border-[#BEC7E0] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#A6B1D1]"
                                                    key={lesson.id}
                                                    onClick={() => setSelectedLesson(lesson)}
                                                >
                                                    {lesson.orderNumber}. {lesson.title}
                                                    <button  /* DELETE */
                                                        onClick={() => onDelete(initialData?.refreshTraining!, { id: lesson.id!, type: 'lesson' })}
                                                        className="w-[40px] h-[40px] bg-[#DA3D6866] rounded-xl p-2.5 hover:opacity-90 transition-opacity cursor-pointer"
                                                    >
                                                        <img
                                                            src={DeleteIcon}
                                                            alt="delete"
                                                            className="w-full h-full"
                                                        />
                                                    </button>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        ) : (  // Dersi redakte et
                            <>
                                <DynamicForm
                                    fields={fields}
                                    fieldLabels={fieldLabels}
                                    validationSchema={validationSchema}
                                    initialValues={{ ...selectedLesson, moduleId: initialData.id, id: undefined }}
                                    onSubmit={onSubmit}
                                    submitLabel="Dersi redaktə et"
                                />
                                <div
                                    className="w-full mt-2 text-lg text-center border cursor-pointer border-[#2C4B9B] text-[#2C4B9B] hover:border-[#1e3576] hover:text-[#1e3576] py-2 px-6 rounded-lg font-semibold transition"
                                    onClick={() => setSelectedLesson(null)}
                                >
                                    Geri qayit
                                </div>
                            </>
                        )
                    )
                    : ( // Yeni ders yarat
                        <DynamicForm
                            fields={fields}
                            fieldLabels={fieldLabels}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            submitLabel="Ders yarat"
                            initialValues={{
                                title: '',
                                orderNumber: 0,
                                contentHtml: '',
                                moduleId: initialData.id,
                            }}
                        />
                    )
            }
        </div>

    )
}

export default LessonForm