import type { FC } from "react";
import img1 from "../../../assets/images/book_1.png";
import img2 from "../../../assets/images/book_2.png";
import img3 from "../../../assets/images/book_3.png";
import img4 from "../../../assets/images/book_4.png";
import img5 from "../../../assets/images/book_5.png";
import img6 from "../../../assets/images/book_6.png";

const PartnersSection: FC = () => {
  return (
    <section className="partnersSection py-12 flex flex-col gap-24">
      <div className="textSection">
        <h2 className="text-center  font-bold mb-2 md:mb-4 text-lg md:text-[56px]">
          Partnyorlar
        </h2>
        <p className="text-center text-sm md:text-lg w-5/6 mx-auto">
          AgilePulse olaraq əməkdaşlıq etdiyimiz şirkətlər və təşkilatlarla
          birgə dəyər yaratmaqdan qürur duyuruq.
        </p>
      </div>

      <div className=" max-w-4xl mx-auto  grid grid-cols-3 gap-4  md:gap-12 ">
        {[img1, img2, img3, img4, img5, img6].map((item, index) => (
          <img
            src={item}
            alt=""
            className="h-24 md:h-56 w-full object-cover rounded-lg"
            key={index}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
