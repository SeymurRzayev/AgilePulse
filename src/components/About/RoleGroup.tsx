"use client";
import { useState, type FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
// import managerImg from "../../assets/images/trainer1.jpg";
import { HiArrowDown } from "react-icons/hi2";
import type { Person } from "../../types/types";


type Props = {
  occupation: string;
  className: string;
  people: Person[];
};
const RoleGroup: FC<Props> = ({ occupation, className, people }) => {
  const [index, setIndex] = useState(0);
  const person = people[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };
  return (
    <div className="flex flex-col  items-center  ">
      <h2 className={className}>{occupation}</h2>
      <div className="bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex flex-col  items-center justify-center   rounded-t-[50px] ">
        <div
          className="relative   teamList mx-auto flex justify-center
              rounded-t-[50px]   w-[230px] h-[300px]
               lg:w-[300px] lg:h-[375px]  "
        >
          <TeamInfoCard
            name={person?.name || person?.surname}
            occupation={person?.position}
            jobDescription={person?.description}
            img={person?.imgUrl}
          />
        </div>
        <div
          className="relative  teamList mx-auto 
              rounded-t-[50px]   w-[230px] h-[300px]
               lg:w-[300px] lg:h-[375px]  mt-[32px]"
        >
          <TeamInfoCard
            name={person?.name || person?.surname}
            occupation={person?.position}
            jobDescription={person?.description}
            img={person?.imgUrl}
          />
        </div>
        <button
          onClick={handleNext}
          className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px] hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <HiArrowDown />
        </button>
      </div>
    </div>
  );
};

export default RoleGroup;
