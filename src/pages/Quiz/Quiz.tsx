import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";
import QuizCards from "./QuizCards";
import { useState } from "react";
import QuizSider from "./QuizSider";
import ProgressBar from "../../components/ProgressBar";
import QuizResult from "./QuizResult";
import { useEndQuizMutation, useStartQuizMutation } from "../../services/features/trainingPage/quizApi";
import type { Answer, QuizData, QuizSession } from "../../types/types";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/Hooks";

export default function QuizPage() {
  const params = useParams()
  const trainingId = params.id
  const user = useAppSelector(state => state.auth.user)
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [backButtonClicked, setBackButtonClicked] = useState<boolean>(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  // Quizin neticesi
  const [result, setResult] = useState<QuizSession | null>(null)
  //Sessionun idaresi
  const [sessionId, setSessionId] = useState<number | null>(null);
  // Userin cavablari state ile idare olunur
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  // Apiden gelen quiz statede saxlanilir
  const [quizData, setQuizData] = useState<QuizData | undefined>(undefined)
  const [, setIsFinished] = useState(false);

  const [startQuiz] = useStartQuizMutation(); // Suallari apiden getiren funksiya, user id ve kurs id teleb edir
  const [endQuiz] = useEndQuizMutation(); // Quizni bitiren funksiya, user id, kurs id ve cavablar teleb edir

  const handleQuiz = async () => { //Quize basla butonun kliki
    if (!user || !trainingId) return; // User ve kurs id yoxdursa funksiya dayanmalidi

    await startQuiz({ quizId: Number(trainingId), userId: user?.id }).then((res) => {
      const data = res?.data?.data;
      setQuizData(data);
      setSessionId(data?.sessionId ?? null);
    }).catch((err) => {
      console.log(err)
    });
    setQuizStarted(true);
    setBackButtonClicked(false);
    setShowResult(false);

  };


  const handleAnswerSelect = (questionId: number, answerId: number) => {  // Cavablar secilir
    if (!sessionId) return; // sessionId yoxdursa, heç nə etmə

    setUserAnswers((prevAnswers) => {
      const existingIndex = prevAnswers.findIndex((a) => a.questionId === questionId);

      const newAnswer = {
        sessionId: sessionId,
        questionId,
        answerId,
      };

      if (existingIndex !== -1) {
        const updated = [...prevAnswers];
        updated[existingIndex] = newAnswer;
        return updated;
      }

      return [...prevAnswers, newAnswer];
    });
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

  const handleNextQuestion = () => {
    if (currentQuizIndex < quizData?.questions?.length! - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  const handleFinishQuiz = async (timeout = false) => {
    if (!user || !sessionId) return; // User , training, session yoxdursa funksiya dayanmalidi
    setIsFinished(true);
    await endQuiz({ sessionId: sessionId!, answers: userAnswers }).then((res) => {
      setShowResult(true);
      setResult(res?.data?.data ?? null)
    }).catch((err) => {
      console.log(err)
    });
    setIsTimeOut(timeout);
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
        className={`w-full ${!quizStarted ? "max-w-[1093px]" : "max-w-[1183px]"
          } flex flex-col justify-center items-center mt-[200px] relative`}
      >
       

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-5">
         
          <div className="w-full xl:max-w-[1440px] py-6 flex flex-col items-center  gap-5 justify-center relative z-[76]">
              {/* Header and progress bar */}
        <div className="space-y-4  relative w-[89%]">
          <h1 className="text-2xl text-start sm:text-3xl text-white leading-9 font-bold">
            {showResult ? "" : quizStarted ? "Quiz" : "Başlanılmayıb"}
          </h1>
          {!showResult && (
            <ProgressBar
              className={quizStarted ? "w-full md:max-w-[550px] lg:max-w-[755px] xl:max-w-[810px] relative z-[77] flex justify-start xl:justify-end " : "w-full "}
              progress={
                quizStarted
                  ? ((currentQuizIndex + 1) / quizData?.questions?.length!) * 100
                  : 0
              }
            />
          )}
        </div>
            {showResult ? (
              <QuizResult       /* Neticeler screeni */
                isTimeOut={isTimeOut}
                percentage={result?.scorePercentage!}
                isPassed={result?.isPassed!}
                correctAnswers={result?.correctAnswerCount!}
              />
            ) : !quizStarted || backButtonClicked ? (
              <StartQuiz        /* Quiz baslamamis screeni */
                totalQuestions={25}
                PassingScore={75}
                timeLimit={30}
                startQuiz={handleQuiz}
              />
            ) : (
              <div className="w-full gap-x-11 flex flex-col items-center  xl:items-start gap-10 md:flex-row">
                <QuizCards      /* Quizler screeni artiq baslayib */
                  quizNum={currentQuizIndex + 1}   // Aktiv quiz
                  questionItem={quizData?.questions?.[currentQuizIndex]!}   // Sual (basliq)
                  answers={quizData?.questions?.[currentQuizIndex].answers!}   // Variantlar
                  timeLimit={quizData?.durationInMinutes!}   //Vaxt limiti
                  clickedBack={handleBackButton} // Geriye qayit
                  clickForward={handleNextQuestion}
                  totalQuestions={quizData?.questions?.length!}
                  onFinishQuiz={() => handleFinishQuiz()}  // Bitir
                  onAnswerSelect={(answerId: number) =>
                    handleAnswerSelect(quizData?.questions?.[currentQuizIndex].id!, answerId)
                  }
                  selectedAnswerId={
                    userAnswers.find((a) => a.questionId === quizData?.questions?.[currentQuizIndex].id)
                      ?.answerId ?? -1
                  }
                />
                <QuizSider
                  setActiveQuiz={setCurrentQuizIndex}
                  answeredQuestions={userAnswers}
                  questions={quizData?.questions!}
                  currentQuizIndex={currentQuizIndex}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
