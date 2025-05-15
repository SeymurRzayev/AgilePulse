import type { FC } from "react";
import styles from "./PodcastsSection.module.css";
import micImg from "../../../../assets/images/mic.png";
import podcast1 from "../../../../assets/images/podcast1.jpg";
import podcast2 from "../../../../assets/images/podcast2.jpg";
import podcast3 from "../../../../assets/images/podcast3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import right from "../../../../assets/icons/right.png";

const PodcastsSection: FC = () => {
  const podcasts = [
    {
      id: 1,
      image: podcast1,
      name: "Tural Mammadov",
      desc1: "“Scrum Master yoxsa Project Manager?",
      desc2: "Fərqlər, funksiyalar və real təcrübələr”",
    },
    {
      id: 2,
      image: podcast2,
      name: "Nuray Əhmədova",
      desc1: "Personalin idarə edilməsi",
      desc2: "“Agile yanaşma”",
    },
    {
      id: 3,
      image: podcast3,
      name: "Günel Qasımova",
      desc1: "“Sprint Retrospective: Uğursuz",
      desc2: "sessiyaları necə faydalıya çevirək?”",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <img src={right} alt="Next" className={styles.nextArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.podcastsSection}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h2>Podcastlar</h2>
          <p>
            Teoriyadan praktikaya keçid edən, gündəlik Agile həyatını əks etdirən
            söhbətlər burada səni gözləyir.
          </p>
        </div>
        <div className={styles.bannerImage}>
          <img src={micImg} alt="Mikrofon" />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slider}>
          {podcasts.map((podcast) => (
            <div key={podcast.id} className={styles.podcastCard}>
              <img
                className={styles.cardImg}
                src={podcast.image}
                alt={podcast.name}
              />
              <div className={styles.cardInfo}>
                <div className={styles.cardName}>{podcast.name}</div>
                <div className={styles.cardDesc}>
                  {podcast.desc1}
                  <br />
                  {podcast.desc2}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PodcastsSection;