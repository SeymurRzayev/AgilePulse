import LoadingSpinner from "../../General/LoadingSpinner";
import { useDisabledQuestionMutation, useGetAllQuizQuery } from "../../../services/features/trainingPage/quizApi";
import AdminQuizTable, { type Column } from "../Tables/AdminQuizTable";
import { useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";
import { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import Swal from "sweetalert2";
import QuizForm from "../Forms/QuizForm";

const AdminQuotes = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedTraining, setSelectedTraining] = useState<any>(null);
    const { data: allQuizes, isLoading: isLoadingQuizes } = useGetAllQuizQuery()
    const { data: allTrainings } = useGetAllTrainingsQuery()
    const [disabledQuestion] = useDisabledQuestionMutation()

    const handleEditClick = (training: any = []) => {
        const relatedQuiz = allQuizes?.find(q => q.trainingId === training.id); // Əgər training ilə əlaqəli quiz varsa, onu seç
        const quizId = relatedQuiz?.id; // Əgər quiz varsa, onun id-sini al
        setSelectedTraining({ ...training, quizId });
        setShowModal(true);
    };

    const handleDisabledQuestion = async (questionId: number, quizId: number, isActive: boolean, refreshQuiz: () => void) => {
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
            try {
                await disabledQuestion({ questionId, quizId, isActive });
                setSelectedTraining({ ...selectedTraining, isActive });
                refreshQuiz()
                Swal.fire('Uğurlu', 'Sual uğurla silindi', 'success')
            } catch (error) {
                console.error('Sualin aktivlik dəyişdirilmədi:', error);
            }
        }
    };


    const columns: Column[] = [
        { id: "title", label: "Kursun adi" },
        { id: "categoryName", label: "Kateqoriyasi", align: "left" },
        { id: "authorName", label: "author", align: "left" },
        { id: "modules", label: "Modul sayi", align: "center" },
        { id: "lesson", label: "Ders sayi", align: "center" },
        // { id: "question", label: "Sual sayi", align: "right" },
    ];

    const accordionThead: Column[] = [
        { id: "question", label: "Sual", align: 'left' },
        { id: "correctAnswer", label: "Düzgün Cavab", align: 'left' },
    ];

    const rows = (allTrainings ?? []).map(training => ({
        ...training,
        modules: training.modules?.length || 0,
        lesson: training.modules?.reduce((acc: number, module: any) => acc + (module.lessons?.length || 0), 0),
        trainingId: training.id,
    }));

    return (
        <div className=' w-full h-full py-10'>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={selectedTraining.isEdit ? 'Sualı redaktə et' : 'Kursa yeni sual əlavə et'}
                >
                    <QuizForm

                        refreshQuiz={selectedTraining.refreshQuiz}
                        initialData={selectedTraining}
                        onSuccess={() => setShowModal(false)}
                    />
                </CustomModal>
            )}

            <div className="w-full flex justify-between px-3 ">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Quizler</h2>
            </div>

            {
                isLoadingQuizes
                    ? <LoadingSpinner />
                    : (
                        <AdminQuizTable
                            isCourse={false}
                            accordionThead={accordionThead}
                            columns={columns}
                            rows={rows}
                            onEditClick={handleEditClick}
                            onDisabledQuestion={handleDisabledQuestion}

                        />
                    )
            }
        </div>
    )
}

export default AdminQuotes