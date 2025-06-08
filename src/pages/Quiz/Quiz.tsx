import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";
import QuizCards from "./QuizCards";
import { useState } from "react";
import QuizSider from "./QuizSider";
import ProgressBar from "../../components/ProgressBar";

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
  const [quizStarted, setQuizStarted] = useState(false); // to start the quiz
  const [backButtonClicked, setBackButtonClicked] = useState(false); // to go back to the previous question
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const handleQuiz = () => {
    setQuizStarted(true);
    setBackButtonClicked(false);
  };

  const handleBackButton = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    }
    else if (currentQuizIndex === 0) {
      setQuizStarted(false);
    }
    else {
      setBackButtonClicked(true);
    }
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleNextQuestion = () => {
    if (currentQuizIndex < quizdata.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setQuizStarted(false);
      setBackButtonClicked(false);
      setCurrentQuizIndex(0);
    }
  };
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col items-center w-full  ">
      {/* Navbar */}
      <div className=" w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      {/* Banner */}
      <div className="w-full absolute top-0 h-[357px] md:h-[357px] brightness-50 opacity-95 sm:h-[300px]  ">
        <img
          src={QuizBgImg}
          alt="Quiz Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Container */}
      <div
        className={`w-full ${!quizStarted ? 'max-w-[1093px]' : 'max-w-[1183px]'} flex flex-col justify-center  mt-[200px] relative`}
      >
        {/* Header and progress bar */}
        <div className="space-y-4 relative ">
          <h1 className="text-2xl sm:text-3xl text-white leading-9 font-bold">
            Başlanılmayıb
          </h1>
          <ProgressBar
            className={quizStarted ? "max-w-[823px]" : 'max-w-[1093px]'}
            progress={
              quizStarted ? ((currentQuizIndex + 1) / quizdata.length) * 100 : 0
            }
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-20">

          <div className="flex w-full max-w-[1440px] py-6 ">
            {!quizStarted || backButtonClicked ? (
              <StartQuiz
                totalQuestions={5}
                PassingScore={75}
                timeLimit={10}
                onclicked={handleQuiz}
              />
            ) : (
              <div className="w-full gap-x-11 flex flex-col lg:flex-row justify-between">
                <QuizCards
                  quizNum={currentQuizIndex + 1}
                  questionItem={quizdata[currentQuizIndex].question}
                  answers={quizdata[currentQuizIndex].answers}
                  remainingTime={52}
                  clickedBack={handleBackButton}
                  clickForward={handleNextQuestion}
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
