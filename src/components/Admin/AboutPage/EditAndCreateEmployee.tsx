import { useState } from "react";
import Swal from "sweetalert2";
import {
 useCreateTeamMemeberMutation,
 useGetAllTeamQuery,
 useUpdateEmployeeMutation,
} from "../../../services/features/about/teamApi";
import LoadingSpinner from "../../General/LoadingSpinner";

interface EditAndCreateEmployeeProps {
 initialName?: string;
 initialSurname?: string;
 initialPosition?: string;
 initialDescription?: string;
 initialImg?: string;
 id?: number;
 onClose?: () => void;
}

const EditAndCreateEmployee = ({
 initialName,
 initialSurname,
 initialPosition,
 initialDescription,
 id,
 onClose,
}: EditAndCreateEmployeeProps) => {
 const [name, setName] = useState(initialName ?? "");
 const [surname, setSurname] = useState(initialSurname ?? "");
 const [position, setPosition] = useState(initialPosition ?? "");
 const [description, setDescription] = useState(initialDescription ?? "");
 const [image, setImage] = useState<File | null>(null);


  const handleSave = async () => {
    if (isEditMode) {
      try {
        const formData = new FormData();
        formData.append("name", name as string);
        formData.append("surname", surname as string);
        formData.append("position", position as string);
        formData.append("description", description as string);
        if (image) {
          formData.append("image", image);
        }

        await updateEmployee({ id: id as number, data: formData }).unwrap();
        refetch();
        Swal.fire("Uğurlu", "Kateqoriya uğurla dəyişdirildi", "success");
        onClose?.();
      } catch (error) {
        console.log(error);
        Swal.fire("Xəta", "Xəta baş verdi", "error");
      }
    } else {
      try {
        const formData = new FormData();

        formData.append("name", name as string);
        formData.append("surname", surname as string);
        formData.append("position", position as string);
        formData.append("description", description as string);
        if (image) {
          formData.append("image", image);
        }
        await createEmployee(formData).unwrap();
        console.log({ id, name, surname, position, description, image });
        Swal.fire("Uğurlu", "Yeni işçi uğurla yaradıldı", "success");
        onClose?.();
      } catch (error) {
        Swal.fire("Xəta", "Xəta baş verdi", "error");
      }
    }
  };

 const { refetch } = useGetAllTeamQuery();
 const [updateEmployee, { isLoading: isLoadingUpdate }] =
   useUpdateEmployeeMutation();
 const [createEmployee, { isLoading: isLoadingCreate }] =
   useCreateTeamMemeberMutation();
 const isEditMode: boolean = !!id;

 const handleSave = async () => {
   if (isEditMode) {
     try {
       const formData = new FormData();
       formData.append("name", name as string);
       formData.append("surname", surname as string);
       formData.append("position", position as string);
       formData.append("description", description as string);
       if (image) {
         formData.append("image", image);
       }
       await updateEmployee({ id: id as number, data: formData }).unwrap();
       refetch();
       Swal.fire("Uğurlu", "Kateqoriya uğurla dəyişdirildi", "success");
       onClose?.();
     } catch (error) {
       Swal.fire("Xəta", "Xəta baş verdi", "error");
     }
   } else {
     try {
       const formData = new FormData();
       formData.append("name", name as string);
       formData.append("surname", surname as string);
       formData.append("position", position as string);
       formData.append("description", description as string);
       if (image) {
         formData.append("image", image);
       }

       await createEmployee(formData).unwrap();
       Swal.fire("Uğurlu", "Yeni işçi uğurla yaradıldı", "success");
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
       placeholder="İşçinin adı"
     />

     <input
       type="text"
       value={surname}
       onChange={(e) => setSurname(e.target.value)}
       className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
       placeholder="İşçinin soyadı"
     />

     <input
       type="text"
       value={position}
       onChange={(e) => setPosition(e.target.value)}
       className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
       placeholder="İşçinin vəzifəsi"
     />

     <textarea
       rows={4}
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       className="resize-none w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
       placeholder="İşçi haqqında"
     ></textarea>
     
     <input
       type="file"
       accept="image/*"
       onChange={(e) => {
         const file = e.target.files?.[0];
         if (file) {
           setImage(file);
         }
       }}
       className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-1 focus:ring-[#2C4B9B] focus:border-[#2C4B9B] transition"
       placeholder="İşçinin Fotosu"
     />
     
     <button
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

export default EditAndCreateEmployee;