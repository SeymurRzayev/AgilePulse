import MainButton from "../../components/Butttons/MainButton";

import { useState } from "react";
interface StartQuizProps {
  totalQuestions: number;
  PassingScore: number;
  timeLimit: number;
  onclicked: any;
}

export default function StartQuiz({
  totalQuestions,
  PassingScore,
  timeLimit,
  onclicked,
}: StartQuizProps) {
  const [clicked, setClicked] = useState(false);
  const handleNext = () => {
    setClicked(clicked);
    onclicked();
  };

  return (
    <div className="w-full max-w-[1093px] h-auto min-h-[550px] mx-auto flex flex-col items-start justify-center gap-4 px-2 sm:px-4">
      <div className="relative z-0 flex flex-col items-center justify-center w-full h-full gap-4 bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px] mb-5 p-3 sm:p-6 lg:p-8">
        <div className="w-full max-w-[941px] relative z-10 flex flex-col justify-center items-center gap-4 sm:gap-11">
          <p className="text-wrap text-center text-lg sm:text-2xl lg:text-3xl font-[corbel] leading-7 sm:leading-9 tracking-normal font-bold">
            Agile dünyasına hazırsan? Bu qısa quiz çevik düşünmə və komandada
            əməkdaşlıq prinsipləri ilə bağlı biliklərini yoxlayacaq. Hər cavab
            bir addım daha çevik düşüncəyə yaxınlaşmaqdır! Uğurlar! 🚀
          </p>

          <ul className="flex  sm:flex-row justify-between items-center gap-2 sm:gap-2.5  w-[78%]">
            <li className="w-full sm:w-[154px] h-[34px] sm:h-[64px] font-bold tracking-normal leading-3 md:leading-11 text-[14px] sm:text-3xl lg:text-4xl text-[#2C4B9B] font-[corbel] border-r border-solid border-[#BEC7E0] flex items-center justify-center">
              Sual: {totalQuestions}
            </li>
            <li className="w-full sm:w-[200px] h-[34px] sm:h-[64px] font-bold tracking-normal leading-3 md:leading-11 text-[14px] sm:text-3xl lg:text-4xl text-[#2C4B9B] font-[corbel] border-r border-solid border-[#BEC7E0] flex items-center justify-center">
              Keçid: +{PassingScore}%
            </li>
            <li className="w-full sm:w-[265px] h-[34px] sm:h-[64px] font-bold tracking-normal leading-3 md:leading-11 text-[14px] sm:text-3xl lg:text-4xl text-[#2C4B9B] font-[corbel] flex items-center justify-center">
              Vaxt: {timeLimit} dəqiqə
            </li>
          </ul>

          <MainButton
            text={"Quizə başla"}
            className="w-full sm:w-[234px] h-[56px] mt-2"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
