import MainButton from "../../components/Butttons/MainButton";
import ProgressBar from "./ProgressBar";
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
    <div className="w-[60%] h-[450px] absolute top-[70%] left-[40%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center gap-4">
      <div>
        <h1>Başlanılmayıb</h1>
        <ProgressBar />
      </div>
      <div className="relative z-0 flex flex-col items-center justify-center w-full h-full gap-4  bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px] ">
        <div className="w-[941px] absolute z-10 flex flex-col justify-center items-center gap-11">
          <p className="text-wrap text-center text-3xl font-[corbel] leading-9 tracking-normal font-bold">
            Agile dünyasına hazırsan? Bu qısa quiz çevik düşünmə və komandada
            əməkdaşlıq prinsipləri ilə bağlı biliklərini yoxlayacaq. Hər cavab
            bir addım daha çevik düşüncəyə yaxınlaşmaqdır! Uğurlar! 🚀
          </p>
          <ul className="flex justify-between gap-2.5">
            <li className="w-[154px] h-[64px] font-bold tracking-normal leading-11 text-4xl text-[#2C4B9B] font-[corbel] border-">
              Sual: {totalQuestions}
            </li>
            <li className="w-[154px] h-[64px] font-bold tracking-normal leading-11 text-4xl text-[#2C4B9B] font-[corbel]">
              Keçid: {PassingScore}
            </li>
            <li className="w-[154px] h-[64px] font-bold tracking-normal leading-11 text-4xl text-[#2C4B9B] font-[corbel]">
              Vaxt: {timeLimit} dəqiqə
            </li>
          </ul>

          <MainButton
            text={"Quizə başla"}
            className="w-[234px] h-[56px]"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
