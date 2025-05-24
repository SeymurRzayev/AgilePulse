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
      className={`${className} mr-[-20px] lg:mr-[-8px]`}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#DEDEDE",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000" />
      </svg>
    </div>
  );
};

const CustomPrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
  return (
    <div
      className={`${className} ml-[-16px] lg:ml-[-4px]`}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#DEDEDE",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000" />
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
    arrows: true,
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
          arrows: true,
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
    <div className="w-[96%] mx-auto mt-20 flex flex-col gap-5 justify-center items-center px-4">
      <div className="w-full font-[Corbel]  flex flex-col items-center gap-3">
        <h2 className="text-center text-lg font-bold md:text-[46px] w-full font-[Corbel]">
          İştirakçıların Təlim Təcrübələri
        </h2>
        <p className="text-lg w-full md:w-2/3 max-w-[542px] font-normal text-center">
          AgilePulse platformasında təlim keçmiş iştirakçılarımızın real
          fikirlərini oxuyun. Onların təcrübələri sizin yolunuzu aydınlada
          bilər.
        </p>
      </div>

      <div className="exp-slider w-full md:w-[100%] mx-auto my-10 flex items-center justify-center">
        <Slider
          {...settings}
          className="w-full mx-auto flex items-center justify-center"
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
