import bgImage from "../../assets/images/imageForFaq.jpg";
import NavigateArrow from "../../ui/NavigateArrow/NavigateArrow";
import QuestionContainer from "./QuestionContainer";


const Faq = () => {
  return (
    <div className="w-full h-auto">
      <div
        className="w-full h-[282px] bg-no-repeat bg-center  bg-cover bg-clip-content flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 w-full h-[282px]" />
        <div className="absolute left-[40px] top-[20px] cursor-pointer">
          <NavigateArrow />
        </div>
        <div className="w-[500px] h-[44px] absolute ">
          <p
            className="text-white font-bold text-[34px] leading-[44px] tracking-normal"
            style={{ fontFamily: "corbel" }}
          >
            Frequently asked questions
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="w-[1020px] h-[100px] mt-8 ">
          <h1
            className="text-[46px] text-[rgba(0, 0, 0, 0.87)] leading-14 tracking-normal font-bold text-center "
            style={{ fontFamily: "corbel" }}
          >
            Agile Pulse ilə bağlı suallar? Cavablayırıq!
          </h1>
          <p
            className="text-[24px] leading-8 tracking-normal font-normal text-[#646463] text-center"
            style={{ fontFamily: "corbel" }}
          >
            Əgər sualınız varsa, başlamazdan əvvəl bu bölməyə nəzər yetirin –
            bəlkə cavab artıq buradadır!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-[35px]">
        <QuestionContainer question={'Agile Pulse nədir və hansı xidmətləri təqdim edir?'}/>
        <QuestionContainer question={'Agile Pulse təlimləri kimlər üçün uyğundur?'}/>
        <QuestionContainer question={'Agile ilə işləmək şirkətimə nə kimi üstünlüklər qazandıra bilər?'}/>
        <QuestionContainer question={'Scrum və Kanban arasında fərq nədir?'}/>
        <QuestionContainer question={'Agile Pulse ilə necə əlaqə saxlaya bilərəm?'}/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
