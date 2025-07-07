import type { FC } from "react";
import image1 from "../../assets/images/aboutInfo1.webp";
import image2 from "../../assets/images/aboutInfo2.webp";

const Hero: FC = () => {
  return (
    <div
      className="mx-2 lg:mx-10 my-16 rounded-[30px] rounded-br-[160px] p-7 flex flex-col lg:flex-row gap-12 items-end lg:items-center "
      style={{
        background: `linear-gradient(270.67deg, rgba(251, 249, 247, 0) 0.64%, #FBF9F7 99.55%),linear-gradient(262.77deg, rgba(231, 145, 43, 0.8) -26.17%, rgba(216, 61, 105, 0.8) 32.74%, rgba(44, 75, 155, 0.8) 90.53%)
         `,
      }}
    >
      <div className="flex flex-col gap-7 w-full">
        <h2 className="font-bold text-[46px] leading-[56px] text-[#000000DE]">
          Biz kimik?
        </h2>
        <div className="flex flex-col gap-4  font-bold text-sm 2xl:text-lg leading-[20px] text-[#00000099]">
          <p>
            Agile Pulse — çevik yanaşma (Agile) fəlsəfəsini mərkəzə alan,
            innovasiya və davamlı inkişaf prinsipləri üzərində qurulmuş
            çoxşaxəli bir platformadır. Bizim məqsədimiz yalnız bilik paylaşmaq
            deyil, həm də təşkilatlarda çevik düşüncə tərzini formalaşdırmaq,
            komandaların daha məhsuldar və məqsədyönlü fəaliyyət göstərməsinə
            dəstək olmaqdır.
          </p>
          <p>
            Platformamız özündə Agile metodologiyası üzrə fundamental və tətbiqi
            bilikləri ehtiva etməklə yanaşı, Agile Akademiya vasitəsilə geniş
            spektrli təlimlər təqdim edir. Bu təlimlərə Backend, Frontend, UX/UI
            dizayn, Biznes Analitika, Scrum Master və Product Owner kimi bir çox
            sahələr daxildir. Akademiyamız, iştirakçıların real iş mühitinə
            uyğun bacarıqlar qazanmasına və əmək bazarında rəqabətə davamlı
            olmasına yönəlib.
          </p>
          <p>
            Bundan əlavə, ESG (Ətraf mühit, Sosial məsuliyyət və Korporativ
            idarəetmə) standartlarının təbliği də fəaliyyətimizin əsas
            istiqamətlərindəndir. İnanırıq ki, bu prinsiplər dayanıqlı və
            məsuliyyətli biznes mühitinin formalaşmasında mühüm rol oynayır.
          </p>
          <p>
            Agile Pulse həm fərdlər, həm də şirkətlər üçün dəyər yaradır. Biz
            təşkilatlarda innovativ komanda quruculuğu, proseslərin
            optimallaşdırılması və çevik iş mühiti formalaşdırılması
            istiqamətində məsləhət və dəstək xidmətləri göstəririk.
          </p>
          <p>
            Bizimlə birgə gələcəyin çevik və dayanıqlı dünyasını qurmağa
            hazırsınız?
          </p>
        </div>
      </div>
      <div className="w-full  flex flex-col gap-5 md:min-h-[484px] lg:min-w-[484px] lg:min-h-[484px] lg:max-w-[484px] lg:max-h-[484px] relative">
        <img
          className="w-full md:w-[484px]  lg:w-[323px] lg:h-[323px] md:absolute top-0 left-0 object-cover rounded-[15px] rounded-tl-[160px] "
          src={image1}
          alt=""
        />
        <img
          className="w-full md:w-[484px]  lg:w-[323px] lg:h-[323px] md:absolute bottom-0 right-0 object-cover rounded-[15px] rounded-br-[160px]"
          src={image2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
