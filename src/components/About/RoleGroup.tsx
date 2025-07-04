"use client";
import { useState, type FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
import { HiArrowDown } from "react-icons/hi2";
import type { Person } from "../../types/types";
import managerImg from "../../assets/images/trainer1.jpg";

type Props = {
  occupation: string;
  className: string;
  people: Person[];
};

const testPeople: Person[] = [
  {
    name: "Səadət",
    surname: " Hüseynova",
    position: "Agile Coach",
    description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    imageUrl: managerImg,
  },
  {
    name: "Məmmədov",
    surname: " Murad",
    position: "Agile Coach",
    description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
    imageUrl: managerImg,
  },
];

const RoleGroup: FC<Props> = ({ occupation, className, people }) => {
  // Handle case when there are no people
  // if (people.length === 0) return null;

  // Track starting index for the pair
  const [startIndex, setStartIndex] = useState(0);

  // Calculate the two people to show
  const firstPerson = people[startIndex];
  const secondPerson = people[startIndex + 1];

  // Only show second card if there are multiple people
  const showSecondCard = people.length > 1;

  // Handle next button click - cycle through pairs
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  // Only show next button if there are 3 or more people
  const showNextButton = true;

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
            name={firstPerson?.name || testPeople[0].name}
            surname={firstPerson?.surname || testPeople[0].surname}
            occupation={firstPerson?.position || testPeople[0].position}
            jobDescription={
              firstPerson?.description || testPeople[0].description
            }
            img={firstPerson?.imageUrl || testPeople[0].imageUrl}
          />
        </div>

        <div
          className="relative  teamList mx-auto 
              rounded-t-[50px]   w-[230px] h-[300px]
               lg:w-[300px] lg:h-[375px]  mt-[32px]"
        >
          {showSecondCard && secondPerson && (
            <TeamInfoCard
              name={secondPerson?.name || testPeople[1].name}
              surname={secondPerson?.surname || testPeople[1].surname}
              occupation={secondPerson?.position || testPeople[1].position}
              jobDescription={
                secondPerson?.description || testPeople[1].description
              }
              img={secondPerson?.imageUrl || testPeople[1].imageUrl}
            />
          )}
        </div>

        {showNextButton && (
          <button
            onClick={handleNext}
            className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px] hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <HiArrowDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default RoleGroup;
