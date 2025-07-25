import { useState } from "react";
import LoadingSpinner from "../../General/LoadingSpinner";
import AdminTable from "../Tables/AdminTable";
import CustomModal from "../Modals/CustomModal";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import Swal from "sweetalert2";
import { useDeleteFaqMutation, useGetAllFaqsQuery } from "../../../services/features/mainPage/faqApi";
import FaqForm from "../Forms/FaqForm";
import TrainingsSearchContainer from "../../Trainings/TrainingsSearchContainer";
const AdminFaq = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedFaq, setSelectedFaq] = useState<{ id?: number; question: string; answer: string } | null>(null);
    const [search, setSearch] = useState("");
    const { data, isLoading } = useGetAllFaqsQuery()
    const [deleteFaq] = useDeleteFaqMutation()
    const allFaqs = data?.data.data || [];
    const filteredFaq = allFaqs.filter(faq =>
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase())
    );

    const handleDeleteFaq = async (id: number, deleteFaq: (id: number) => Promise<any>) => {
        const result = await Swal.fire({
            title: 'Əminsiniz?',
            text: "Bu FAQ-ı silmək istədiyinizdən əminsiniz?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Bəli, sil!',
            cancelButtonText: 'İmtina',
        });

        if (result.isConfirmed) {
            try {
                await deleteFaq(id);
                Swal.fire('Silindi!', 'FAQ uğurla silindi edildi.', 'success');
            } catch (error) {
                Swal.fire('Xəta!', 'FAQ silinərkən problem oldu.', 'error');
            }
        }
    };


    const openCreateModal = () => {
        setSelectedFaq(null); // yeni faq üçün boş data
        setShowModal(true);
    };

    const openEditModal = (faq: { id: number; question: string; answer: string }) => {
        setSelectedFaq(faq); // redaktə üçün seçilmiş faq
        setShowModal(true);
    };

    return (
        <div className=' w-full h-full py-10 '>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={selectedFaq ? 'FAQ redaktə et' : 'Yeni FAQ əlavə et'}
                >
                    <FaqForm
                        onSuccess={() => setShowModal(false)}
                        initialData={selectedFaq || undefined}
                    />
                </CustomModal>
            )}

            <div className="w-full flex justify-between px-3 ">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>FAQ</h2>
            </div>
            <div className="w-[669px] h-fit">
                <TrainingsSearchContainer
                    searchValue={search}
                    onSearchChange={setSearch}
                    filterIcon={false}
                    height={56}
                />
            </div>
            {
                isLoading
                    ? <LoadingSpinner />
                    : (
                        <AdminTable
                            theads={["Question", "Answer"]}
                            allowActions={true}
                            rows={(filteredFaq ?? []).map((faqs) => ({
                                id: faqs.id!,
                                cells: [
                                    {
                                        text: `${faqs.question} `,
                                    },
                                    faqs.answer,
                                ],
                            }))}
                            onEdit={(id) => {
                                const faqToEdit = filteredFaq?.find((q) => q.id === id);
                                if (faqToEdit && faqToEdit.id !== undefined) {
                                    openEditModal(faqToEdit as { id: number; question: string; answer: string });
                                }
                            }}
                            onDelete={(id) => handleDeleteFaq(+id, deleteFaq)}
                        />
                    )
            }


            <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton onClick={openCreateModal} className="!w-[185px] !h-[56px] !font-[Lexend]">
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div>
        </div>
    )
}

export default AdminFaq