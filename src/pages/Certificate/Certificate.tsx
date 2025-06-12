import React from "react";
import gradientBg from "../../assets/images/certificateGradient1.svg";
import gradientBg2 from "../../assets/images/certificateGradient2.svg";
import gradientBg3 from "../../assets/images/CertificateGradinet3.svg";
import gradientBg4 from "../../assets/images/certificateGradient4.svg";
import gradientBg5 from "../../assets/images/cerificateGradient5.svg";
import gradientBg6 from "../../assets/images/cerificateGradient6.svg";
import gradientBg7 from "../../assets/images/certificateGradient7.svg";
import gradientBg8 from "../../assets/images/cerificateGradient8.svg";
import seal from "../../assets/images/seal.png";
import logo from "../../assets/icons/logo.svg";

interface CertificateProps {
  studentName: string;
  courseDescription?: string;
  date?: string;
}

const Certificate: React.FC<CertificateProps> = ({
  studentName,
  courseDescription = '2025-ci ilin Aprel-May aylarında keçirilən "UX/UI Dizaynın Əsasları" adlı təlim proqramını uğurla tamamlamışdır.',
  date = new Date()
    .toLocaleDateString("az-AZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "."),
}) => {
  return (
    <div className="h-[650px]  bg-gray-50 flex items-center justify-center mt-2 overflow-hidden">
      <div className="relative w-[96%] md:w-[68%] lg:w-[90%] xl:w-[72%] bg-white  overflow-hidden border border-gray-200 rounded-lg flex justify-center">
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative top-0 left-0 flex flex-row">
            <div className="w-[180px] md:w-[250px] lg:w-[400px] 2xl:w-[450px] h-[220px] md:h-[260px] lg:h-[420px] 2xl:h-[620px] absolute z-0">
              <img
                src={gradientBg}
                alt="gradient"
                className="w-full h-full object-cover absolute z-0"
              />
            </div>
            <div className="w-[150px] md:w-[200px] lg:w-[310px] 2xl:w-[380px] h-[60px] md:h-[90px] lg:h-[150px] 2xl:h-[240px] absolute z-10 ml-12 lg:ml-20 top-0">
              <img
                src={gradientBg2}
                alt="gradient"
                className="w-full h-full object-contain absolute z-10"
              />
            </div>
          </div>

          <div className="relative top-0 right-0 z-0">
            <div className="absolute z-20 top-0 right-0 w-[120px] md:w-[180px] lg:w-[350px] 2xl:w-[380px] h-[50px] md:h-[100px] lg:h-[150px] 2xl:h-[180px]">
              <img
                src={gradientBg3}
                alt="gradient"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="absolute z-20 top-0 right-0 w-[100px] md:w-[140px] lg:w-[256px] 2xl:[300px] h-[90px] md:h-[120px] lg:h-[340px] 2xl:h-[360px]">
              <img
                src={gradientBg4}
                alt="gradient"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0">
            <div className="w-[200px]  md:w-[280px] lg:w-[670px] 2xl:w-[750px] h-[100px]  md:h-[140px] lg:h-[280px] 2xl:h-[490px]">
              <img
                src={gradientBg5}
                alt="gradient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute flex flex-row bottom-0 right-0">
            <div className="w-[160px] md:w-[300px] lg:w-[550px] 2xl:w-[670px] h-[50px] md:h-[50px] lg:h-[90px] 2xl:h-[170px] relative z-19">
              <img
                src={gradientBg6}
                alt="gradient"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-[220px] md:w-[480px] lg:w-[870px] 2xl:w-[940px] h-[80px] md:h-[140px] lg:h-[230px] 2xl:h-[320px] absolute z-20 bottom-0">
              <img
                src={gradientBg7}
                alt="gradient"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[80px] md:w-[90px]  lg:w-[200px] 2xl:w-[270px] h-[27px]  md:h-[30px] lg:h-[70px] 2xl:h-[150px] absolute z-23 right-0 bottom-0">
              <img
                src={gradientBg8}
                alt="gradient"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Borders */}
          <div className="absolute w-32 xl:w-80 h-[1px] top-6 xl:top-16 right-6 xl:right-16 bg-[#22244C]"></div>
          <div className="absolute top-10 xl:top-24 right-[12px] xl:right-[30px] w-[1px] h-32 xl:h-80 bg-[#22244C]"></div>
          <div className="absolute bottom-6 xl:bottom-16 left-6 xl:left-16 w-32 xl:w-80 h-[1px] bg-[#22244C]"></div>
          <div className="absolute bottom-10 xl:bottom-24 left-[12px] xl:left-[30px] w-[1px] h-32 xl:h-80 bg-[#22244C]"></div>
        </div>

        {/* Certificate content */}
        <div className="relative z-10 flex flex-col justify-center items-center px-6 py-4 lg:px-12 lg:py-16 2xl:px-20 2xl:py-24">
          <div className="text-center mt-[50px] md:mt-[80px] lg:mt-[100px]">
            <h1 className="text-2xl lg:text-5xl 2xl:text-6xl font-bold text-[#6D3892] tracking-[2px] lg:tracking-[4px] mb-2  font-[corbel]">
              CERTIFICATE
            </h1>
            <div className="w-28 lg:w-72 h-1 bg-gradient-to-r from-[#2C4B9B] via-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="text-center mt-3 lg:mt-6 mb-3 xl:mb-6">
            <h2 className="text-base lg:text-3xl 2xl:text-4xl font-light text-gray-700 italic font-[corbel italic]">
              {studentName}
            </h2>
          </div>

          <div className="flex justify-center text-center mb-6 lg:mb-12 max-w-4xl mx-auto px-4">
            <p className="text-[10px] lg:text-lg 2xl:text-xl text-[#182955] leading-relaxed font-[corbel]">
              {courseDescription}
            </p>
          </div>

          <div className="flex justify-between items-center max-w-5xl mx-auto w-full px-4 md:px-8  mb-6 md:mb-10 ">
            {/* Left: Logo + date */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Agile Pulse Logo"
                className="w-6 h-6 lg:w-18 lg:h-18 mr-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
            
              <div>
                <div className="text-[#182955] font-normal text-xs lg:text-lg 2xl:text-2xl">
                  Agile Pulse
                </div>
                <div className="text-[#182955] text-xs lg:text-[14px] 2xl:text-lg">
                  {date}
                </div>
              </div>
            </div>
            <div className=" w-17 h-13 md:w-28 md:h-20 lg:w-50 lg:h-35 2xl:w-50 2xl:h-35 flex justify-center items-center mt-3">
              <img
                src={seal}
                alt="seal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Signature / repeated info */}
            <div className="text-center">
              <div className="text-[#182955] font-normal text-xs lg:text-lg 2xl:text-2xl">
                Agile Pulse
              </div>
              <div className="text-[#182955] text-xs lg:text-[14px] 2xl:text-lg">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
