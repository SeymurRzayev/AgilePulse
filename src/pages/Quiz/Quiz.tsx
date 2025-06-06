import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";
import QuizCards from "./QuizCards";
import { useState } from "react";
import QuizSider from "./QuizSider";
import ProgressBar from "./ProgressBar";

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
    } else {
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
    <div className="mb-[30%] min-h-screen w-full overflow-x-hidden">
      <div className=" w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <Navbar />
      </div>
      <div className="w-full h-[30vh] md:h-[40vh] relative sm:h-[300px]  ">
        <img
          src={QuizBgImg}
          alt="Quiz Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] bg-opacity-50" />
      </div>
      <div className="w-full flex md:justify-center items-center absolute top-[60%] md:top-[75%] lg:top-[70%] ">
        <div className="flex flex-col  justify-center gap-20 absolute ">
          <ProgressBar
            progress={
              quizStarted ? ((currentQuizIndex + 1) / quizdata.length) * 100 : 0
            }
            status={quizStarted ? "started" : "not started"}
          />
          <div className="w-full max-w-[1440px] mx-auto  py-6 -mt-52 sm:-mt-32 md:-mt-40 ">
            {!quizStarted || backButtonClicked ? (
              <StartQuiz
                totalQuestions={5}
                PassingScore={75}
                timeLimit={10}
                onclicked={handleQuiz}
              />
            ) : (
              <>
                <QuizCards
                  quizNum={currentQuizIndex + 1}
                  questionItem={quizdata[currentQuizIndex].question}
                  answers={quizdata[currentQuizIndex].answers}
                  remainingTime={52}
                  clickedBack={handleBackButton}
                  clickForward={handleNextQuestion}
                />
                <QuizSider buttonCounts={numbers} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
