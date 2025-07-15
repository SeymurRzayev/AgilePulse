import type { FC } from "react";
import styles from "./PodcastsSection.module.css";
import micImg from "../../../../assets/images/mic.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow } from "../../../Home/sections/TrainingExperiences";
import { useGetAllPodcastQuery } from "../../../../services/features/trainingPage/podcastApi";
import MainButton from "../../../../components/Butttons/MainButton";

const PodcastsSection: FC = () => {
  const { data } = useGetAllPodcastQuery();

  const allPodcast = data?.data.data;

  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
            Teoriyadan praktikaya keçid edən, gündəlik Agile həyatını əks
            etdirən söhbətlər burada səni gözləyir.
          </p>
        </div>
        <div className={styles.bannerImage}>
          <img src={micImg} alt="Mikrofon" loading="lazy" />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slider}>
          {allPodcast?.map((podcast) => (
            <div
              onClick={() => window.open(podcast.youtubeUrl, "_blank")}
              key={podcast.id}
              className={styles.podcastCard}
            >
              <div className="w-full h-[230px] relative rounded-[30px] group">
                <img
                  className={styles.cardImg}
                  src={podcast.imageUrl}
                  alt={podcast.speakerName}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#00000084] z-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-all duration-500 " />
                <MainButton
                  onClick={() => window.open(podcast.youtubeUrl, "_blank")}
                  className="relative w-[156px] h-10 inset-x-0 z-10 bottom-[55%] left-[20%]"
                  buttonClassName="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  text="Linkə keçid et"
                />
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.cardName}>{podcast.speakerName}</div>
                <div className={styles.cardDesc}>
                  {podcast.topicTitle}
                  <br />
                  {podcast.description}
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
