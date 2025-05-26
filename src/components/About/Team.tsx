import type { FC } from "react";
import managerImg from "../../assets/images/trainer1.jpg";

const Team: FC = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <h1 className="text-4xl text-[58px] bg-gradient-to-r from-[#E7912B] via-[#D83D69] to-[#2C4B9B] bg-clip-text text-transparent text-center font-bold">
        Bizim komandanı tanı
      </h1>
      <div className="cntList">
        <div className="mngrCnt w-full">
          <div className="managerCntContent mx-auto mt-32">
            <h2 className="text-2xl font-bold text-center">Manager</h2>
            <div className="relative bg-gradient-to-t to-[rgba(153,153,153,0.2)] from-[rgba(255,255,255,0.2)] teamList mx-auto rounded-tl-[50px] rounded-tr-[50px] w-[330px] h-[375px]  mt-[32px]">
              <div className="absolute flex flex-col gap-3 justify-end bottom-2 left-1 right-1 teamListItem w-[323px] mx-auto mt-auto h-[233px] bg-white rounded-[10px] rounded-tl-[100px] rounded-tr-[100px] shadow-lg">
                <div className="p-7 mt-auto">
                  <h5 className="text-[#000000DE] font-bold leading-[16px] text-[16px]">Tofiq Isayev</h5>
                  <span className="text-[#566FAF] font-bold leading-[16px] text-[12px]">Manager</span>
                  <p className="text-base text-[#00000099] font-bold">Startap və korporativ layihələrdə liderlik təcrübəsi.</p>
                </div>
              </div>
              <img
                src={managerImg}
                className="w-[200px] h-[200px] mx-auto rounded-full object-cover absolute top-2 rounded-bl-[10px] translate-x-[-50%] left-1/2"
                alt="manager"
              />
            </div>
          </div>
        </div>

        <div className="teamCenterCnt">

            
        </div>
        <div className="teamBottomCnt"></div>
      </div>
    </div>
  );
};

export default Team;
