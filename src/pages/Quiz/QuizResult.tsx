import QuizScoreChart from "./QuizScoreChart";
import successConfetti from "../../assets/images/successConfetti.svg";
import congratulation from "../../assets/images/congratulation 1.svg";
import downloadCertificate from "../../assets/images/download.svg";
import notsucces from "../../assets/images/notsucces.svg";
import MainButton from "../../components/Butttons/MainButton";
import { useNavigate } from "react-router-dom";
interface Props {
  score: number;
  totalQuestions: number;
}

const QuizResult: React.FC<Props> = ({ score, totalQuestions }) => {
  let percentage = 0;
  if (totalQuestions > 0) {
    percentage = Math.round((score / totalQuestions) * 100);
  }
  const isPassed = percentage >= 75;
  //   const bgImg = isPassed ? `${successConfetti}` : ``;
  const resultImg = isPassed ? `${congratulation}` : `${notsucces}`;
  const resultMessage = isPassed
    ? "TƏBRİKLƏR!"
    : "Bu dəfə alınmadı? Yenidən sınamaq fürsətin var!";
  const resultTitle = isPassed
    ? "Siz quizdən uğurla keçdiniz. Agile metodologiyası üzrə biliklərinizi uğurla nümayiş etdirdiniz."
    : "Quizdən keçə bilməmisinizsə, narahat olmayın – sizə yenidən müraciət etmək imkanı təqdim olunur. Hazırlaşın, daha güclü qayıdın!";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#");
  };

  return (
    <div className="w-11/12 h-[580px] md:h-[687px] bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px]">
      <div
        className="flex flex-col justify-between items-center  w-full h-full bg-cover bg-center rounded-4xl relative z-0 "
        style={{
          backgroundImage: isPassed ? `url(${successConfetti})` : "none",
        }}
      >
        <div
          className="absolute z-20 flex flex-col justify-center items-center gap-2 md:gap-10 p-5 bottom-1 md:bottom-10 ">
          <div className={isPassed ? "w-40 h-40" : "w-18 h-18 md:w-24 md:h-24"}>
            <img
              src={resultImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
  
            <QuizScoreChart score={80} totalQuestions={100} />
    
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-xl md:text-3xl font-bold leading-8 md:leading-9 tracking-normal font-[corbel] text-center">
              {resultMessage}
            </h2>
            <h4 className="text-lg md:text-[22px] font-bold leading-4 md:leading-8 tracking-normal font-[corbel] text-center">
              {resultTitle}
            </h4>
            {isPassed ? (
              <div className="flex justify-center items-center gap-1.5 md:gap-2">
                <p className="leading-5 md:leading-7 text-[16px] md:text-[22px] font-medium font-[corbel]">
                  Sertifikatınızı buradan yükləyin
                </p>
                <div>
                  <img src={downloadCertificate} alt="download icon" />
                </div>
              </div>
            ) : (
              <MainButton
                text="Təlimə keçid et"
                className="w-[234px] h-[56px]"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizResult;
