import { useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../../General/LoadingSpinner";
import {
  useUpdateTrainerMutation,
  useCreateTrainerMutation,
} from "../../../services/features/trainingPage/trainerApi";

interface EditAndCreateTrainerProps {
  initialName?: string;
  initialSurname?: string;
  initialPosition?: string;
  initialDescription?: string;
  initialImg?: string;
  id?: number;
  onClose?: () => void;
}

const EditAndCreateTrainer = ({
  initialName,
  initialSurname,
  initialPosition,
  initialDescription,
  initialImg,
  id,
  onClose,
}: EditAndCreateTrainerProps) => {
  const [name, setName] = useState(initialName ?? "");
  const [surname, setSurname] = useState(initialSurname ?? "");
  const [position, setPosition] = useState(initialPosition ?? "");
  const [description, setDescription] = useState(initialDescription ?? "");
  const [imageUrl, setImageUrl] = useState(initialImg ?? "");
  const [updateCategory, { isLoading: isLoadingUpdate }] =
    useUpdateTrainerMutation();
  const [createCategory, { isLoading: isLoadingCreate }] =
    useCreateTrainerMutation();

  const isEditMode: boolean = !!id;

  const handleSave = async () => {
    if (isEditMode) {
      try {
        await updateCategory({
          id: id as number,
          name: name as string,
          surname: surname as string,
          position: position as string,
          description: description as string,
          imageUrl: imageUrl as string,
        }).unwrap();
        Swal.fire("Uğurlu", "Kateqoriya uğurla dəyişdirildi", "success");
        onClose?.();
      } catch (error) {
        Swal.fire("Xəta", "Xəta baş verdi", "error");
      }
    } else {
      try {
        await createCategory({
          id: id as number,
          name: name as string,
          surname: surname as string,
          position: position as string,
          description: description as string,
          imageUrl: imageUrl as string,
        }).unwrap();
        Swal.fire("Uğurlu", "Kateqoriya uğurla yaradıldı", "success");
        onClose?.();
      } catch (error) {
        Swal.fire("Xəta", "Xəta baş verdi", "error");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
        placeholder="Təlimçi adı"
      />

      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
        placeholder="Təlimçi soyadı"
      />

      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
        placeholder="Təlimçi vəzifəsi"
      />

      <textarea
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="resize-nonew-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
        placeholder="Təlimçi haqqında"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              if (reader.result) {
                setImageUrl(reader.result.toString());
              }
            };
            reader.onerror = () => {
              Swal.fire("Xəta", "Şəkil yüklənə bilmədi", "error");
            };
            reader.readAsDataURL(file);
          }
        }}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
        placeholder="Təlimçi Fotosu"
      />
      <button
        disabled={isLoadingUpdate || isLoadingCreate}
        onClick={handleSave}
        className="w-full mt-5 flex items-center justify-center cursor-pointer bg-[#2C4B9B] hover:bg-[#1e3576] text-white py-3 px-6 rounded-lg font-semibold transition bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"
      >
        {isLoadingUpdate || isLoadingCreate ? (
          <LoadingSpinner size={25} />
        ) : isEditMode ? (
          "Dəyişdir"
        ) : (
          "Yarat"
        )}
      </button>
    </div>
  );
};

export default EditAndCreateTrainer;
