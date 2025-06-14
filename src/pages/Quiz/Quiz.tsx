import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";
import QuizCards from "./QuizCards";
import { useState } from "react";
import QuizSider from "./QuizSider";
import ProgressBar from "../../components/ProgressBar";
import QuizResult from "./QuizResult";

const quizdata = [
  {
    question: "Agile metodologiyasının əsas məqsədi nədir?",
    answers: [
      "Müştəriyə yalnız layihənin sonunda məhsul təqdim etmək",
      "Planlara ciddi şəkildə sadiq qalmaq və dəyişikliklərə qarşı çıxmaq",
      "Müştəriyə yalnız layihənin sonunda məhsul təqdim etmək",
      "Müştəriyə yalnız layihənin sonunda məhsul təqdim etmək",
      "Müştəriyə yalnız layihənin sonunda məhsul təqdim etmək",
    ],
  },
  {
    question: "Neçə əsas dəyər dayanır?",
    answers: [
      "Ənənəvi “waterfall” modelini sürətləndirmək",
      "Planlara ciddi şəkildə sadiq qalmaq və dəyişikliklərə qarşı çıxmaq",
      "Komanda üzvlərinin fərdi performansına fokuslanmaq",
      "Komanda üzvlərinin fərdi performansına fokuslanmaq",
      "Komanda üzvlərinin fərdi performansına fokuslanmaq",
    ],
  },
];

export default function QuizPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
const [isTimeOut, setIsTimeOut] = useState(false);
const [, setIsFinished] = useState(false);
  const handleQuiz = () => {
    setQuizStarted(true);
    setBackButtonClicked(false);
    setShowResult(false);
  };

  const handleBackButton = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    } else if (currentQuizIndex === 0) {
      setQuizStarted(false);
    } else {
      setBackButtonClicked(true);
    }
  };

  const numbers = [1, 2,3,4,5,6,7,8,9,10];

  const handleNextQuestion = () => {
    if (currentQuizIndex < quizdata.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowResult(true);
    }
  };
const handleFinishQuiz = (timeout = false) => {
  setIsFinished(true);
  setIsTimeOut(timeout); // Vaxtla bitibsə true olacaq
};
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      {/* Navbar */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>

      {/* Banner */}
      <div className="w-full absolute top-0 h-[357px] md:h-[357px] brightness-50 opacity-95 sm:h-[300px]">
        <img
          src={QuizBgImg}
          alt="Quiz Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Container */}
      <div
        className={`w-full ${
          !quizStarted ? "max-w-[1093px]" : "max-w-[1183px]"
        } flex flex-col justify-center items-center mt-[200px] relative`}
      >
        {/* Header and progress bar */}
        <div className="space-y-4 relative w-[91%]">
          <h1 className="text-2xl text-start sm:text-3xl text-white leading-9 font-bold">
            {showResult ? "" : quizStarted ? "Quiz" : "Başlanılmayıb"}
          </h1>
          {!showResult && (
            <ProgressBar
              className={quizStarted ? "max-w-[823px]" : "max-w-[1093px]"}
              progress={
                quizStarted
                  ? ((currentQuizIndex + 1) / quizdata.length) * 100
                  : 0
              }
            />
          )}
        </div>

        {/* Content */}
        <div className="w-full flex flex-col justify-center gap-20">
          <div className=" w-full max-w-[1440px] py-6 flex justify-center">
            {showResult ? (
              <QuizResult
              isTimeOut={isTimeOut}
              score={9} totalQuestions={10}/>
            ) : !quizStarted || backButtonClicked ? (
              <StartQuiz
                totalQuestions={5}
                PassingScore={75}
                timeLimit={10}
                onclicked={handleQuiz}
                onFinishQuiz={() => handleFinishQuiz(true)}
              />
            ) : (
              <div className="w-full gap-x-11 mx-[3%] flex flex-col lg:flex-row">
                <QuizCards
                  quizNum={currentQuizIndex + 1}
                  questionItem={quizdata[currentQuizIndex].question}
                  answers={quizdata[currentQuizIndex].answers}
                  remainingTime={52}
                  clickedBack={handleBackButton}
                  clickForward={handleNextQuestion}
                  totalQuestionCount={quizdata.length}
                  totalQuestions={quizdata.length}
                  onFinishQuiz={() => handleFinishQuiz(true)} 
                />
                <QuizSider buttonCounts={numbers} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
