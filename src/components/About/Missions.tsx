import type { FC } from "react";
import { useState, useEffect } from "react";
import img1 from "../../assets/images/mission1.webp";
import img2 from "../../assets/images/mission2.webp";
import img3 from "../../assets/images/mission3.webp";
import img4 from "../../assets/images/mission4.webp";

const Missions: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    {
      header: "Missiyamız",
      text: "Ölkəmizdə agile sahəsində maarifləndirici görüşlər keçirmək, konfranslar təşkil etmək, komandalara və müştəriyönümlü şirkətlərə Agile dəyərləri aşılayaraq daha məhsuldar olmalarına kömək etməkdir.",
    },
    {
      header: "Vizyonumuz",
      text: "Azərbaycanda agile metodologiyalarının düzgün başa düşülməsinə və yayılmasına dəstək verərək, təşkilatların və komandaların çevik, effektiv və innovativ olmalarına kömək etməkdir. Hədəfimiz, ölkəmizdə çevik yanaşmaların tətbiqi ilə məhsuldarlığı və iş keyfiyyətini artırmaq və bu sahədə əməkdaşlıq qurmaqdır.",
    },
    {
      header: "Hədəfimiz",
      text: "Ölkəmizdə çevik yanaşmaların tətbiqi ilə məhsuldarlığı və iş keyfiyyətini artırmaq və bu sahədə əməkdaşlıq qurmaqdır. Bundan əlavə Agile dəyərlərin tətbiqində şirkət və komandalara dəstək olmaq, Agile rolların inkişafına və öyrədilməsində iştirak etməkdir",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 w-[90%] mx-auto my-26 md:my-6 lg:my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* left img cnt */}
        <div className="flex flex-col gap-6 ">
          <img
            className=" w-[230px] object-cover h-[328px] rounded-[80px] rounded-br-none"
            src={img1}
            alt="missions"
          />
          <img
            src={img2}
            className="w-[230px] object-cover rounded-[50px] rounded-bl-none"
            alt="missions"
          />
        </div>

        {/* right img cnt */}
        <div className="flex flex-col gap-6">
          <img
            src={img3}
            className="w-[230px] object-cover h-[230px] rounded-full"
            alt="missions"
          />
          <img
            src={img4}
            className="w-[230px] object-cover h-[328px] rounded-[80px] rounded-tl-none"
            alt="missions"
          />
        </div>
      </div>

      {/* text div */}
      <div className=" w-full flex items-center justify-end">
        <div className="flex flex-col gap-12 ml-0 lg:ml-[90px] relative min-h-[300px] w-full">
          {content.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="font-bold text-[46px] leading-[56px] text-[#000000DE]">
                {item.header}
              </h2>
              <p className="text-[#00000099] text-[22px] leading-[28px] font-bold mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;
