import { type Column } from "../Tables/AdminQuizTable";
import { useDeleteTrainingMutation, useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";
import { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import AdminCourseTable from "../Tables/AdminCourseTable";
import Swal from "sweetalert2";
import AddTrainingAndUpdate from "../Forms/AddTrainingAndUpdate";
import ModuleForm from "../Forms/ModuleForm";
import LessonForm from "../Forms/LessonForm";
import type { Lesson, Module } from "../../../types/types";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import { useDeleteModuleMutation } from "../../../services/features/trainingPage/moduleApi";
import { useDeleteLessonMutation } from "../../../services/features/trainingPage/lessonsApi";

const AdminCourses = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedModule, setSelectedModule] = useState<Lesson[] | Module>([]);
    const [selectedTraining, setSelectedTraining] = useState<any>(null);
    const [deleteTraining] = useDeleteTrainingMutation();
    const [deleteModule] = useDeleteModuleMutation();
    const [deleteLesson] = useDeleteLessonMutation();

    const [clickInfo, setClickInfo] = useState<{ type: string, mode: string }>({ type: '', mode: '' })
    const { data: allTrainings } = useGetAllTrainingsQuery()

    const handleEditClick = (
        training: any = [],
        module: any,
        clickInfo: { type: string, mode: string }
    ) => {
        setSelectedModule(module);
        setClickInfo(clickInfo)
        setSelectedTraining(training)
        setShowModal(true);
    };

    const isCreateTraining: boolean = clickInfo.type === 'Add course'
    const isEditTraining: boolean = clickInfo.type === 'Kursu redakte et'
    const isAddModule: boolean = clickInfo.type === 'Modul əlavə et'
    const isAddLesson: boolean = clickInfo.type === 'Dərs əlavə et'
    const isEditModule: boolean = clickInfo.type === 'Modulu redakte et'
    const isEditLesson: boolean = clickInfo.type === 'Dərsi redakte et'

    const columns: Column[] = [
        { id: "title", label: "Kursun adi" },
        { id: "categoryName", label: "Kateqoriyasi", align: "right" },
        { id: "authorName", label: "author", align: "right" },
        { id: "modules", label: "Modul sayi", align: "right" },
        { id: "lesson", label: "Ders sayi", align: "right" },
    ];

    const accordionThead: Column[] = [
        { id: "modules", label: "Modullar", align: "left" },
        { id: "lesson", label: "Dersler", align: "left" },
    ];

    const rows = (allTrainings ?? []).map(training => ({
        ...training,
        modules: training.modules?.length || 0,
        lesson: training.modules?.reduce((acc: number, module: any) => acc + (module.lessons?.length || 0), 0),
        id: training.id,

    }));

    const handleDisabledTraining = async (refreshCourse: () => void, clickInfo: { id: number, type: 'course' | 'module' | 'lesson' }) => {
        console.log(refreshCourse, 'refreshCourserefreshCourse')
        const result = await Swal.fire({
            title: "Kursu silmek etmək istəyirsiniz?",
            text: "Bu kurs artıq aktiv olmayacaq.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Bəli, təsdiq et",
            cancelButtonText: "İmtina",
        });

        if (result.isConfirmed) {
            try {
                if (clickInfo.type === 'course') {
                    await deleteTraining(clickInfo.id);
                } else if (clickInfo.type === 'module') {
                    await deleteModule(clickInfo.id);
                } else if (clickInfo.type === 'lesson') {
                    await deleteLesson(clickInfo.id);
                }
                refreshCourse() // Bura baxilmalidi islemir 
                Swal.fire('Uğurlu', 'Kurs uğurla silindi', 'success')
            } catch (error) {
                Swal.fire('Xəta', 'Kurs silinmədi', 'error')
                console.error('Kurs silinmədi:', error);
            }
        }
    };


    return (
        <div className=' w-full h-full py-10'>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={
                        isEditModule ? "Modulu Redaktə Et" :
                            isAddModule ? "Modul Əlavə Et" :
                                isAddLesson ? "Dərs Əlavə Et" :
                                    isEditLesson ? "Dərsi Redaktə Et" :
                                        isEditTraining ? "Kursu Redaktə Et" : "Kursu Əlavə Et"
                    }
                >
                    {
                        isEditModule || isAddModule ? (
                            <ModuleForm
                                isEdit={clickInfo.mode === 'edit'}
                                initialData={selectedModule as any}
                                onSuccess={() => setShowModal(false)}
                            />
                        ) : isEditLesson || isAddLesson ? (
                            <LessonForm
                                isEdit={clickInfo.mode === 'edit'}
                                initialData={selectedModule as Module}
                                onSuccess={() => setShowModal(false)}
                            />
                        ) : isCreateTraining || isEditTraining ? (
                            <AddTrainingAndUpdate
                                isEdit={clickInfo.mode === 'edit'}
                                initialData={selectedTraining}
                                onSuccess={() => setShowModal(false)}
                            />
                        ) : null
                    }

                </CustomModal>
            )}

            <div className="w-full flex justify-between px-3 ">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Kurslar</h2>
            </div>

            <AdminCourseTable
                isCourse={true}
                accordionThead={accordionThead}
                columns={columns}
                rows={rows}
                onEditClick={handleEditClick}
                onDeleteCourse={handleDisabledTraining}
            />

            <div className="left-[55%] absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton onClick={() => handleEditClick([], [], { type: "Add course", mode: "create" })} className="!w-[185px] !h-[56px] !font-[Lexend] !rounded-[18px]">
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div>
        </div>
    )
}

export default AdminCourses