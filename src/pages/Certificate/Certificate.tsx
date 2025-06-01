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
    <div className="h-[640px] bg-gray-50 flex items-center justify-center mt-5 overflow-hidden">
      <div className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden border border-gray-200 rounded-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className='relative top-0 left-0 flex flex-row '>
            <div className='w-[256px]  h-[332px] absolute z-0'>
            <img src={gradientBg} alt="gradient" className='w-full h-full object-cover absolute z-0' />
            </div>
            <div className='w-[230px] h-[150px] absolute z-10  ml-25 top-0'><img src={gradientBg2} alt="gradient" className='w-full h-full object-fill absolute z-10' /></div>
            </div>

          <div className='relative top-0 right-0 z-0'>
              <div className='absolute z-20 top-0 right-0 w-[300px] h-[95px]' ><img src={gradientBg3} alt="gradient" className='w-full h-full object-fill' /></div>
              <div className='absolute z-20 top-0 right-0 w-[256px] h-[300px]' ><img src={gradientBg4} alt="gradient" className='w-full h-full object-fill' /></div>
          </div>

          <div className="absolute bottom-0 left-0">
            <div className='w-[500px] h-[250px]'><img src={gradientBg5} alt="gradient" className='w-full h-full object-cover' /></div>
          </div>
          <div className="absolute  flex flex-row  bottom-0 right-0">
                  <div className='w-[500px] h-[180px] relative z-19 '><img src={gradientBg6} alt="gradient" className='w-full h-full object-fill' /></div>
                  <div className='w-[870px] h-[160px] absolute z-20 '><img src={gradientBg7} alt="gradient" className='w-full h-full object-cover' /></div>
                  <div className='w-[200px] h-[250px] absolute z-23 right-0'><img src={gradientBg8} alt="gradient" className='w-full h-full object-contain' /></div>
          </div>
    
          <div className="absolute w-85 h-[1px] top-15 right-16  bg-[#22244C] "></div>
          <div className="absolute top-23 right-[30px] w-[1px] h-80  bg-[#22244C]"></div>
          <div className="absolute bottom-15 left-16 w-85 h-[1px] bg-[#22244C]"></div>
          <div className="absolute bottom-23 left-[30px] w-[1px] h-80  bg-[#22244C]"></div>
        </div>

        <div className="relative z-10  flex flex-col justify-center items-center px-4 py-4 mt-5 md:px-8 md:py-12">
          <div className="text-center mt-[100px] ">
            <h1 className="text-3xl md:text-5xl lg:text-5xl leading-9 font-bold text-[#6D3892] tracking-[4px] mb-2 mt-3.5 font-[corbel]">
              CERTIFICATE
            </h1>
          <div className="w-40 md:w-50 lg:w-70 h-1 bg-gradient-to-r from-[#2C4B9B] via-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="text-center mt-3 mb-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-700 italic tracking-wide font-[corbel italic]">
              {studentName}
            </h2>
          </div>
          <div className=" flex justify-center text-center mb-8  md:mb-12 max-w-2xl mx-auto px-4">
            <p className=" w-11/12 text-[12px] md:text-lg lg:text-xl text-[#182955] leading-relaxed font-normal font-[corbel] text-wrap">
              {courseDescription}
            </p>
          </div>

      <div className='w-36 h-36 flex justify-center items-center '><img src={seal} alt="seal" className='w-full h-full object-cover' /></div>

          <div className="flex justify-between items-center max-w-3xl mx-auto  w-full  mb-15">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Agile Pulse Logo" 
                className="w-8 h-8 md:w-12 md:h-12 mr-3 md:mr-4 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className=" absolute z-30 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl items-center justify-center mr-3 md:mr-4 hidden shadow-lg">
                <div className="text-white font-bold text-sm md:text-lg">A</div>
              </div>
              <div>
                <div className="text-[#182955] font-normal text-[10px] md:text-lg">Agile Pulse</div>
                <div className="text-[#182955] text-xs md:text-base">{date}</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-right mr-3 md:mr-4">
                <div className="text-[#182955] font-normal text-sm md:text-lg">Agile Pulse</div>
                <div className="text-[#182955] text-xs md:text-base">{date}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate; 