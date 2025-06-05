import Navbar from "../../layout/Navbar/Navbar";
import QuizBgImg from "../../assets/images/QuizImg.jpg";
import StartQuiz from "../../pages/Quiz/StartQuiz";
export default function QuizPage(){
    return(
        <div>
            <div className="flex justify-center">
                 <Navbar/>
            </div>
             <div className="w-full h-[357px]">
                <img 
                src={QuizBgImg} 
                alt="Quiz Background"
                className="w-full h-full object-cover"
                />
             </div>
             <StartQuiz
                totalQuestions={5}
                PassingScore={3}
                timeLimit={10}
             />
        </div>
    )
}