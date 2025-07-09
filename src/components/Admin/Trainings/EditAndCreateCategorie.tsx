import { useState } from "react";
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "../../../services/features/trainingPage/categoryApi";
import Swal from "sweetalert2";
import LoadingSpinner from "../../General/LoadingSpinner";


interface EditAndCreateCategorieProps {
    initialValue?: string;
    id?: number;
    onClose?: () => void;
}

const EditAndCreateCategorie = ({ initialValue, id, onClose }: EditAndCreateCategorieProps) => {
    const [name, setName] = useState(initialValue ?? '');
    const [updateCategory, { isLoading: isLoadingUpdate }] = useUpdateCategoryMutation()
    const [createCategory, { isLoading: isLoadingCreate }] = useCreateCategoryMutation()

    const isEditMode: boolean = !!id;

    const handleSave = async () => {
        if (isEditMode) {
            try {
                await updateCategory({ id: id as number, name: name as string }).unwrap()
                Swal.fire('Uğurlu', 'Kateqoriya uğurla dəyişdirildi', 'success')
                onClose?.()
            } catch (error) {
                Swal.fire('Xəta', 'Xəta baş verdi', 'error')
            }
        } else {
            try {
                await createCategory({ name: name as string }).unwrap()
                Swal.fire('Uğurlu', 'Kateqoriya uğurla yaradıldı', 'success')
                onClose?.()
            } catch (error) {
                Swal.fire('Xəta', 'Xəta baş verdi', 'error')
            }
        }
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
                placeholder="Kateqoriya adı"
            />
            <button
                disabled={isLoadingUpdate || isLoadingCreate}
                onClick={handleSave}
                className="w-full mt-5 flex items-center justify-center cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"
            >
                {isLoadingUpdate || isLoadingCreate ? <LoadingSpinner size={25} /> : (isEditMode ? "Dəyişdir" : "Yarat")}
            </button>
        </div>
    )
}

export default EditAndCreateCategorie