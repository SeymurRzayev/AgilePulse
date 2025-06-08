import { useState, type FC } from "react";
import MainButton from "../../components/Butttons/MainButton";
import { FaRegClock } from "react-icons/fa6";
import OutlineBtn from "../../components/Butttons/OutlineBtn";
type Props = {
  quizNum: number;
  questionItem: string;
  answers: string[];
  remainingTime: number;
  clickedBack: any;
  clickForward: any;
};

const QuizCards: FC<Props> = ({
  quizNum,
  questionItem,
  answers,
  remainingTime,
  clickedBack,
  clickForward,
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(-1);
  const handleReturnButton = () => {
    clickedBack();
    setSelectedCheckbox(-1);
  };
  const handleNextQuestion = () => {
    clickForward();
    setSelectedCheckbox(-1);
  };
  return (
    <div className="w-full max-w-[823px] h-[3223px]">
      <div className="w-full lg:min-w-[790px] max-w-[823px] flex flex-col owerflow-hidden">
        <div className=" flex lg:min-h-[411px] flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px] shadow-2xl">
          <div className="flex flex-col w-full mt-10 ml-10 overflow-hidden">
            <h3 className="text-[18px] text-[#00000099] font-[Corbel] font-[700]">
              Sual {quizNum}
            </h3>
            <h1 className="text-[20px] md:text-[24px] lg:text-[30px] w-[50%] md:w-[100%] lg:w-[100%]  text-[#1F356E] font-[Corbel] font-[700]">
              {questionItem}
            </h1>
            <div className="flex flex-col gap-4 overflow-hidden">
              {answers.map((answer, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === index}
                    onChange={() => setSelectedCheckbox(index)}
                    className="w-[10px] h-[10px] md:max-xl:w-[24px] md:max-xl:h-[24px] rounded-full appearance-none border border-[#757575] checked:bg-[#1F356E]"
                  />
                  <p className="text-[14px]  md:text-[16px] lg:text-[18px]  text-[#00000099] font-[700] w-[50%] lg:w-[100%]  ">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timer and Buttons */}
      {/* Container */}
      <div className=" w-[100%] mt-7 flex justify-between  md:gap-4 lg:gap-4">
        {/* Time */}
        <div className=" md:gap-2 lg:gap-2 items-center hidden md:flex lg:flex  py-1 px-3 ">
          <FaRegClock className="text-[32px] text-[#00000099] " />
          <p className="text-[18px] md:text-[24px] lg:text-[24px]  text-[#00000099] mb-[3%] ">
            {remainingTime} dəqiqə
          </p>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 ">
          <OutlineBtn
            onClick={handleReturnButton}
            size={144}
            text="Geriyə qayıt"
          />
          <MainButton
            text="Davam et"
            className="w-[144px] h-[56px]"
            onClick={handleNextQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
