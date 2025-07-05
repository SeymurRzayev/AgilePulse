import { useEffect,useState, type FC } from "react";
import MainButton from "../../components/Butttons/MainButton";
import { FaRegClock } from "react-icons/fa6";
import OutlineBtn from "../../components/Butttons/OutlineBtn";
type Props = {
  quizNum: number;
  questionItem: string;
  answers: string[];
  remainingTime: number;
  totalQuestions: number;
  clickedBack: any;
  clickForward: any;
  onFinishQuiz: () => void;
    totalQuestionCount:number
};

const QuizCards: FC<Props> = ({
  quizNum,
  questionItem,
  answers,
  remainingTime,
  totalQuestions,
  clickedBack,
  clickForward,
 onFinishQuiz,
}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(-1);
  const handleReturnButton = () => {
    clickedBack();
    setSelectedCheckbox(-1);
  };

  const isLastQuestion = quizNum === totalQuestions;

  const handleNextQuestion = () => {
    clickForward();
    setSelectedCheckbox(-1);
  };
  useEffect(() => {
  if (remainingTime ===0) {
     onFinishQuiz(); 
  }
}, [remainingTime, onFinishQuiz]);
  return (
    <div className="w-full max-w-[823px]">
      <div className="w-full lg:min-w-[690px] max-w-[823px] flex flex-col   justify-center items-center owerflow-hidden">
        <div className=" flex lg:min-h-[411px] flex-col w-full h-full bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px] shadow-2xl">
          <div className="flex flex-col gap-1.5 md:gap-3 w-full mt-6 ml-10 overflow-hidden">
            <h3 className="text-lg text-[#00000099] font-[Corbel] font-bold">
              Sual {quizNum}
            </h3>
            <h1 className="text-[20px] leading-5 md:leading-6 lg:leading-8 md:text-2xl  lg:text-[30px] w-[75%] md:w-[100%] lg:w-[100%]  text-[#1F356E] font-[Corbel] font-bold">
              {questionItem}
            </h1>
            <div className="flex flex-col gap-1 overflow-hidden py-3">
              {answers.map((answer, index) => (
                <div key={index} className="flex gap-2 items-center py-2">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox === index}
                    onChange={() => setSelectedCheckbox(index)}
                    className="w-[10px] h-[10px] md:max-xl:w-[24px] md:max-xl:h-[24px] rounded-full appearance-none border border-[#757575] checked:bg-[#1F356E]"
                  />
                  <p className="text-sm leading-4 md:leading-5 md:text-[16px] lg:text-lg  text-[#00000099] font-bold w-[75%] lg:w-[100%] ">
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
        <div className="gap-2  items-center flex  py-1 px-3 ">
          <FaRegClock className="text-lg md:text-3xl text-[#00000099] " />
          <p className="text-[16px] md:text-2xl  text-[#00000099] mb-[3%] ">
            {remainingTime} dəqiqə
          </p>
        </div>
        {/* Buttons */}
        <div className="w-[60%] h-12 flex justify-center items-center gap-4 ">
          <OutlineBtn
            onClick={handleReturnButton}
            size={144}
            text="Geriyə qayıt"
          />
          <MainButton
            text={isLastQuestion ? "Quizi bitir" : "Davam et"}
            className="w-[144px] h-12 md:h-[56px]"
            onClick={handleNextQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizCards;
