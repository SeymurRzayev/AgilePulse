import type { FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
import managerImg from "../../assets/images/trainer1.jpg";
import { HiArrowDown } from "react-icons/hi2";

type Props = {
  occupation: string;
  className: any;
};
const RoleGroup: FC<Props> = ({ occupation, className }) => {
  return (
    <div className="flex flex-col ">
      <h2 className={className}>{occupation}</h2>
      <div className="bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex flex-col rounded-t-[50px] p-[8px]">
        <div className="relative  teamList mx-auto rounded-tl-[50px] rounded-tr-[50px] w-[330px] h-[375px] mb-[20%] ">
          <TeamInfoCard
            name={"Səadət Hüseynova"}
            occupation="Agile Coach"
            jobDescription={
              "Startap və korporativ layihələrdə liderlik təcrübəsi."
            }
            img={managerImg}
          />
        </div>
        <div className="relative bg-[rgba(255, 255, 255, 1)]  teamList mx-auto rounded-tl-[50px] rounded-tr-[50px] w-[330px] h-[375px]  ">
          <TeamInfoCard
            name={"Səadət Hüseynova"}
            occupation="Agile Coach"
            jobDescription={
              "Startap və korporativ layihələrdə liderlik təcrübəsi."
            }
            img={managerImg}
          />
        </div>
        <button className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <HiArrowDown />
        </button>
      </div>
    </div>
  );
};

export default RoleGroup;
