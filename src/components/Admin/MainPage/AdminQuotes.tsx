import { useState } from "react";
import { useDeleteQuoteMutation, useGetAllQuotesQuery } from "../../../services/features/mainPage/quotesApi";
import LoadingSpinner from "../../General/LoadingSpinner";
import AdminTable from "../Tables/AdminTable";
import CustomModal from "../Modals/CustomModal";
import QuoteForm from "../Forms/QuoteForm";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import Swal from "sweetalert2";

const AdminQuotes = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedQuote, setSelectedQuote] = useState<{ id?: number; text: string; author: string } | null>(null);

    const { data: allQuotes, isLoading } = useGetAllQuotesQuery();
    const [deleteQuote] = useDeleteQuoteMutation();

    const handleDeleteQuote = async (id: number, deleteQuote: (id: number) => Promise<any>) => {
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
                Swal.fire('Silindi!', 'Sitat uğurla silindi.', 'success');
            } catch (error) {
                Swal.fire('Xəta!', 'Sitat silinərkən problem oldu.', 'error');
            }
        }
    };

    const openCreateModal = () => {
        setSelectedQuote(null); // yeni sitat üçün boş data
        setShowModal(true);
    };

    const openEditModal = (quote: { id: number; text: string; author: string }) => {
        setSelectedQuote(quote); // redaktə üçün seçilmiş sitat
        setShowModal(true);
    };

    return (
        <div className='w-full h-full py-10'>

            {showModal && (
                <CustomModal
                    onClose={() => setShowModal(false)}
                    title={selectedQuote ? 'Sitatı redaktə et' : 'Yeni sitat əlavə et'}
                >
                    <QuoteForm
                        onSuccess={() => setShowModal(false)}
                        initialData={selectedQuote || undefined}
                    />
                </CustomModal>
            )}

            <div className="w-full flex justify-between px-3">
                <h2 className='text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3'>Sitat sətri</h2>
            </div>

            {
                isLoading
                    ? <LoadingSpinner />
                    : (
                        <AdminTable
                            theads={["Sitat", "Müəllif"]}
                            allowActions={true}
                            rows={(allQuotes ?? []).map((quotes) => ({
                                id: quotes.id,
                                cells: [
                                    {
                                        text: quotes.text,
                                    },
                                    quotes.author,
                                ],
                            }))}
                            onEdit={(id) => {
                                const quoteToEdit = allQuotes?.find((q) => q.id === id);
                                if (quoteToEdit) {
                                    openEditModal(quoteToEdit);
                                }
                            }}
                            onDelete={(id) => handleDeleteQuote(+id, deleteQuote)}
                        />
                    )
            }

            <div className="w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton onClick={openCreateModal} className="!w-[185px] !h-[56px] !font-[Lexend]">
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div>
        </div>
    );
};

export default AdminQuotes;