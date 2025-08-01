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
    const { data: allTrainings, refetch: refreshAllCourse } = useGetAllTrainingsQuery()

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
    const isEditTraining: boolean = clickInfo.type === 'Kursu redaktə et'
    const isAddModule: boolean = clickInfo.type === 'Modul əlavə et'
    const isAddLesson: boolean = clickInfo.type === 'Dərs əlavə et'
    const isEditModule: boolean = clickInfo.type === 'Modulu redaktə et'
    const isEditLesson: boolean = clickInfo.type === 'Dərsləri idarə et'

    const columns: Column[] = [
        { id: "title", label: "Kursun adı" },
        { id: "categoryName", label: "Kateqoriyası", align: "left" },
        { id: "authorName", label: "Sahibi", align: "left" },
        { id: "modules", label: "Modul sayı", align: "center" },
        { id: "lessons", label: "Dərs sayı", align: "center" }, 
    ];

    const accordionThead: Column[] = [
        { id: "modules", label: "Modullar", align: "left" },
        { id: "lessons", label: "Dərslər", align: "left" }, 
    ];

    const rows = (allTrainings ?? []).map(training => ({
        ...training,
        modules: training.modules?.length || 0,
        lessons: training.modules?.reduce((acc: number, module: any) => acc + (module.lessons?.length || 0), 0), 
        id: training.id,
    }));

    const handleDeleteTraining = async (
        refreshCourse: () => void,
        clickInfo: { id: number, type: 'course' | 'module' | 'lesson' }
    ) => {
        const labelAccusative = {
            course: 'Kursu',
            module: 'Modulu',
            lesson: 'Dərsi',
        };

        const labelNominative = {
            course: 'Kurs',
            module: 'Modul',
            lesson: 'Dərs',
        };

        const result = await Swal.fire({
            title: `${labelAccusative[clickInfo.type]} silmək istəyirsiniz?`,
            text: `${labelAccusative[clickInfo.type]} sildikdə bu məlumat artıq aktiv olmayacaq.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Bəli, təsdiq et',
            cancelButtonText: 'İmtina',
        });

        if (result.isConfirmed) {
            try {
                if (clickInfo.type === 'course') {
                    await deleteTraining(clickInfo.id).unwrap();
                    refreshAllCourse();
                } else if (clickInfo.type === 'module') {
                    await deleteModule(clickInfo.id).unwrap();
                    refreshCourse();
                } else if (clickInfo.type === 'lesson') {
                    await deleteLesson(clickInfo.id).unwrap();
                    refreshCourse();
                }

                Swal.fire('Uğurlu', `${labelNominative[clickInfo.type]} uğurla silindi`, 'success');
                setShowModal(false)
            } catch (error) {
                Swal.fire('Xəta', `${labelNominative[clickInfo.type]} silinmədi`, 'error');
                console.error(`${labelNominative[clickInfo.type]} silinmədi:`, error);
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
                                    isEditLesson ? "Dərsləri idarə et" :
                                        isEditTraining ? "Kursu Redaktə Et" : "Dərsləri Redaktə et"
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
                                onDelete={handleDeleteTraining}
                            />
                        ) : isCreateTraining || isEditTraining ? (
                            <AddTrainingAndUpdate
                                isEdit={clickInfo.mode === 'edit'}
                                initialData={selectedTraining}
                                onSuccess={() => setShowModal(false)}
                                refreshAllCourse={refreshAllCourse}
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
                onDeleteCourse={handleDeleteTraining}
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