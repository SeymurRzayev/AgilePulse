// import { useState } from "react";
// import { useDeleteQuoteMutation, useGetAllQuotesQuery } from "../../../services/features/mainPage/quotesApi";
import LoadingSpinner from "../../General/LoadingSpinner";
/* import AdminTable from "../General/AdminTable";
import CustomModal from "../Modals/CustomModal";
import QuoteForm from "./QuoteForm";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import Swal from "sweetalert2"; */
import { useGetAllQuizQuery } from "../../../services/features/trainingPage/quizApi";
import AdminCourseTable, { type Column } from "../General/AdminCourseTable";
// import EditIcon from '../../../assets/icons/adminEdit.svg'
import { useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";

const AdminQuotes = () => {

    // const [showModal, setShowModal] = useState<boolean>(false);
    // const [selectedQuote, setSelectedQuote] = useState<{ id?: number; text: string; author: string } | null>(null);
    const { data: allQuizes, isLoading: isLoadingQuizes } = useGetAllQuizQuery()
    const { data: allTrainings } = useGetAllTrainingsQuery()
    console.log(allQuizes)

    const columns: Column[] = [
        { id: "title", label: "Kursun adi" },
        { id: "categoryName", label: "Kateqoriyasi", align: "right" },
        { id: "authorName", label: "author", align: "right" },
        { id: "modules", label: "Modul sayi", align: "right" },
        { id: "lesson", label: "Ders sayi", align: "right" },
        // { id: "question", label: "Sual sayi", align: "right" },
    ];

    const rows = (allTrainings ?? []).map(training => ({
        ...training,
        modules: training.modules?.length || 0,
        lesson: training.modules?.reduce((acc: number, module: any) => acc + (module.lessons?.length || 0), 0),
        // question: training.quizCount || 0, // əgər API-də quiz-lərin sayı varsa, onu da əlavə edə bilərsən
        /*  history: training.id?.map((id: any) => ({
             date: quiz.question,
             customerId: quiz.correctAnswer
         })) || [] */
    }));

    /*  const handleDeleteQuote = async (id: number, deleteQuote: (id: number) => Promise<any>) => {
         const result = await Swal.fire({
             title: 'Əminsiniz?',
             text: "Bu sitatı silmək istədiyinizdən əminsiniz?",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#d33',
             cancelButtonColor: '#3085d6',
             confirmButtonText: 'Bəli, sil!',
             cancelButtonText: 'İmtina',
         });
 
         if (result.isConfirmed) {
             try {
                 await deleteQuote(id);
                 Swal.fire('Silindi!', 'Sitat uğurla silindi edildi.', 'success');
             } catch (error) {
                 Swal.fire('Xəta!', 'Sitat silinərkən problem oldu.', 'error');
             }
         }
     }; */


    /* const openCreateModal = () => {
        setSelectedQuote(null); // yeni sitat üçün boş data
        setShowModal(true);
    };

    const openEditModal = (quote: { id: number; text: string; author: string }) => {
        setSelectedQuote(quote); // redaktə üçün seçilmiş sitat
        setShowModal(true);
    }; */

    return (
        <div className=' w-full h-full py-10'>

            {/* {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={selectedQuote ? 'Sitatı redaktə et' : 'Yeni sitat əlavə et'}
                >
                    <QuoteForm
                        onSuccess={() => setShowModal(false)}
                        initialData={selectedQuote || undefined}
                    />
                </CustomModal>
            )} */}

            <div className="w-full flex justify-between px-3 ">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Quizler</h2>
            </div>

            {
                isLoadingQuizes
                    ? <LoadingSpinner />
                    : (
                        <AdminCourseTable columns={columns} rows={rows} />
                    )
            }


            {/* <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton onClick={openCreateModal} className="!w-[185px] !h-[56px] !font-[Lexend]">
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div> */}
        </div>
    )
}

export default AdminQuotes