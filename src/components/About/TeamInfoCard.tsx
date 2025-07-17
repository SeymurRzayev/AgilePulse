import type { FC } from "react";

// 1. Define the occupation enum
const Occupation: Record<string, string> = {
  SCRUM_MASTER: "Scrum Master",
  AGILE_COACH: "Agile Coach",
  PROJECT_MANAGER: "Project Manager",
  BACKEND_LEADER: "Back End Leader",
  BACKEND_DEVELOPER: "Back End Developer",
  FRONTEND_DEVELOPER: "Front End Developer",
  FRONTEND_LEADER: "Front End Leader",
  DESIGNER_LEADER: "Designer Leader",
  DESIGNER: "Designer",
  QA_LEADER: "QA Leader",
  QA_DEVELOPER: "QA Developer",
  PRODUCT_OWNER: "Product Owner",
};

type Props = {
  name: string;
  surname: string;
  occupation: string; // Use enum type here
  img: any;
};

const TeamInfoCard: FC<Props> = ({
  name,
  surname,
  occupation,
  // jobDescription,
  img,
}) => {
  return (
    <>
      <div className="absolute flex flex-col gap-3 justify-end bottom-1 lg:bottom-5 lg:left-1 lg:right-1 teamListItem w-[220px] lg:w-[280px] mx-auto mt-auto h-[233px] bg-white rounded-[10px] rounded-tl-[100px] rounded-tr-[100px] shadow-lg">
        <div className="p-7 mt-auto">
          <h5 className="text-[#000000DE] font-bold leading-3 md:leading-base text-sm md:text-base">
            {name} {surname}
          </h5>
          <span className="text-[#566FAF] font-bold leading-3 md:leading-base text-sm md:text-base">
            {Occupation[occupation] || occupation}
          </span>
        </div>
      </div>
      <img
        src={img}
        className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] mx-auto rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[5px] object-cover absolute top-2 translate-x-[-50%] left-1/2"
        alt={name}
      />
    </>
  );
};

export default TeamInfoCard;
