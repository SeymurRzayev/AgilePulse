import { type FC } from "react";
import { useGetAllPartnersQuery } from "../../../services/features/partner";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

const PartnersSection: FC = () => {
  const { data: allPartnersResponse } = useGetAllPartnersQuery();
  const allPartners = allPartnersResponse?.data.data || [];

  // ilk 6 logo: ilk slider (üst sıra)
  const firstRow = allPartners.slice(0, Math.ceil(allPartners.length / 2));
  // qalan logo: ikinci slider (alt sıra)
  const secondRow = allPartners.slice(Math.ceil(allPartners.length / 2));

  return (
    <section className="font-[Corbel] partnersSection py-12 flex flex-col gap-16">
      <div className="textSection text-center">
        <h2 className="font-bold mb-2 md:mb-4 text-lg md:text-[56px]">Partnyorlar</h2>
        <p className="text-sm md:text-lg w-5/6 mx-auto">
          AgilePulse olaraq əməkdaşlıq etdiyimiz şirkətlər və təşkilatlarla
          birgə dəyər yaratmaqdan qürur duyuruq.
        </p>
      </div>
      {/* <div className=" max-w-4xl mx-auto  grid grid-cols-3 gap-4  md:gap-12 ">
        
      </div> */}
      <div className="flex flex-col w-full gap-10 max-w-4xl md:mx-auto">
        {/* 1-ci sıra - soldan sağa */}
        <Slider {...settings}>
          {firstRow.map((item, index) => (
            <div key={index} className="px-2 md:px-4 ">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-[225px]  w-[208px] mx-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>

        {/* 2-ci sıra - sağdan sola */}
        <Slider {...{ ...settings, rtl: true }}>
          {secondRow.map((item, index) => (
            <div key={index} className="px-4 ">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-[225px]  w-[208px]  mx-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSection;
