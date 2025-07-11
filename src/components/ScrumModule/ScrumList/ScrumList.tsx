import Button from "../../../ui/Button/Button";
import AccordionItem from "../../AccordionItem";
import Slider from "react-slick";
import TrainingCard from "../../Trainings/TrainingCard";
import TrainingExperiences from "../../../pages/Home/sections/TrainingExperiences";
import { useNavigate } from "react-router-dom";
import type { Training } from "../../../types/types";
import { useGetAllTrainingsQuery } from "../../../services/features/trainingPage/trainingsApi";

type ScrumListProps = {
  data: Training | undefined;
}

const ScrumList = ({ data }: ScrumListProps) => {

  const {data: allTrainings} = useGetAllTrainingsQuery()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,
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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/quiz/${data?.id}`);
  };

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className=" flex flex-col gap-[60px] font-corbel">
          {
            data?.modules?.map((mod) => (
              <div key={mod.id} className="flex flex-col gap-y-[5px]">
                <h2 className="text-2xl font-bold">{mod.title}</h2>
                {mod.lessons.map((lesson) => (
                  <AccordionItem key={lesson.id} moduleTitle={mod.title} lessonTitle={lesson.title} contentHtml={lesson.contentHtml} />
                ))}
              </div>
            ))
          }
          <Button
            onClick={handleClick}
            title="Tapşırıq və quiz"
            className="self-center !font-medium !font-[Montserrat] bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]"
          />
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-25">
        <h2 className="text-center">İstifadəçilər bu təlimləri də keçdilər </h2>
        <div className="w-full  gap-8 mx-auto pt-2 items-center flex-col md:flex-row ">
          <Slider {...settings} className="">
            {
              allTrainings?.map(item => (
                <div key={item.id} className='px-3 py-3'>
                  <TrainingCard
                    id={item.id}
                    isCurveBig={true}
                    className={'w-[325px] md:w-[381px] h-[621px]'}
                    imgUrl={item.imageUrl}
                    date={item.publishedAt}
                    avatar={item.authorAvatarUrl}
                    title={item.title}
                    lessonCount={item.modules?.reduce((total, mod) => total + mod.lessons.length, 0)}
                    isArticle={false}
                    user={item.authorName}
                    isCourse={true}
                    time={item.modules?.length}
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
