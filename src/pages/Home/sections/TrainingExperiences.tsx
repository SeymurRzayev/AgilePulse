import Slider from "react-slick";
import ExpCard from "../../../components/TrainingExperienceCard/ExpCard";
import img1 from "../../../assets/images/testominal1.webp";

import type { CustomArrowProps } from "react-slick";

export const CustomNextArrow = ({
  className,
  style,
  onClick,
}: CustomArrowProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eee",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 5l8 7-8 7" stroke="#000" strokeWidth="2" />
      </svg>
    </div>
  );
};

const CustomPrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eee",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M16 5l-8 7 8 7" stroke="#000" strokeWidth="2" />
      </svg>
    </div>
  );
};

const TrainingExperiences = () => {
  const data = [
    {
      id: 1,
      img: `${img1}`,
      name: "Nigar Məmmədova",
      subtitle:
        "Agile təlimi mənim üçün tam bir geri dönüş nöqtəsi oldu.Məzmun real iş həyatına uyğun qurulmuşdu.",
      date: "15.03.2025",
    },
    {
      id: 2,
      img: `${img1}`,
      name: "Elvin Quliyev",
      subtitle:
        "Platforma çox peşəkar formada hazırlanıb. Təlimin sonunda  Agile metodologiyasını rahatlıqla tətbiq edə bilirəm.",
      date: "02.04.2025",
    },
    {
      id: 3,
      img: `${img1}`,
      name: "Alice Doe",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, magnam.",
      date: "2022-03-01",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="w-full mt-20 flex flex-col gap-5 justify-center items-center px-4">
      <div className="w-full md:w-2/3 flex flex-col items-center gap-3">
        <h2 className="text-center text-md text-2xl font-bold md:text-2xl w-full font-mbold">
          İştirakçıların Təlim Təcrübələri
        </h2>
        <p className="text-sm w-full md:w-2/3 font-normal text-center">
          AgilePulse platformasında təlim keçmiş iştirakçılarımızın real
          fikirlərini oxuyun. Onların təcrübələri sizin yolunuzu aydınlada
          bilər.
        </p>
      </div>

      <div className="exp-slider w-full md:w-[90%] mx-auto my-10 flex ite justify-center">
        <Slider
          {...settings}
          className="w-full flex px-2 justify-center  items-center"
        >
          {data.map((item) => (
            <ExpCard
              img={item.img}
              subtitle={item.subtitle}
              title={item.name}
              key={item.id}
              date={item.date}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrainingExperiences;
