import { type FC } from "react";

type Props = {
  buttonCounts: number[];
};
const QuizSider: FC<Props> = ({ buttonCounts }) => {
  return (
    <div className="w-[22%] h-[94vh] absolute top-[67%] right-[-3%] -translate-x-[50%] -translate-y-[50%] hidden  lg:flex flex-col">
      <div className="relative z-0 flex flex-col justify-center items-center gap-[3%] w-full h-full bg-[#BEC7E0BF] backdrop-blur-lg rounded-[30px] shadow-2xl ">
        {buttonCounts.map((buttonCount, index) => (
          <button className="w-[78%] h-[42px] rounded-[15px] bg-[#28448D] text-[#FFFFFF] text-[18px] font-[700]" key={index}>Sual {buttonCount}</button>
        ))}
      </div>
    </div>
  );
};

export default QuizSider;
