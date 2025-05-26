import { useState } from "react";
import bgImage from "../../assets/images/imageForFaq.jpg";
import TrainingsContactUs from "../../components/Trainings/TrainingsContactUs";
import NavigateArrow from "../../ui/NavigateArrow/NavigateArrow";
import QuestionContainer from "./QuestionContainer";
import AnswerContainer from "./AnswerContainer";

const faqData = [
  {
    question: "Agile Pulse nədir və hansı xidmətləri təqdim edir?",
    answer:
      "Agile Pulse çevik (Agile) idarəetmə yanaşmalarını tətbiq edən və komandaların daha məhsuldar işləməsinə dəstək olan bir platformadır. Biz təlimlər, Agile kouçinq, Scrum və Kanban sistemlərinin tətbiqi üzrə məsləhət xidmətləri göstəririk.",
  },
  {
    question: "Agile təlimləri kimlər üçündür?",
    answer:
      "Agile təlimləri məhsul sahibləri, layihə menecerləri və çevik komandalar üçün nəzərdə tutulub.",
  },
  {
    question:
      "Agile ilə işləmək şirkətimə nə kimi üstünlüklər qazandıra bilər?",
    answer:
      " Agile sayəsində məhsul və ya xidmət mərhələli şəkildə inkişaf etdirilir. Bu, nəticələri daha tez görməyə və erkən mərhələdə müştəri rəyinə əsasən dəyişiklik etməyə imkan verir.",
  },
  {
    question: "Scrum və Kanban arasında fərq nədir?",
    answer:
      "Scrum işi sabit vaxt çərçivələrində (sprintlərdə) planlayır və konkret rollar üzərindən idarə edir, Kanban isə fasiləsiz iş axını və tapşırıq sayına limit qoymaqla çevik idarəetmə təklif edir. Əsas fərq Scrum-un strukturlaşdırılmış, Kanban-ın isə daha elastik olmasıdır.",
  },
  {
    question: "Agile Pulse ilə necə əlaqə saxlaya bilərəm?",
    answer:
      "Agile Pulse ilə əlaqə saxlamaq üçün veb saytımızdakı “Əlaqə” bölməsindən bizə mesaj göndərə və ya sosial media hesablarımız vasitəsilə birbaşa yazışa bilərsiniz. Əlavə olaraq, təlim və xidmətlərimizlə bağlı suallar üçün e-poçt və telefon vasitəsilə də bizimlə əlaqə saxlaya bilərsiniz.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[170px] md:h-[282px] bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 w-full h-full" />
        <div className="absolute left-5 top-5 cursor-pointer">
          <NavigateArrow />
        </div>
        <div className="w-[90%] md:w-[500px] text-center z-10">
          <p className="text-white font-bold text-2xl md:text-[34px] leading-snug md:leading-[44px] tracking-normal font-corbel">
            Frequently asked questions
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-16 px-4 md:px-0">
        <div className="w-full max-w-[1020px] text-center mt-8 flex flex-col gap-3">
          <h1 className="text-[30px] md:text-[46px] text-[rgba(0,0,0,0.87)] leading-snug md:leading-[56px] tracking-normal font-bold font-corbel">
            Agile Pulse ilə bağlı suallar? Cavablayırıq!
          </h1>
          <p className="text-lg md:text-[24px] leading-7 md:leading-8 tracking-normal font-normal text-[#646463] font-corbel">
            Əgər sualınız varsa, başlamazdan əvvəl bu bölməyə nəzər yetirin –
            bəlkə cavab artıq buradadır!
          </p>
        </div>

        <div className="w-full max-w-[1020px] flex flex-col justify-center gap-[35px]">
          {faqData.map((item, index) =>
            openIndex === index ? (
              <div
                key={index}
                className={`transition-all duration-1700 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <AnswerContainer
                  question={item.question}
                  answer={item.answer}
                  closeAnswer={() => setOpenIndex(null)}
                />
              </div>
            ) : (
              <QuestionContainer
                key={index}
                question={item.question}
                openAnswer={() => setOpenIndex(index)}
              />
            )
          )}
        </div>
        {/* contact us section */}
        <div className="w-full max-w-[1020px]">
          <TrainingsContactUs />
        </div>
      </div>
    </div>
  );
};

export default Faq;
