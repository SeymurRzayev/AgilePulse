import Button from "../../../ui/Button/Button";
import AccordionItem from "../../AccordionItem";
import { dummyMock } from "../../../dummyMock";
import Slider from "react-slick";
import TrainingCard from "../../Trainings/TrainingCard";
import TrainingExperiences from "../../../pages/Home/sections/TrainingExperiences";


const ScrumList = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  }


  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className=" flex flex-col gap-[60px] font-corbel">
          <div className="flex flex-col gap-y-[5px]">
            <h2 className="">Modul 1. Scrum-a giriş</h2>
            <AccordionItem content="Agile nədir? (Agile Manifesto və prinsipləri)" />
            <AccordionItem content="Scrum nədir və nə üçün istifadə olunur?" />
            <AccordionItem content="Scrum və digər Ağile metodologiyalar (Kanban, XP ilə müqayisə)" />
            <AccordionItem content="Scrum-un əsas dəyərləri və prinsipləri" />
          </div>
          <div className="flex flex-col">
            <h2>Modul 2. Scrum Rolları</h2>
            <AccordionItem content="Product Owner (Məhsul Sahibi): vəzifə və məsuliyyətlər" />
            <AccordionItem content="Scrum Master: fasilitator rolu və qarşılıqlı əlaqələr" />
            <AccordionItem content="Development Team: funksiyalar, xüsusiyyətlər və özünüidarə" />
          </div>
          <div className="flex flex-col">
            <h2>Modul 3. Scrum Artifacts (Əsas sənədlər)</h2>
            <AccordionItem content="Product Backlog (Məhsul Siyahısı)" />
            <AccordionItem content="Sprint Backlog (Sprint Siyahısı)" />
            <AccordionItem content="Increment (Artım)" />
            <AccordionItem content="Definition of Done (Tamamlanma tərifi)" />
          </div>
          <div className="flex flex-col">
            <h2>Modul 4. Scrum Hadisələri (Events)</h2>
            <AccordionItem content="Sprint: zaman çərçivəsi və planlama" />
            <AccordionItem content="Sprint Planning: məqsdin və tapşırıqların müəyyənləşdirilməsi" />
            <AccordionItem content="Daily Scrum (Gündəlik görüşlər): gündəlik koordinasiya" />
            <AccordionItem content="Sprint Review: geribildirim və uyğunlaşdırma" />
            <AccordionItem content="Sprint Retrospective: təkmilləşdirmə fürsətləri" />
          </div>
          <Button title="Tapşırıq və quiz" className="self-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]" />

        </div>
      </div>

      <div className="w-[95%] mx-auto mt-25">
        <h2 className="text-center">İstifadəçilər bu təlimləri də keçdilər </h2>
        <div className="w-full gap-8 mx-auto pt-2 items-center flex-col md:flex-row">
          <Slider {...settings}>
            {
              dummyMock.map(item => (
                <div className='px-3 py-3'>
                  <TrainingCard
                    imgUrl={item.imgUrl}
                    date={item.date}
                    avatar={item.profileImgUrl}
                    title={item.title}
                    isArticle={false}
                    user={item.author}
                    time="4 modul : 16 blok"
                  />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
      <TrainingExperiences />
    </>

  );
};

export default ScrumList;
