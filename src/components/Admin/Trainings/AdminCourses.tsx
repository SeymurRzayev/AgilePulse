// import { useState } from "react";
// import { useDeleteQuoteMutation, useGetAllQuotesQuery } from "../../../services/features/mainPage/quotesApi";
// import LoadingSpinner from "../../General/LoadingSpinner";
/* import AdminTable from "../General/AdminTable";
import CustomModal from "../Modals/CustomModal";
import QuoteForm from "./QuoteForm";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import Swal from "sweetalert2"; */
import { type Column } from "../Tables/AdminQuizTable";
// import EditIcon from '../../../assets/icons/adminEdit.svg'
import { useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";
import { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import AdminCourseTable from "../Tables/AdminCourseTable";
import Swal from "sweetalert2";

const AdminCourses = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [_selectedTraining, setSelectedTraining] = useState<any>(null);
    // const [selectedQuote, setSelectedQuote] = useState<{ id?: number; text: string; author: string } | null>(null);
    // const { data: allQuizes, isLoading: isLoadingQuizes } = useGetAllQuizQuery()
    const { data: allTrainings } = useGetAllTrainingsQuery()
    console.log(allTrainings, 'allTrainings')
    // console.log(allQuizes, 'allQuizes')

    const handleEditClick = (training: any) => {
        setSelectedTraining(training);
        setShowModal(true);
    };

    const columns: Column[] = [
        { id: "title", label: "Kursun adi" },
        { id: "categoryName", label: "Kateqoriyasi", align: "right" },
        { id: "authorName", label: "author", align: "right" },
        { id: "modules", label: "Modul sayi", align: "right" },
        { id: "lesson", label: "Ders sayi", align: "right" },
        // { id: "question", label: "Sual sayi", align: "right" },
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

    const handleDisabledTraining = async (_questionId: number, _quizId: number, isActive: boolean, _refreshQuiz: () => void) => {
        const result = await Swal.fire({
            title: isActive ? "Aktivliyi dəyişmək istəyirsiniz?" : "Sualı deaktiv etmək istəyirsiniz?",
            text: isActive
                ? "Bu sual artıq aktiv olmayacaq."
                : "Bu sual artıq görünməyəcək.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Bəli, təsdiq et",
            cancelButtonText: "İmtina",
        });

        if (result.isConfirmed) {
            /*  try {
                 await disabledQuestion({ questionId, quizId, isActive });
                 setSelectedTraining({ ...selectedTraining, isActive });
                 refreshQuiz()
                 Swal.fire('Uğurlu', 'Sual uğurla silindi', 'success')
             } catch (error) {
                 console.error('Sualin aktivlik dəyişdirilmədi:', error);
             } */
        }
    };


    return (
        <div className=' w-full h-full py-10'>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title="Kursu Redaktə Et"
                >
                    da
                    {/*                     <TrainingForm
                        initialData={selectedTraining}
                        onSuccess={() => setShowModal(false)}
                    /> */}
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
                onDisabledQuestion={handleDisabledTraining}
            />

            {/*   {
                isLoadingQuizes
                    ? <LoadingSpinner />
                    : (
                        <AdminCourseTable isCourse={true} accordionThead={accordionThead} columns={columns} rows={rows} onEditClick={handleEditClick} />
                    )
            } */}


            {/* <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton onClick={openCreateModal} className="!w-[185px] !h-[56px] !font-[Lexend]">
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div> */}
        </div>
    )
}

export default AdminCourses