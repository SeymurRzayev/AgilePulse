import { useEffect, useState, type FC } from "react";
import MainButton from "../../components/Butttons/MainButton";
import { FaRegClock } from "react-icons/fa6";
import OutlineBtn from "../../components/Butttons/OutlineBtn";
import type { Answers, Question } from "../../types/types";
type Props = {
  quizNum: number;
  questionItem: Question;
  answers: Answers[];
  timeLimit: number;
  totalQuestions: number;
  clickedBack: () => void;
  clickForward: any;
  onFinishQuiz: (timeout?: boolean) => void;
  onAnswerSelect: (answerId: number) => void;
  selectedAnswerId: number;
};

const QuizCards: FC<Props> = ({
  quizNum,
  questionItem,
  answers,
  timeLimit, //geri sayim ucun verilen vaxt
  totalQuestions,
  clickedBack,
  clickForward,
  onFinishQuiz,
  onAnswerSelect,
  selectedAnswerId
}) => {
  const [countdown, setCountdown] = useState(timeLimit * 60);
  const handleReturnButton = () => {
    clickedBack();
  };

  const isLastQuestion = quizNum === totalQuestions;

  const handleNextQuestion = () => {
    isLastQuestion ? onFinishQuiz() : clickForward();
  };

  // Geri sayim
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinishQuiz(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full md:min-w-[480px]  xl:min-w-[700px]  md:max-w-[550px] lg:max-w-[760px] xl:max-w-[823px] flex flex-col   justify-center items-start owerflow-hidden md:mr-30 lg:mr-40 xl:mr-63">
        <div className=" flex justify-start lg:min-h-[411px] flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px] shadow-2xl">
          <div className="flex flex-col  gap-1.5 md:gap-3 w-full mt-6 ml-10 overflow-hidden">
            <h3 className="text-lg text-[#00000099] font-[Corbel] font-bold">
              Sual {quizNum}
            </h3>
            <h1 className="text-[20px] leading-5 md:leading-6 lg:leading-8 xl:text-2xl  lg:text-[30px] w-[75%] md:w-[100%] lg:w-[100%]  text-[#1F356E] font-[Corbel] font-bold">
              {questionItem.content}
            </h1>
            <div className="flex flex-col gap-1 overflow-hidden py-3">
              {answers.map((answer, index) => (
                <div key={index} className="flex gap-2 items-center py-2">
                  <input
                    id={`answer-${answer.id}`}
                    type="radio"
                    checked={selectedAnswerId === answer.id}
                    onChange={() => onAnswerSelect(answer.id)}
                    className="w-[10px] h-[10px] cursor-pointer md:max-xl:w-[24px] md:max-xl:h-[24px] rounded-full appearance-none border border-[#757575] checked:bg-[#1F356E]"
                  />
                  <label
                    htmlFor={`answer-${answer.id}`}
                    className="text-sm cursor-pointer leading-4 md:leading-5 md:text-[16px] lg:text-lg  text-[#00000099] font-bold w-[75%] lg:w-[100%] "
                  >
                    {answer.content}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timer and Buttons */}
      {/* Container */}
      <div className="w-full max-w-[480px] xl:min-w-[700px]  md:max-w-[550px] lg:max-w-[760px] xl:max-w-[823px] mt-7 flex justify-between  md:gap-4 lg:gap-4 md:mr-30 lg:mr-40 xl:mr-63">
        {/* Time */}
        <div className="gap-2  items-center flex  py-1 px-3 ">
          <FaRegClock className="text-lg md:text-3xl text-[#00000099] " />
          <p className="text-sm  xl:text-2xl  text-[#00000099] mb-[3%] ">
            {minutes}:{seconds.toString().padStart(2, '0')} dəqiqə
          </p>
        </div>
        {/* Buttons */}
        <div className="w-[60%] md:w-[40%] xl:w-[35%] h-10 md:h-12 flex justify-between items-center gap-2 md:gap-4 ">
          <OutlineBtn
            onClick={handleReturnButton}
            size={144}
            text="Geriyə qayıt"
            buttonClassName="text-sm md:text-[16px]"
          />
          <MainButton
            text={isLastQuestion ? "Quizi bitir" : "Davam et"}
            className="w-[144px] h-10  md:h-12 "
            onClick={handleNextQuestion}
            buttonClassName="text-sm md:text-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
