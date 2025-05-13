import type { FC } from "react";
import styles from "./PodcastsSection.module.css";
import micImg from "../../../../assets/images/mic.png";
import podcast1 from "../../../../assets/images/podcast1.jpg";
import podcast2 from "../../../../assets/images/podcast2.jpg";
import podcast3 from "../../../../assets/images/podcast3.jpg";

const PodcastsSection: FC = () => {
  const podcasts = [
    {
      id: 1,
      image: podcast1,
      name: "Tural Məmmədov",
      desc1: "“Scrum Master yoxsa Project Manager?",
      desc2: "Fərqlər, funksiyalar və real təcrübələr”",
    },
    {
      id: 2,
      image: podcast2,
      name: "Nuray Əhmədova",
      desc1: "Personalın idarə edilməsi",
      desc2: "“Agile yanaşma”",
    },
    {
      id: 3,
      image: podcast3,
      name: "Günel Qasımova",
      desc1: "“Sprint Retrospective: Uğursuz",
      desc2: "sessiyaları necə faydalıya çevirək?”",
    },
  ];

  return (
    <section className={styles.podcastsSection}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h2>Podcastlar</h2>
          <p>
            Teoriyadan praktikaya keçid edən, gündəlik Agile həyatını əks etdirən <br />
            söhbətlər burada səni gözləyir.
          </p>
        </div>
        <div className={styles.bannerImage}>
          <img src={micImg} alt="Mikrofon" />
        </div>
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.cardsWrapper}>
          {podcasts.map((podcast, idx) => (
            <div
              className={`${styles.podcastCard} ${
                idx === 0
                  ? styles.cardUp
                  : idx === 2
                  ? styles.cardDown
                  : ""
              }`}
              key={podcast.id}
            >
              <img className={styles.cardImg} src={podcast.image} alt={podcast.name} />
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
        </div>
        <button className={styles.arrowBtn}>
          <span className={styles.arrowCircle}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#F3F4F6"/>
              <path d="M12 9L16 14L12 19" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default PodcastsSection;