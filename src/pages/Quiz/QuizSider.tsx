import { type FC } from "react";

type Props = {
  buttonCounts: number[];
};
const QuizSider: FC<Props> = ({ buttonCounts }) => {
  return (
    <div className="w-full max-w-[316px] absolute top-0 right-0">
      <div className="flex flex-col  py-[38px] items-center gap-[13px] w-full h-full bg-[#BEC7E0BF] backdrop-blur-lg rounded-[30px] shadow-2xl ">
        {buttonCounts.map((buttonCount, index) => (
          <button className="w-[78%] font-[Corbel] rounded-[15px] text-left pl-[29px] bg-[#28448D] text-[#FFFFFF] text-lg h-[42px] cursor-pointer" key={index}>Sual {buttonCount}</button>
        ))}
      </div>
    </div>
  );
};

export default QuizSider;
