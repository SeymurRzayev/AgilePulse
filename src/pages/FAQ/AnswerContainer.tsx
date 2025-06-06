import circleOpen from "../../assets/images/CircleOpen.svg";

interface AnswerContainerProps {
  question: string;
  answer: string;
  closeAnswer: () => void;
}

const AnswerContainer: React.FC<AnswerContainerProps> = ({
  question,
  answer,
  closeAnswer,
}) => {
  return (
    <div
      className="w-[95%] max-w-[900px] rounded-[15px] flex flex-col items-end relative mx-auto"
      style={{
        boxShadow: "-1px 10px 26px -8px rgba(0,0,0,0.2)",
        background: 'linear-gradient(90deg, rgba(40, 68, 141, 1) 2.5%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      <div
        className="w-[97.5%] h-[84px] bg-white flex justify-between items-center rounded-tr-[15px]"
      >
        <div >
          <p className="font-bold text-center text-base sm:text-[18px] sm:text-wrap md:text-xl lg:text-2xl leading-6 sm:leading-5 md:leading-8 tracking-normal text-[#2C4B9B] pl-4 sm:pl-8 sm:pr-2.5 md:pl-9 font-corbel">
            {question}
          </p>
        </div>
        <div
          onClick={closeAnswer}
          className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] flex justify-center items-center mr-3 p-1 sm:p-2 cursor-pointer"
        >
          <img
            src={circleOpen}
            alt="bağla"
            className="w-[28px] h-[28px] p-0.5 sm:w-[34px] sm:h-[34px] md:w-[39px] md:h-[39px]"
          />
        </div>
      </div>

      <div
        className="bg-[#EAEDF5] w-[97.5%] h-auto rounded-br-[15px] p-1"
      >
        <p className="font-normal  sm:text-[14px] md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 tracking-normal text-[#5E5F62] pl-4 sm:pl-2 md:pl-9 pt-2 sm:py-3 font-corbel break-words">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AnswerContainer;
