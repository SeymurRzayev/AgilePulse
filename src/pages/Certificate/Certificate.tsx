import React from 'react';
import gradientBg from '../../assets/images/certificateGradient1.svg';
import gradientBg2 from '../../assets/images/certificateGradient2.svg';
import gradientBg3 from '../../assets/images/CertificateGradinet3.svg';
import gradientBg4 from '../../assets/images/certificateGradient4.svg';
import gradientBg5 from '../../assets/images/cerificateGradient5.svg';
import gradientBg6 from '../../assets/images/cerificateGradient6.svg';
import gradientBg7 from '../../assets/images/certificateGradient7.svg';
import gradientBg8 from '../../assets/images/cerificateGradient8.svg';
import seal from '../../assets/images/seal.svg';
import logo from '../../assets/icons/logo.svg';

interface CertificateProps {
  studentName: string;
  courseDescription?: string;
  date?: string;
}

const Certificate: React.FC<CertificateProps> = ({
  studentName,
  courseDescription = "2025-ci ilin Aprel-May aylarında keçirilən \"UX/UI Dizaynın Əsasları\" adlı təlim proqramını uğurla tamamlamışdır.",
  date = new Date().toLocaleDateString('az-AZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '.')
}) => {
  return (
    <div className=" h-[650px] bg-gray-50 flex items-center justify-center mt-2 overflow-hidden">
      <div className="relative w-full xl:w-[85%] 2xl:w-[80%] max-w-[1400px] bg-white shadow-2xl overflow-hidden border border-gray-200 rounded-lg flex justify-center">
        
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative top-0 left-0 flex flex-row">
            <div className="w-[200px] md:w-[250px] xl:w-[350px] h-[160px] md:h-[220px] xl:h-[300px] absolute z-0">
              <img src={gradientBg} alt="gradient" className="w-full h-full object-cover absolute z-0" />
            </div>
            <div className="w-[100px] md:w-[150px] xl:w-[200px] h-[40px] md:h-[80px] xl:h-[150px] absolute z-10 ml-12 xl:ml-20 top-0">
              <img src={gradientBg2} alt="gradient" className="w-full h-full object-fill absolute z-10" />
            </div>
          </div>

          <div className="relative top-0 right-0 z-0">
            <div className="absolute z-20 top-0 right-0 w-[120px] xl:w-[300px] h-[40px] xl:h-[95px]">
              <img src={gradientBg3} alt="gradient" className="w-full h-full object-fill" />
            </div>
            <div className="absolute z-20 top-0 right-0 w-[100px] xl:w-[256px] h-[140px] xl:h-[300px]">
              <img src={gradientBg4} alt="gradient" className="w-full h-full object-fill" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0">
            <div className="w-[160px]  md:w-[280px] xl:w-[650px] h-[80px]  md:h-[140px] xl:h-[250px]">
              <img src={gradientBg5} alt="gradient" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="absolute flex flex-row bottom-0 right-0">
            <div className="w-[110px] md:w-[400px] xl:w-[600px] h-[50px] md:h-[70px] xl:h-[200px] relative z-19">
              <img src={gradientBg6} alt="gradient" className="w-full h-full object-fill" />
            </div>
            <div className="w-[200px] md:w-[500px] xl:w-[870px] h-[70px] md:h-[160px] xl:h-[210px] absolute z-20 bottom-0">
              <img src={gradientBg7} alt="gradient" className="w-full h-full object-cover" />
            </div>
            <div className="w-[60px] md:w-[150px]  xl:w-[250px] h-[20px]  md:h-[50px] xl:h-[100px] absolute z-23 right-0 bottom-0">
              <img src={gradientBg8} alt="gradient" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Borders */}
          <div className="absolute w-32 xl:w-80 h-[1px] top-6 xl:top-16 right-6 xl:right-16 bg-[#22244C]"></div>
          <div className="absolute top-10 xl:top-24 right-[12px] xl:right-[30px] w-[1px] h-32 xl:h-80 bg-[#22244C]"></div>
          <div className="absolute bottom-6 xl:bottom-16 left-6 xl:left-16 w-32 xl:w-80 h-[1px] bg-[#22244C]"></div>
          <div className="absolute bottom-10 xl:bottom-24 left-[12px] xl:left-[30px] w-[1px] h-32 xl:h-80 bg-[#22244C]"></div>
        </div>

        {/* Certificate content */}
        <div className="relative z-10 flex flex-col justify-center items-center px-6 py-4 xl:px-12 xl:py-16 2xl:px-20 2xl:py-24">
          <div className="text-center mt-[40px] xl:mt-[100px]">
            <h1 className="text-2xl xl:text-5xl 2xl:text-6xl font-bold text-[#6D3892] tracking-[2px] xl:tracking-[4px] mb-4 font-[corbel]">
              CERTIFICATE
            </h1>
            <div className="w-28 xl:w-72 h-1 bg-gradient-to-r from-[#2C4B9B] via-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="text-center mt-3 xl:mt-6 mb-3 xl:mb-6">
            <h2 className="text-base xl:text-3xl 2xl:text-4xl font-light text-gray-700 italic font-[corbel italic]">
              {studentName}
            </h2>
          </div>

          <div className="flex justify-center text-center mb-6 xl:mb-12 max-w-4xl mx-auto px-4">
            <p className="text-[10px] xl:text-lg 2xl:text-xl text-[#182955] leading-relaxed font-[corbel]">
              {courseDescription}
            </p>
          </div>

          <div className="w-20 h-20 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 flex justify-center items-center mt-3">
            <img src={seal} alt="seal" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between items-center max-w-5xl mx-auto w-full px-4 md:px-8  mb-10 md:mb-15 ">
            {/* Left: Logo + date */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Agile Pulse Logo" 
                className="w-6 h-6 xl:w-10 xl:h-10 mr-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="absolute z-30 w-6 h-6 xl:w-10 xl:h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl items-center justify-center mr-3 hidden shadow-lg">
                <div className="text-white font-bold text-xs xl:text-lg">A</div>
              </div>
              <div>
                <div className="text-[#182955] font-normal text-xs xl:text-lg">Agile Pulse</div>
                <div className="text-[#182955] text-xs xl:text-base">{date}</div>
              </div>
            </div>

            {/* Right: Signature / repeated info */}
            <div className="text-right">
              <div className="text-[#182955] font-normal text-xs xl:text-lg">Agile Pulse</div>
              <div className="text-[#182955] text-xs xl:text-base">{date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
