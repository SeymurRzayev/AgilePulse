import circleClose from "../../assets/images/circleClose.svg";

interface QuestionContainerProps {
  question: string;
  openAnswer: () => void;
}

const QuestionContainer: React.FC<QuestionContainerProps> = ({
  question,
  openAnswer,
}) => {
  return (
    <div
      className="w-[95%] max-w-[900px]  rounded-[15px] flex justify-end items-center relative mx-auto overflow-hidden m-1"
      style={{
        boxShadow: "-1px 10px 26px -8px rgba(0,0,0,0.2)",
         background: 'linear-gradient(90deg, rgba(40, 68, 141, 1) 2.5%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      {/* Ağ div: sağ radius var, sol radius yoxdur */}
      <div
        className="w-[97.5%] bg-white rounded-r-[15px]  h-full py-6 pl-6 ml-1 pr-[60px]"
        style={{
          boxShadow: "4px 4px 12px 5px rgba(0, 0, 0, 0.09)",
        }}
      >
        <p className="font-bold text-base sm:text-base md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 text-[#2C4B9B] font-corbel">
          {question}
        </p>
      </div>

      {/* Dairə klik üçün */}
      <div
        onClick={openAnswer}
        className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] absolute right-3 flex justify-center items-center z-10 cursor-pointer"
      >
        <img
          src={circleClose}
          alt="Cavabı oxu"
          className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[39px] md:h-[39px]"
        />
      </div>
    </div>
  );
};

export default QuestionContainer;
