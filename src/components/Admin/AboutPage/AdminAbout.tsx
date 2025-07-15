import React from "react";
// import { useState } from "react";
import AdminTable from "../General/AdminTable";
import AnimatedButton from "../../../ui/AnimatedButton/AnimatedButton";

const people = [
  {
    id: 1,
    name: "Səadət Hüseynova",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    // img: managerImg,
  },
  {
    id: 2,
    name: "Məmmədov Murad",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    // img: managerImg,
  },
  {
    id: 3,
    name: "Məmmədov Murad",
    occupation: "Agile Coach",
    jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    // img: managerImg,
  },
];

const AdminAbout: React.FC = () => {
  //   const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-col justify-center  gap-10">
      <h2 className="font-normal text-2xl leading-8">Komandamız</h2>
      <AdminTable
        allowActions={true}
        theads={["Ad, soyad", "vəzifəsi", "Məlumat"]}
        rows={people.map((person) => ({
          id: person.id,
          cells: [
            {
              text: `${person.name} `,
            },
            {
              text: `${person.occupation}`,
            },
            {
              text: `${person.jobDescription}`,
            },
          ],
        }))}
      />
      <div className=" w-full max-w-[1105px] mx-auto absolute bottom-0 mb-10 flex items-center justify-center">
        <AnimatedButton className="!w-[185px] !h-[56px] ">
          Əlavə et <span className="text-3xl ml-2 font-light">+</span>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AdminAbout;
