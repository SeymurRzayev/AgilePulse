import { useState, type FC } from "react";
import MainButton from "../../components/Butttons/MainButton";
import { FaRegClock } from "react-icons/fa6";
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
    <div>
      <div className="w-[94%] top-[58%] right-[-44%] md:w-[60%] lg:w-[60%] h-[450px] absolute md:top-[62%] lg:top-[62%] md:left-[36%] lg:left-[36%] -translate-x-[50%] -translate-y-[50%] flex flex-col ">
        <div className="relative z-0 flex flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[50px] shadow-2xl">
          <div className="p-[2%] md:p-0 lg:p-0 absolute top-[4%] md:top-[12%] lg:top-[12%] left-[5%] z-10 flex flex-col gap-[4%] w-[555px] h-[331px]">
            <h3 className="text-[18px] text-[#00000099] font-[Corbel] font-[700]">
              Sual {quizNum}
            </h3>
            <h1 className="text-[20px] md:text-[24px] lg:text-[30px] w-[50%] md:w-[100%] lg:w-[100%]  text-[#1F356E] font-[Corbel] font-[700]">
              {questionItem}
            </h1>
            <div className="flex flex-col gap-4">
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
      <div className="absolute w-[100%] md:w-[60%]  top-[98%] md:top-[105%] lg:top-[105%] left-[6%] lg:w-[60%] flex justify-between md:gap-4 lg:gap-4">
        <div className=" md:gap-2 lg:gap-2 items-center hidden md:flex lg:flex  bg-amber-300 py-1 px-3 ">
          <FaRegClock className="text-[32px] text-[#00000099] " />
          <p className="text-[18px] md:text-[24px] lg:text-[24px]  text-[#00000099] mb-[3%] ">
            {remainingTime} dəqiqə
          </p>
        </div>

        <div className="flex gap-4 items-center justify-end bg-yellow-200   w-[90%] md:w-[60%] lg:w-[60%]">
          <button
            onClick={handleReturnButton}
            className=" w-[50%] h-[8vh] md:w-[24%]  lg:w-[24%]  text-[16px] border-[2px] border-indigo-500 rounded-full cursor-pointer"
          >
            Geriyə qayıt
          </button>

          <MainButton
            text="Davam et"
            onClick={handleNextQuestion}
            className=" w-[50%] h-[8vh] md:w-[24%]  lg:w-[24%]   text-[16px] leading-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
