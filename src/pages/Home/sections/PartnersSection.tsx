import { type FC } from "react";
import { useGetAllPartnersQuery } from "../../../services/features/partnerApi";
import Slider from "react-slick";



const PartnersSection: FC = () => {
  const { data: allPartnersResponse } = useGetAllPartnersQuery();
  const allPartners = allPartnersResponse?.data.data || [];

  const shouldShowSecondSlider = allPartners.length > 3;
  const reversedPartners = [...allPartners].reverse();

  const isStaticSlider = allPartners.length < 3;

  const settings = {
    dots: false,
    infinite: isStaticSlider ? false : true,
    slidesToShow: isStaticSlider ? allPartners.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: isStaticSlider ? allPartners.length : 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: isStaticSlider ? allPartners.length : 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  console.log("set", settings)

  return (
    <section className="font-[Corbel] partnersSection py-12 flex flex-col gap-16">
      <div className="textSection text-center">
        <h2 className="font-bold mb-2 md:mb-4 text-lg md:text-[56px]">Partnyorlar</h2>
        <p className="text-sm md:text-lg w-5/6 mx-auto">
          AgilePulse olaraq əməkdaşlıq etdiyimiz şirkətlər və təşkilatlarla
          birgə dəyər yaratmaqdan qürur duyuruq.
        </p>
      </div>

      <div className="flex flex-col w-full gap-10 max-w-4xl md:mx-auto">
        {/* 1-ci sıra - normal sıra */}
        <Slider {...settings}>
          {allPartners.map((item, index) => (
            <div key={index} className="px-2 md:px-4 ">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-[225px] w-[208px] mx-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>

        {/* 2-ci sıra - yalnız 3-dən çox olduqda göstərilir */}
        {shouldShowSecondSlider && (
          <Slider {...{ ...settings, rtl: true }}>
            {reversedPartners.map((item, index) => (
              <div key={index} className="px-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-[225px] w-[208px] mx-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
