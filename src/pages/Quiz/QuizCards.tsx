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
  };
  const handleNextQuestion = () => {
    clickForward();
  };
  return (
    <div>
      <div className="w-[60%] h-[450px] absolute top-[70%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col">
        <div className="relative z-0 flex flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px]">
          <div className="p-[2%] absolute top-[8%] left-[5%] z-10 flex flex-col gap-[4%] w-[555px] h-[331px]">
            <h3 className="text-[18px] text-[#00000099] font-[Corbel] font-[700]">
              Sual {quizNum}
            </h3>
            <h1 className="text-[30px] text-[#1F356E] font-[Corbel] font-[700]">
              {questionItem}
            </h1>
            <div className="flex flex-col gap-4">
              {answers.map((answer, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === index}
                    onChange={() => setSelectedCheckbox(index)}
                    className="w-[24px] h-[24px] rounded-full appearance-none border border-[#757575] checked:bg-[#1F356E]"
                  />
                  <p className="text-[18px] text-[#00000099] font-[700]">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timer and Buttons */}
      <div className="absolute w-[60%] top-[106%] left-[20%] flex justify-between  gap-4">
        <div className="flex gap-2 items-center py-1 px-3 ">
          <FaRegClock className="text-[32px] text-[#00000099] " />
          <p className="text-[24px] text-[#00000099] mb-[3%] ">
            {remainingTime} dəqiqə
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={handleReturnButton}
            className="w-[144px] h-[56px] p-[2%] text-[16px] border-[2px] border-indigo-500 rounded-full cursor-pointer"
          >
            Geriyə qayıt
          </button>

          <MainButton
            text="Davam et"
            onClick={handleNextQuestion}
            className="w-[160px] h-[70px] p-[2%] text-[16px] leading-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
