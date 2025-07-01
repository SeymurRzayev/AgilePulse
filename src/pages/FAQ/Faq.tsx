import { useState } from "react";
import bgImage from "../../assets/images/FAQSectionImg.jpg";
import TrainingsContactUs from "../../components/Trainings/TrainingsContactUs";
import NavigateArrow from "../../ui/NavigateArrow/NavigateArrow";
import QuestionContainer from "./QuestionContainer";
import AnswerContainer from "./AnswerContainer";
import { useGetAllFaqsQuery } from "../../services/features/mainPage/faqApi";
import ShowMoreBtn from "../../components/Butttons/ShowMoreBtn";

const Faq: React.FC = () => {
  const [visibility, setVisibility] = useState(5)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data: allFaqsResponse } = useGetAllFaqsQuery()

  if (!allFaqsResponse) return null;

  const allFaqs = allFaqsResponse?.data.data
  const slicesFaqs = allFaqs.slice(0, visibility)
  return (
    <div className="w-full">
      <div
        className="relative w-full h-[170px] md:h-[282px] bg-no-repeat  bg-bottom flex justify-center items-center bg-[length:110%_105%]"
        style={{ backgroundImage: `url(${bgImage})`, }}
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

      <div className="flex flex-col justify-center items-center gap-16 px-4 md:px-1">
        <div className="w-full max-w-[1020px] text-center mt-8 flex flex-col gap-3">
          <h1 className="text-[25px] md:text-[46px] text-[rgba(0,0,0,0.87)] leading-snug md:leading-[56px] tracking-normal font-bold font-corbel p-1 md:p-2">
            Agile Pulse ilə bağlı suallar? Cavablayırıq!
          </h1>
          <p className="text-[18px] md:text-2xl leading-7 md:leading-8 tracking-normal font-normal text-[#646463] font-corbel p-2">
            Əgər sualınız varsa, başlamazdan əvvəl bu bölməyə nəzər yetirin –
            bəlkə cavab artıq buradadır!
          </p>
        </div>

        <div className="w-full max-w-[1020px] flex flex-col justify-center gap-[35px]">
          {slicesFaqs?.map((item, index) =>
            openIndex === index ? (
              <div
                key={index}
                className={`transition-all duration-1700 ease-in-out ${openIndex === index
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
        {allFaqs?.length > 5 && (
          visibility >= allFaqs.length
            ? (
              <div className="w-full text-center">
                <ShowMoreBtn text='Daha az göstər' onClick={() => setVisibility(5)} />
              </div>
            )
            : (
              <div className="w-full text-center">
                <ShowMoreBtn text='Daha çox göstər' onClick={() => setVisibility(prev => prev + 5)} />
              </div>
            )
        )
        }
        {/* contact us section */}
        <div className="w-full max-w-[1020px]">
          <TrainingsContactUs />
        </div>
      </div>
    </div>
  );
};

export default Faq;
