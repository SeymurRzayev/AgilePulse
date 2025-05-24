import circlePluse from "../../assets/images/circlePluse.svg";

interface QuestionContainerProps {
  question: string;
}

const QuestionContainer:React.FC<QuestionContainerProps> = ({ question }) => {
  return (
    <div
      className="w-[900px] h-[84px] bg-[#28448D] rounded-[15px] flex flex-row justify-end items-center relative "
      style={{ boxShadow: "8px 7px 12px 10px rgba(0, 0, 0, 0.8)" }}
    >
      <div className="w-[880px] h-[84px] bg-white rounded-r-[15px] style={{boxShadow:'4px 4px 12px 5px rgba(0, 0, 0, 0.09)'}} ">
        <p className="font-bold text-2xl leading-8 tracking-normal text-[#2C4B9B] pt-6 pl-9">
          {question}
        </p>
      </div>
      <div className="w-[52px] h-[52px] absolute z-10 pt-1.5">
        <img src={circlePluse} alt="Cavabı oxu" className="w-[40px] h-[40px]" />
      </div>
    </div>
  );
};
export default QuestionContainer;
