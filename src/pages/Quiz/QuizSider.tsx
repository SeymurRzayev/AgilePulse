import { type FC } from "react";
import type { Answer, Question } from "../../types/types";

type Props = {
  questions: Question[];
  currentQuizIndex: number;
  setActiveQuiz: (index: number) => void;
  answeredQuestions: Answer[];
};
const QuizSider: FC<Props> = ({ currentQuizIndex, questions, answeredQuestions, setActiveQuiz }) => {

  const goToQuestion = (index: number) => {  // Kliklenen sualin indexini gonderib UI de hemin suali goster
    setActiveQuiz(index);
  };

  return (
    <div className="  hidden lg:block">
      <div
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="flex flex-col h-[613px] px-[34px] py-[38px] overflow-y-scroll items-center gap-[13px] w-full bg-[#BEC7E0BF] backdrop-blur-lg rounded-[30px] shadow-2xl ">
        {questions?.map((q, index) => (
          <button
            className={`min-w-[248px] !min-h-[42px] font-[Corbel] 
              ${currentQuizIndex === index ? "border-2 border-[#2C4B9B]" : ""}
              ${answeredQuestions.find((a) => a.questionId === q.id)
                ? "bg-[#28448D] text-[#FFFFFF]"
                : "bg-[#FFFFFF] text-[#000000]"
              }
              rounded-[15px] text-left pl-[29px] text-lg cursor-pointer`}
            key={q.id}
            onClick={() => goToQuestion(index)}
          >
            Sual {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSider;
