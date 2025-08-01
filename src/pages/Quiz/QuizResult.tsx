import QuizScoreChart from "./QuizScoreChart";
import successConfetti from "../../assets/images/successConfetti.svg";
import congratulation from "../../assets/images/congratulation 1.svg";
import downloadCertificate from "../../assets/images/download.svg";
import notsucces from "../../assets/images/notsucces.svg";
import MainButton from "../../components/Butttons/MainButton";
import timeOut from '../../assets/images/timeOut.svg';
import { useNavigate } from "react-router-dom";
import { toPng } from 'html-to-image'
import { useEffect, useRef, useState } from "react";
import Certificate from "../Certificate/Certificate";
import { useAppSelector } from "../../redux/hooks/Hooks";
import { useCreateCertificateMutation } from "../../services/features/trainingPage/certificateApi";
interface Props {
  percentage: number;
  isTimeOut: boolean;
  isPassed: boolean,
  correctAnswers: number,
  courseName: string;
  trainingId: number
}

const QuizResult: React.FC<Props> = ({ percentage, isPassed, isTimeOut, correctAnswers, trainingId, courseName }) => {

  // const dispatch = useAppDispatch()
  const [certificatePng, setCertificatePng] = useState<string | null>(null);
  const user = useAppSelector(state => state.auth.user);
  // const [updatePhoto] = useUpdatePhotoMutation();
  const [createCertificate] = useCreateCertificateMutation();
  const resultImg = isTimeOut ? timeOut : isPassed
    ? congratulation
    : notsucces;
  const resultMessage = isTimeOut
    ? "Vaxt tamamlandı – lakin şans davam edir!"
    : isPassed
      ? "TƏBRİKLƏR!"
      : "Bu dəfə alınmadı? Yenidən sınamaq fürsətin var!";
  const resultTitle = isTimeOut
    ? "Təkrar cəhd etmək imkanı təqdim olunur. İrəliləmək üçün ikinci şansı qaçırma!"
    : isPassed
      ? "Siz quizdən uğurla keçdiniz. Agile metodologiyası üzrə biliklərinizi uğurla nümayiş etdirdiniz."
      : "Quizdən keçə bilməmisinizsə, narahat olmayın – sizə yenidən müraciət etmək imkanı təqdim olunur. Hazırlaşın, daha güclü qayıdın!";
  const navigate = useNavigate();
  const navigateTraining = () => {
    navigate("/trainings");
  };
  const navigateQuiz = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    const generatePngAndUpload = async () => {
      if (isPassed && certificateRef.current) {
        const dataUrl = await toPng(certificateRef.current, {
          backgroundColor: "white",
          width: 800,
          height: 650,
          quality: 1,
          cacheBust: true,
          pixelRatio: 2,
          fontEmbedCSS: '15px Arial, sans-serif',
        });
        setCertificatePng(dataUrl);

        const byteCharacters = atob(dataUrl.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const file = new File([byteArray], 'certificate.png', {
          type: 'image/png',
        });

        const formData = new FormData();
        formData.append('userId', user?.id.toString()!);
        formData.append('trainingId', trainingId.toString());
        formData.append('certificateFile ', file);

        try {
          const res = await createCertificate(formData).unwrap();
          console.log(res)
        } catch (error: any) {
          console.error("Image upload failed:", error);
        }
      }
    };
    generatePngAndUpload();
    // eslint-disable-next-line
  }, [isPassed, user?.fullName]);

  const certificateRef = useRef<HTMLDivElement>(null);
  const handleDownloadAndSave = () => {
    if (certificatePng) {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = certificatePng;
      link.click();

    }
  };

  return (
    <div className="w-11/12 flex flex-col justify-center items-center gap-10 md:gap-14">
      <div className={isTimeOut ? "w-full h-[380px]  md:max-h-[687px] bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px]" : "w-full h-[580px]  md:max-h-[687px] bg-[#EAEDF5BF] backdrop-blur-lg rounded-[30px]"}>
        <div
          className="flex flex-col justify-between items-center  w-full h-full bg-contain md:bg-cover bg-center rounded-4xl relative z-0 "
          style={{
            backgroundImage: isTimeOut ? "none" : isPassed ? `url(${successConfetti})` : "none",
          }}
        >
          <div className={isTimeOut ? "absolute z-20 flex flex-col justify-center items-center gap-10 bottom-16 md:bottom-10 " : "absolute z-20 flex flex-col justify-center items-center  p-5 bottom-0  md:bottom-2"}>
            <div className={isTimeOut ? "w-38 h-38 md:w-60 md:h-60" : isPassed ? "w-38 h-38 md:w-40 md:h-40" : "w-18 h-18 md:w-22 md:h-22"}>
              <img
                src={resultImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {
              !isTimeOut && <QuizScoreChart correctAnswers={correctAnswers} percentage={percentage} isPassed={isPassed} isTimeOut={false} />
            }
            <div className="flex flex-col items-center justify-center gap-4 md:gap-7 w-[90%]">
              <h2 className="text-xl md:text-3xl font-bold leading-8 md:leading-9 tracking-normal font-[corbel] text-center">
                {resultMessage}
              </h2>
              <h4 className="text-lg md:text-[22px] font-bold leading-5 md:leading-8 tracking-normal font-[corbel] text-center">
                {resultTitle}
              </h4>
              {isTimeOut ? <MainButton
                text="Quizə başla"
                onClick={navigateQuiz}
                className="w-60 h-14" /> : isPassed ? (
                  <div
                    onClick={handleDownloadAndSave}
                    className="flex justify-center items-center gap-1.5 md:gap-2">
                    <p className="leading-5 md:leading-7 text-[14px] md:text-[22px] font-medium font-[corbel]">
                      Sertifikatınızı buradan yükləyin
                    </p>
                    <div className="w-5 h-5 md:w-8 md:h-8">
                      <img className="w-full h-full object-cover" src={downloadCertificate} alt="download icon" />
                    </div>
                  </div>
                ) : (
                <MainButton
                  text="Təlimə keçid et"
                  className="w-[234px] h-[56px]"
                  onClick={navigateTraining}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isPassed && <div className="flex flex-col items-center justify-center gap-10 md:gap-14  text-center ">
        <h2 className="font-bold leading-7 md:leading-11 font-[corbel] text-2xl md:text-4xl">Uğurlu iştirakçılar üçün növbəti addım: yeni təlimlər</h2>
        {/* <TrainingListContainer trainingCourses={trainingCourses}/> */}
      </div>}

      <div
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "100%",
          height: "650px",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <Certificate courseName={courseName} studentName={`${user?.fullName}`} ref={certificateRef} />
      </div>
    </div>

  );
};
export default QuizResult;
