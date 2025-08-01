import LoadingSpinner from "../../General/LoadingSpinner";
import { useDisabledQuestionMutation, useGetAllQuizQuery } from "../../../services/features/trainingPage/quizApi";
import AdminQuizTable, { type Column } from "../Tables/AdminQuizTable";
import { useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";
import { useState } from "react";
import CustomModal from "../Modals/CustomModal";
import Swal from "sweetalert2";
import QuizForm from "../Forms/QuizForm";
import CreateQuiz from "../Forms/CreateQuiz";

const AdminQuotes = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedTraining, setSelectedTraining] = useState<any>(null);
    const { data: allQuizes, isLoading: isLoadingQuizes, refetch: refetchQuizes } = useGetAllQuizQuery()
    const { data: allTrainings, refetch: refetchTrainings } = useGetAllTrainingsQuery()
    const [disabledQuestion] = useDisabledQuestionMutation()

    const handleEditClick = (training: any = []) => {
        const relatedQuiz = allQuizes?.find(q => q.trainingId === training.id); // Əgər training ilə əlaqəli quiz varsa, onu seç
        const quizId = relatedQuiz?.id; // Əgər quiz varsa, onun id-sini al
        setSelectedTraining({ ...training, quizId, refetchTrainings: refetchTrainings, refetchQuizes: refetchQuizes });
        setShowModal(true);
    };

    const handleDisabledQuestion = async (questionId: number, quizId: number, isActive: boolean, refreshQuiz: () => void, questionCount: number) => {
        if (questionCount < 25) {
            Swal.fire('Xəta', 'Sual sayı 25dən az olmalıdır', 'error')
            return
        }
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
        { id: "title", label: "Kursun adı" },
        { id: "categoryName", label: "Kateqoriyası", align: "left" },
        { id: "authorName", label: "Sahibi", align: "left" },
        { id: "modules", label: "Modul sayı", align: "center" },
        { id: "lesson", label: "Dərs sayı", align: "center" },
        { id: "question", label: "Sual sayı", align: "center" },
    ];

    const accordionThead: Column[] = [
        { id: "question", label: "Sual", align: 'left' },
        { id: "correctAnswer", label: "Düzgün Cavab", align: 'left' },
    ];

    const rows = (allTrainings ?? []).map(training => {
        const quiz = allQuizes?.find(q => q.trainingId === training.id);
        const questionCount = quiz?.questions?.length || 0;

        return {
            ...training,
            modules: training.modules?.length || 0,
            lesson: training.modules?.reduce((acc: number, module: any) => acc + (module.lessons?.length || 0), 0),
            trainingId: training.id,
            question: questionCount,
            questionCount,
        };
    });


    return (
        <div className=' w-full h-full py-10'>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={selectedTraining.isEdit ? 'Sualı redaktə et' : (selectedTraining.isCreateQuiz ? 'Quiz yarat' : 'Kursa yeni sual əlavə et')}
                >
                    {
                        selectedTraining.isCreateQuiz
                            ? <CreateQuiz
                                refreshQuiz={refetchTrainings}
                                trainingId={selectedTraining.trainingId}
                            />
                            : <QuizForm
                                refreshIdQuiz={selectedTraining.refreshIdQuiz}
                                refetchQuizes={refetchQuizes}
                                refetchTrainings={refetchTrainings}
                                initialData={selectedTraining}
                                onSuccess={() => setShowModal(false)}
                            />
                    }

                </CustomModal>
            )}

            <div className="w-full flex justify-between px-3 ">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Quizlər</h2>
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