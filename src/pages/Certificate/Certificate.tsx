import React from 'react';

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl aspect-[4/3] bg-white shadow-2xl overflow-hidden border border-gray-200 rounded-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-pink-400 via-red-400 to-orange-400 rounded-full opacity-85"></div>
          
          <div className="absolute -top-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-bl from-purple-200 via-purple-100 to-transparent rounded-full opacity-60"></div>
          <div className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 bg-purple-200 rounded-full opacity-40"></div>
          
          <div className="absolute -bottom-40 -right-40 w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] bg-gradient-to-tl from-purple-500 via-pink-500 to-red-400 rounded-full opacity-75"></div>
          
          <div className="absolute -bottom-24 -left-24 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-tr from-purple-300 via-purple-200 to-transparent rounded-full opacity-50"></div>
          
          <div className="absolute top-0 right-0 w-20 md:w-24 h-0.5 bg-gray-500"></div>
          <div className="absolute top-0 right-0 w-0.5 h-20 md:h-24 bg-gray-500"></div>
          <div className="absolute bottom-0 left-0 w-20 md:w-24 h-0.5 bg-gray-500"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-20 md:h-24 bg-gray-500"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 py-8 md:px-12 md:py-12">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-700 tracking-[0.15em] mb-2">
              CERTIFICATE
            </h1>
            <div className="w-20 md:w-32 lg:w-36 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-700 italic tracking-wide">
              {studentName}
            </h2>
          </div>

          <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
              {courseDescription}
            </p>
          </div>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl border-3 border-yellow-600">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center border-2 border-yellow-800 relative">
                  <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 text-yellow-800 text-xs">★</div>
                  <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 text-yellow-800 text-xs">★</div>
                  <div className="absolute left-0.5 top-1/2 transform -translate-y-1/2 text-yellow-800 text-xs">★</div>
                  <div className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-yellow-800 text-xs">★</div>
                  
                  <div className="text-center">
                    <div className="text-yellow-900 font-bold text-xs md:text-sm leading-tight">
                      Agile
                    </div>
                    <div className="text-yellow-900 font-bold text-xs md:text-sm leading-tight">
                      Pulse
                    </div>
                    <div className="w-3 md:w-6 h-0.5 bg-yellow-900 mx-auto my-0.5"></div>
                    <div className="text-yellow-900 font-semibold text-xs">
                      SEAL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg mx-auto h-0.5 bg-gray-400 mb-6 md:mb-8"></div>

          <div className="flex justify-between items-center max-w-2xl mx-auto w-full px-8">
            <div className="flex items-center">
              <img 
                src="/src/assets/icons/logo.png" 
                alt="Agile Pulse Logo" 
                className="w-8 h-8 md:w-12 md:h-12 mr-3 md:mr-4 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl items-center justify-center mr-3 md:mr-4 hidden shadow-lg">
                <div className="text-white font-bold text-sm md:text-lg">A</div>
              </div>
              <div>
                <div className="text-gray-800 font-semibold text-sm md:text-lg">Agile Pulse</div>
                <div className="text-gray-600 text-xs md:text-base">{date}</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-right mr-3 md:mr-4">
                <div className="text-gray-800 font-semibold text-sm md:text-lg">Agile Pulse</div>
                <div className="text-gray-600 text-xs md:text-base">{date}</div>
              </div>
              <img 
                src="/src/assets/icons/logo.png" 
                alt="Agile Pulse Logo" 
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl items-center justify-center shadow-lg hidden">
                <div className="text-white font-bold text-sm md:text-lg">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;