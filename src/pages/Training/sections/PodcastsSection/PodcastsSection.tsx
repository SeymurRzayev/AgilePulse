import type { FC } from "react";
import styles from "./PodcastsSection.module.css";
// Use placeholder images instead of imported images that don't exist
import { useEffect, useState } from "react";

const PodcastsSection: FC = () => {
  // Using placeholder for podcast images since the actual images don't exist
  const [podcastImages, setPodcastImages] = useState<string[]>([]);

  useEffect(() => {
    // Simulating loading of images with placeholders
    setPodcastImages([
      "/api/placeholder/300/200",
      "/api/placeholder/300/200",
      "/api/placeholder/300/200"
    ]);
  }, []);

  const podcasts = [
    {
      id: 1,
      title: "Agile Transformasiya: Nədir və necə həyata keçirilir?",
      image: podcastImages[0],
      duration: "45 dəq",
      date: "12.05.2025"
    },
    {
      id: 2,
      title: "Scrum vs Kanban: Hansı və nə vaxt?",
      image: podcastImages[1],
      duration: "38 dəq",
      date: "28.04.2025"
    },
    {
      id: 3,
      title: "Remote Agile: Uzaq komandalarda Agile metodologiyası",
      image: podcastImages[2],
      duration: "52 dəq",
      date: "15.03.2025"
    }
  ];

  return (
    <div className={styles.podcastsContainer}>
      <div className={styles.header}>
        <h2>Podcastlar</h2>
        <p>Teoriyadan praktikaya keçid edən, gündəlik Agile həyatını əks etdirən söhbətlər burada səni gözləyir.</p>
      </div>

      <div className={styles.podcastsGrid}>
        {podcasts.map(podcast => (
          <div key={podcast.id} className={styles.podcastCard}>
            <div className={styles.imageContainer}>
              <img src={podcast.image} alt={podcast.title} />
              <div className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className={styles.podcastInfo}>
              <h3>{podcast.title}</h3>
              <div className={styles.meta}>
                <span>{podcast.duration}</span>
                <span>{podcast.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastsSection;