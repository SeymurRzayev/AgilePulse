import type { FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
import managerImg from "../../assets/images/trainer1.jpg";
import { HiArrowDown } from "react-icons/hi2";
import Lines from "./Lines";
import RoleGroup from "./RoleGroup";

const Team: FC = () => {
  return (
    <div className="flex flex-col gap-[50px] relative">
      <Lines />
      <h1 className="text-4xl text-[58px] bg-gradient-to-r from-[#E7912B] via-[#D83D69] to-[#2C4B9B] bg-clip-text text-transparent text-center font-bold">
        Bizim komandanı tanı
      </h1>
      <div className="cntList ">
        <div className="mngrCnt w-full">
          <div className="managerCntContent mx-auto mt-[8%]">
            <h2 className="text-[46px] font-bold text-center ">
              Layihə meneceri
            </h2>
            {/* cardItem*/}
            <div className="relative bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)]  teamList mx-auto rounded-tl-[50px] rounded-tr-[50px] w-[330px] h-[375px]  mt-[32px]">
              <TeamInfoCard
                name={"Səadət Hüseynova"}
                occupation="Agile Coach"
                jobDescription={
                  "Startap və korporativ layihələrdə liderlik təcrübəsi."
                }
                img={managerImg}
              />
            </div>
          </div>
        </div>
        {/* {first big container} */}
        <div className="teamCenterCnt  flex  gap-[7.4%]  justify-center   mb-[14%]  ">
          {/* left  */}
          <RoleGroup
            className={
              "text-[34px] text-center font-bold w-[54%] mx-auto mb-[10%]"
            }
            occupation={"Frontend developerlər"}
          />

          {/* middle */}
          <div className="flex flex-col items-center justify-center mb-[4.8%]">
            <h2 className="text-[34px] font-bold   text-center mb-[6%] ">
              Dizayner
            </h2>
            <div className="relative bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)]  teamList mx-auto rounded-tl-[50px] rounded-tr-[50px] w-[330px] h-[375px]  ">
              <TeamInfoCard
                name={"Tofiq Bahramov"}
                occupation="Scrum Master və Agile Coach"
                jobDescription={"8+ il real komanda təcrübəsi."}
                img={managerImg}
              />
            </div>
          </div>
          {/* right */}
          <RoleGroup
            className={
              "text-[34px] text-center font-bold w-[54%] mx-auto mb-[10%]"
            }
            occupation={"Backend developerlər"}
          />
        </div>
        {/* {second big container} */}
        <div className="teamCenterCnt  flex  gap-[7.4%]  justify-center    mb-[6%] pt-[10%]   ">
          <div className="mt-[-3%]">
            <RoleGroup
              className={
                "text-[34px] text-center font-bold w-[54%] mx-auto mb-[10%]"
              }
              occupation={"Agile Team"}
            />
          </div>

          <div className="mt-[-15%]">
            <RoleGroup
              className={
                "text-[34px] text-center font-bold w-[54%] mx-auto mb-[10%]"
              }
              occupation={"QA Testerlər"}
            />
          </div>
          <div className="mt-[-3%]">
            <RoleGroup
              className={
                "text-[34px] text-center font-bold w-full mx-auto mb-[10%]"
              }
              occupation={"System Support"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
