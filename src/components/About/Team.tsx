import type { FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
import managerImg from "../../assets/images/trainer1.jpg";
import { HiArrowDown } from "react-icons/hi2";
const Team: FC = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <h1 className="text-4xl text-[58px] bg-gradient-to-r from-[#E7912B] via-[#D83D69] to-[#2C4B9B] bg-clip-text text-transparent text-center font-bold">
        Bizim komandanı tanı
      </h1>
      <div className="cntList">
        <div className="mngrCnt w-full">
          <div className="managerCntContent mx-auto mt-32">
            <h2 className="text-[46px] font-bold text-center ">Manager</h2>
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
        <div className="teamCenterCnt  flex  gap-[12%]  justify-center mt-[6%] mb-[14%]  ">
          {/* left  */}
          <div className="flex flex-col ">
            <h2 className="text-[34px] font-bold w-[54%] mx-auto mb-[10%]   ">
              Frontend developerlər
            </h2>
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
              <span className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px]  ">
                <HiArrowDown />
              </span>
            </div>
          </div>

          {/* middle */}
          <div className="flex flex-col items-center justify-center">
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
          <div className="flex flex-col  ">
            <h2 className="text-[34px] font-bold  w-[54%] mx-auto  mb-[10%]  ">
              Backend developerlər
            </h2>

            <div className="bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex flex-col rounded-t-[50px] p-[8px] ">
              <div className="relative  teamList mx-auto rounded-tl-[50px] shadow-[4px 4px 15px 2px rgba(0, 0, 0, 0.1)]  rounded-tr-[50px] w-[330px] h-[375px] mb-[20%]  ">
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
              <span className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px]  ">
                <HiArrowDown />
              </span>
            </div>
          </div>
        </div>
        {/* {second big container} */}
        <div className="teamCenterCnt  flex  gap-[12%]  justify-center   mt-[6%] pt-[10%]   ">
          {/* left  */}
          <div className="flex flex-col ">
            <h2 className="text-[34px] font-bold w-[54%] mx-auto mb-[10%]   ">
              Frontend developerlər
            </h2>
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
              <span className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px]  ">
                <HiArrowDown />
              </span>
            </div>
          </div>

          {/* middle */}
          <div className="flex flex-col justify-end   h-[124vh]   ">
            <h2 className="text-[34px] font-bold   text-center mb-[10%] ">
              Dizayner
            </h2>
            <div className=" bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex flex-col rounded-t-[50px] p-[8px] ">
              <div className="relative  teamList mx-auto rounded-tl-[50px] shadow-[4px 4px 15px 2px rgba(0, 0, 0, 0.1)]  rounded-tr-[50px] w-[330px] h-[375px] mb-[20%]  ">
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
              <span className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px]  ">
                <HiArrowDown />
              </span>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col  ">
            <h2 className="text-[34px] font-bold  w-[54%] mx-auto  mb-[10%]  ">
              Backend developerlər
            </h2>

            <div className="bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex flex-col rounded-t-[50px] p-[8px] ">
              <div className="relative  teamList mx-auto rounded-tl-[50px] shadow-[4px 4px 15px 2px rgba(0, 0, 0, 0.1)]  rounded-tr-[50px] w-[330px] h-[375px] mb-[20%]  ">
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
              <span className="w-[60px] h-[60px] flex justify-center items-center text-[#122041] text-[22px] rounded-full bg-[#DEDEDE] mx-auto mt-[28px]  ">
                <HiArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
