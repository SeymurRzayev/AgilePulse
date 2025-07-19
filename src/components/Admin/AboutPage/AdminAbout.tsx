import React from "react";
import { useState } from "react";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import CustomModal from "../Modals/CustomModal";
import EditAndCreateEmployee, { getPositionLabel } from "./EditAndCreateEmployee";
import {
 useDeleteEmployeeMutation,
 useGetAllTeamQuery,
} from "../../../services/features/about/teamApi";
import Swal from "sweetalert2";
import type { TeamMember } from "../../../types/types";
import LoadingSpinner from "../../General/LoadingSpinner";
import AdminTable from "../Tables/AdminTable";

const AdminAbout: React.FC = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<{
    id: number;
    name: string;
    surname: string;
    position: string;
    description: string;
    imageUrl: string;
  } | null>(null);
  const { data: getAllTeam, isLoading, refetch } = useGetAllTeamQuery();
  const teamData = getAllTeam?.data?.data ?? [];
  const [deleteEmployee] = useDeleteEmployeeMutation();
  // console.log(teamData);




 const handleDelete = async ({ id }: { id: number }) => {
   Swal.fire({
     title: "Əminsiniz?",
     text: "Bu Təlimçini silmək istədiyinizdən əminsiniz?",
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Bəli, sil",
     cancelButtonText: "Ləğv et",
   }).then(async (result) => {
     if (result.isConfirmed) {
       try {
         await deleteEmployee(id).unwrap();
         refetch();
         Swal.fire("Silindi!", "Təlimçi uğurla silindi.", "success");
       } catch (error) {
         Swal.fire("Xəta!", "Silinmə zamanı xəta baş verdi.", "error");
       }
     }
   });
 };
 
 const arrFilterer = (arr: TeamMember[], id: number) => {
   return arr.find((employee) => employee.id === Number(id));
 };

 return (
   <div className="w-full flex flex-col justify-center gap-10">
     <h2 className="font-normal text-2xl leading-8">Komandamız</h2>

     {openModal && (
       <CustomModal
         title={
           selectedEmployee
             ? "İşçi məlumatlarını redaktə et"
             : "Yeni işçi əlavə et"
         }
         onClose={() => setOpenModal(false)}
       >
         <EditAndCreateEmployee
           id={selectedEmployee?.id}
           initialName={selectedEmployee?.name}
           initialSurname={selectedEmployee?.surname}
           initialPosition={selectedEmployee?.position}
           onClose={() => setOpenModal(false)}
         />
       </CustomModal>
     )}
     {isLoading ? (
       <LoadingSpinner />
     ) : (
       <AdminTable
         allowActions={true}
         theads={["Ad, soyad", "vəzifəsi"]}
         rows={(teamData ?? []).map((employee) => ({
           id: employee.id!,
           cells: [
             {
               text: `${employee.name} ${employee.surname}`,
               image: `${employee.imageUrl}`,
               imageShape: "square",
             },
             {
               text:  getPositionLabel(employee.position),
             },
           ],
         }))}
         onEdit={(id: number | string) => {
           setOpenModal(true);
           setSelectedEmployee({
             id: Number(id),
             name: arrFilterer(teamData ?? [], Number(id))?.name ?? "",
             surname: arrFilterer(teamData ?? [], Number(id))?.surname ?? "",
             position: arrFilterer(teamData ?? [], Number(id))?.position ?? "",
             description:
               arrFilterer(teamData ?? [], Number(id))?.description ?? "",
             imageUrl: arrFilterer(teamData ?? [], Number(id))?.imageUrl ?? "",
           });
         }}
         onDelete={(id) => handleDelete({ id: Number(id) })}
       />
     )}

     <div className="w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
       <AnimatedButton
         onClick={() => {
           setSelectedEmployee(null);
           setOpenModal(true);
         }}
         className="!w-[185px] !h-[56px]"
       >
         Əlavə et <span className="text-3xl ml-2 font-light">+</span>
       </AnimatedButton>
     </div>
   </div>
 );
};

export default AdminAbout;