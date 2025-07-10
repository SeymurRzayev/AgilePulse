import React, { useState } from "react";
import AdminTable from "../General/AdminTable";
import Swal from "sweetalert2";
import {
  useGetTrainersQuery,
  useDeleteTrainerMutation,
} from "../../../services/features/trainingPage/trainerApi";
import LoadingSpinner from "../../General/LoadingSpinner";
import { FaChevronDown } from "react-icons/fa6";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";

import CustomModal from "../Modals/CustomModal";
import EditAndCreateTrainer from "./EditAndCreateTrainer";
import type { Trainer } from "../../../types/types";

const AdminTrainers: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedTrainer, setSelectedTrainer] = useState<{
    id: number;
    name: string;
    surname: string;
    position: string;
    description: string;
    imageUrl: string;
  } | null>(null);

  const { data: trainers, isLoading } = useGetTrainersQuery();
  const [deleteTrainer] = useDeleteTrainerMutation();

  console.log(trainers);

  const handleDelete = async ({ id }: { id: number }) => {
    Swal.fire({
      title: "Əminsiniz?",
      text: "Bu kateqoriyanı silmək istədiyinizdən əminsiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Bəli, sil",
      cancelButtonText: "Ləğv et",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteTrainer(id).unwrap();
          Swal.fire("Silindi!", "Kateqoriya uğurla silindi.", "success");
        } catch (error) {
          Swal.fire("Xəta!", "Silinmə zamanı xəta baş verdi.", "error");
        }
      }
    });
  };

  const arrFilterer = (arr: Trainer[], id: number) => {
    return arr.find((trainer) => trainer.id === Number(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-[Corbel] text-[#000000DE] font-normal mb-3">
        Təlimçilər
      </h2>
      {openModal && (
        <CustomModal
          title={
            selectedTrainer ? "Təlimçini redaktə et" : "Yeni Təlimçi əlavə et"
          }
          onClose={() => setOpenModal(false)}
        >
          <EditAndCreateTrainer
            id={selectedTrainer?.id}
            initialName={selectedTrainer?.name}
            initialSurname={selectedTrainer?.surname}
            initialPosition={selectedTrainer?.position}
            initialDescription={selectedTrainer?.description}
            // initialImg={selectedTrainer?.imageUrl}
            onClose={() => setOpenModal(false)}
          />
        </CustomModal>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <AdminTable
          theads={["Təlimçinin adı", "Vəzifəsi", "Rol"]}
          allowActions={true}
          rows={(trainers ?? []).map((trainer) => ({
            id: trainer.id,
            cells: [
              {
                text: `${trainer.name} ${trainer.surname}`,
                image: trainer.imageUrl,
                imageShape: "circle",
              },
              trainer.position,
              {
                text: "",
                icon: <FaChevronDown className="text-lg cursor-pointer" />,
              }, // Provide an empty string for text to satisfy the TableCellContent type
            ],
          }))}
          onEdit={(id) => {
            setOpenModal(true);
            setSelectedTrainer({
              id: Number(id),
              name: arrFilterer(trainers ?? [], Number(id))?.name ?? "",
              surname: arrFilterer(trainers ?? [], Number(id))?.surname ?? "",
              position: arrFilterer(trainers ?? [], Number(id))?.position ?? "",
              description:
                arrFilterer(trainers ?? [], Number(id))?.description ?? "",
              imageUrl: arrFilterer(trainers ?? [], Number(id))?.imageUrl ?? "",
            });
          }}
          onDelete={(id) => handleDelete({ id: Number(id) })}
        />
      )}

      <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
        <AnimatedButton
          onClick={() => {
            setSelectedTrainer(null); // yeni əlavədir deyə null verirem
            setOpenModal(true); // modalı açıram
          }}
          className="!w-[185px] !h-[56px] "
        >
          Əlavə et <span className="text-3xl ml-2 font-light">+</span>
        </AnimatedButton>
      </div>
    </div>
  );
};


export default AdminTrainers;
