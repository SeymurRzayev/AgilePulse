import type { FC } from "react";
import TeamInfoCard from "./TeamInfoCard";
import managerImg from "../../assets/images/trainer1.jpg";
import Lines from "./Lines";
import RoleGroup from "./RoleGroup";
import { useGetAllTeamQuery } from "../../services/features/about/teamApi";
import type { Person } from "../../types/types";

const Team: FC = () => {
  // const people = [
  //   {
  //     name: "Səadət Hüseynova",
  //     occupation: "Agile Coach",
  //     jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
  //     img: managerImg,
  //   },
  //   {
  //     name: "Məmmədov Murad",
  //     occupation: "Agile Coach",
  //     jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
  //     img: managerImg,
  //   },
  //   {
  //     name: "Məmmədov Murad",
  //     occupation: "Agile Coach",
  //     jobDescription: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
  //     img: managerImg,
  //   },
  // ];

  const { data } = useGetAllTeamQuery();

  console.log(data);

  const response = data?.data.data;

  console.log(response);

  const positions = Array.from(new Set(response?.map((item) => item.position)));

  console.log(positions);

  function filterByPosition(
    team: Person[] | undefined,
    positionQuery: string | undefined
  ): Person[] {
    if (!team || !Array.isArray(team)) return [];
    if (!positionQuery) return team;
    const query = positionQuery.toLowerCase();
    return team.filter((member) =>
      member.position.toLowerCase().includes(query)
    );
  }

  // console.log(manager);

  // console.log(positions);

  // const people1: Person[] =
  //   response?.map((item) => ({
  //     name: item.name,
  //     surname: item.surname,
  //     position: item.position,
  //     description: item.description,
  //     imgUrl: item.imageUrl, // map it correctly
  //   })) || [];


  console.log(filterByPosition(response, "Backend Developer"));
  

  return (
    <div className="flex flex-col gap-[50px] relative">
      <Lines />

      <h1 className="text-[34px] md:max-xl:text-5xl lg:text-5xl  bg-gradient-to-r from-[#E7912B] via-[#D83D69] to-[#2C4B9B] bg-clip-text text-transparent text-center font-bold">
        Bizim komandanı tanı
      </h1>
      <div className="cntList ">
        <div className="mngrCnt w-full">
          <div className="managerCntContent mx-auto mt-[12%]">
            <h2 className="text-[26px] md:max-xl:text-[30px] lg:text-[38px] font-bold text-center  ">
              Layihə meneceri
            </h2>
            {/* cardItem*/}
            <div
              className="relative bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)]  teamList mx-auto 
              rounded-t-[50px] flex justify-center    w-[230px] h-[300px]  
               lg:w-[300px] lg:h-[375px]
                 mt-[32px]"
            >
              <TeamInfoCard
                name={filterByPosition(response, "Scrum Master")[0]?.name}
                surname={filterByPosition(response, "Scrum Master")[0]?.surname}
                occupation={
                  filterByPosition(response, "Scrum Master")[0]?.position
                }
                jobDescription={
                  filterByPosition(response, "Scrum Master")[0]?.description
                }
                img={filterByPosition(response, "Scrum Master")[0]?.imageUrl}
              />
            </div>
          </div>
        </div>
        {/* {first big container} */}
        <div className="teamCenterCnt  flex   flex-col md:max-xl:flex-row lg:flex-row gap-[1%]  md:max-xl:gap-[3%]  lg:gap-[7.8%]  justify-center    mb-[14%]  ">
          {/* left  */}
          <RoleGroup
            className={
              "text-[26px] md:max-xl:text-[30px] lg:text-[38px] w-[54%] font-bold text-center my-[6%]"
            }
            people={filterByPosition(response, "Frontend Developer")}
            occupation={"Frontend developerlər"}
          />

          {/* middle */}
          <div className="flex flex-col items-center justify-center mb-[4.8%]">
            <h2 className="text-[26px] md:max-xl:text-[30px] lg:text-[38px] font-bold text-center mt-[2%] ">
              Dizayner
            </h2>
            <div
              className="relative bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] flex justify-center  teamList mx-auto 
              rounded-t-[50px]    w-[230px] h-[300px]  
               lg:w-[300px] lg:h-[375px] mt-[32px]"
            >
              <TeamInfoCard
                name={"Səadət"}
                surname={"Hüseynova"}
                occupation="Agile Coach"
                jobDescription={
                  "Startap və korporativ layihələrdə liderlik təcrübəsi."
                }
                img={managerImg}
              />
            </div>
          </div>
          {/* right */}
          <RoleGroup
            className={
              "text-[26px] md:max-xl:text-[30px] lg:text-[38px] text-center font-bold w-[54%] mx-auto mb-[10%]"
            }
            people={filterByPosition(response, "Backend Developer")}
            occupation={"Backend developerlər"}
          />
        </div>
        {/* {second big container} */}
        <div className="teamCenterCnt  flex flex-col md:max-xl:flex-row lg:flex-row  gap-[1%]  md:max-xl:gap-[3%]  lg:gap-[7.8%]  justify-center     mb-[6%] md:max-xl:pt-[10%] lg:pt-[10%]  ">
          <div className=" ">
            <RoleGroup
              className={
                "text-[26px] md:max-xl:text-[30px] lg:text-[38px] text-center font-bold w-full mx-auto mt-[-13%] md:max-xl:mt-[0] lg:mt-[0] mb-[10%] "
              }
              people={filterByPosition(response, "Agile Team")}
              occupation={"Agile Team"}
            />
          </div>

          <div className="md:max-xl:mt-[-15%] lg:mt-[-15%]">
            <RoleGroup
              className={
                "text-[26px] md:max-xl:text-[30px] lg:text-[38px] text-center font-bold  mx-auto mb-[10%]"
              }
              people={filterByPosition(response, "QA Tester")}
              occupation={"QA Testerlər"}
            />
          </div>
          <div className="">
            <RoleGroup
              className={
                "text-[26px] md:max-xl:text-[30px] lg:text-[38px] text-center font-bold w-full mx-auto mb-[10%]"
              }
              people={filterByPosition(response, "System Support")}
              occupation={"System Support"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
