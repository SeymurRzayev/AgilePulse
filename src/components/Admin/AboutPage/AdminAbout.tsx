import React from "react";
import { useState } from "react";
import AdminTable from "../General/AdminTable";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";
import managerImg from "../../../assets/images/trainer1.jpg";
import CustomModal from "../Modals/CustomModal";
import EditAndCreateEmployee from "./EditAndCreateEmployee";
const people = [
  {
    id: 1,
    name: "Səadət",
    surname: "huseynova",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    img: managerImg,
  },
  {
    id: 2,
    name: "Murad",
    surname: "Məmmədov ",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    img: managerImg,
  },
  {
    id: 3,
    name: "Murad",
    surname: "Məmmədov ",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    img: managerImg,
  },
];

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
  return (
    <div className="w-full flex flex-col justify-center  gap-10">
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
      <AdminTable
        allowActions={true}
        theads={["Ad, soyad", "vəzifəsi", "Məlumat"]}
        rows={people.map((employee) => ({
          id: employee.id,
          cells: [
            {
              text: `${employee.name} ${employee.surname} `,
              image: `${employee.img}`,
              imageShape: "square",
            },
            {
              text: `${employee.occupation}`,
            },
            {
              text: `${employee.jobDescription}`,
            },
          ],
        }))}
  
      />
      <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
        <AnimatedButton
        onClick={()=>{
        setSelectedEmployee(null);
          setOpenModal(true);
        }}
        className="!w-[185px] !h-[56px] ">
          Əlavə et <span className="text-3xl ml-2 font-light">+</span>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AdminAbout;
