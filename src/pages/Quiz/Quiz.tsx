import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";

export default function QuizPage() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                <Navbar />
            </div>
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[357px]">
                <img 
                    src={QuizBgImg} 
                    alt="Quiz Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] bg-opacity-50" />
            </div>
            <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 py-6 -mt-52 sm:-mt-32 md:-mt-40">
                <StartQuiz
                    totalQuestions={5}
                    PassingScore={3}
                    timeLimit={10}
                />
            </div>
        </div>
    )
}