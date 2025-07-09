import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../../services/features/trainingPage/categoryApi"
import ListItem from "../General/ListItem"
import '../Admin.css'
import LoadingSpinner from "../../General/LoadingSpinner"
import { useState } from "react"
import CustomModal from "../Modals/CustomModal"
import EditAndCreateCategorie from "./EditAndCreateCategorie"
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton"
import Swal from "sweetalert2"

const AdminCategories = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectedCategory, setSelectedCategory] = useState<{ id: number, name: string } | null>(null);

    const { data: categories, isLoading } = useGetCategoriesQuery()
    const [deleteCategory,] = useDeleteCategoryMutation()

    const handleDelete = async ({ id }: { id: number }) => {
        Swal.fire({
            title: 'Əminsiniz?',
            text: 'Bu kateqoriyanı silmək istədiyinizdən əminsiniz?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Bəli, sil',
            cancelButtonText: 'Ləğv et'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteCategory({ id: id }).unwrap();
                    Swal.fire('Silindi!', 'Kateqoriya uğurla silindi.', 'success');
                } catch (error) {
                    Swal.fire('Xəta!', 'Silinmə zamanı xəta baş verdi.', 'error');
                }
            }
        });
    }


    return (
        <div className="">
            <h2 className="text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3">Kateqoriyalar</h2>
            {
                openModal && <CustomModal
                    title={selectedCategory ? "Kateqoriyanı redaktə et" : "Yeni kateqoriya əlavə et"}
                    onClose={() => setOpenModal(false)}
                >
                    <EditAndCreateCategorie
                        id={selectedCategory?.id}
                        initialValue={selectedCategory?.name}
                        onClose={() => setOpenModal(false)}
                    />
                </CustomModal>
            }
            {
                isLoading
                    ? <LoadingSpinner />
                    : (
                        <ul style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            className="space-y-[19px] max-h-[545px] mt-5 overflow-y-scroll"
                        >
                            {
                                categories?.map(categorie => <ListItem
                                    onEdit={() => {
                                        setSelectedCategory({ id: categorie.id, name: categorie.name });
                                        setOpenModal(true);
                                    }}
                                    onDelete={() => handleDelete({ id: categorie.id })}
                                    key={categorie.id}
                                    content={categorie.name}
                                    id={categorie.id}
                                />)
                            }
                        </ul>
                    )
            }
            <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
                <AnimatedButton
                    onClick={() => {
                        setSelectedCategory(null);      // yeni əlavədir deyə null verirem
                        setOpenModal(true);             // modalı açıram
                    }}
                    className="!w-[185px] !h-[56px] !font-[Lexend]"
                >
                    Əlavə et <span className="text-3xl ml-2 font-light">+</span>
                </AnimatedButton>
            </div>

        </div>
    )
}

export default AdminCategories