import { type FC } from "react";

type Props = {};
const QuizSider: FC<Props> = () => {
  return (
    <div className="w-[20%] h-[450px] absolute top-[70%] right-[5%] -translate-x-[50%] -translate-y-[50%] flex flex-col">
      <div className="relative z-0 flex flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px]"></div>
    </div>
  );
};

export default QuizSider;
