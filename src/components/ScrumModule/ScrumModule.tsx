import type { FC } from "react";
import styles from "./ScrumModule.module.css";
import bookmark from "../../assets/icons/bookmark.svg";
import nigarPhoto from "../../assets/images/nigar photo.png";
import ScrumList from "./ScrumList/ScrumList";
import TrainingsContactUs from "../Trainings/TrainingsContactUs";

interface Scrum {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

const ScrumModule: FC = () => {
  const scrumTrainer: Scrum = {
    id: 1,
    name: "Səadət Hüseynova",
    date: "12.04.2025",
    time: "4 saat 35 dəqiqə",
    image: nigarPhoto,
  };

  const progress = 14.5;
  return (
    <>
      <div className={`${styles.moduleWrapper}`}>
        <div className={styles.progressBar}>
          <span
            className={`${styles.progressFill} mt-5`}
            style={{ width: `${progress}%` }}
          />
          <div className={`${styles.trainerInfo} mt-5`}>
            <div className={styles.trainerMainInfo}>
              <img
                src={scrumTrainer.image}
                alt={scrumTrainer.name}
                className={`${styles.trainerImage}`}
              />
              <h3 className={`${styles.trainerName}`}>{scrumTrainer.name}</h3>
            </div>
            <div className={styles.trainerDetails}>
              <p className={`${styles.trainerDate}`}>{scrumTrainer.date}</p>
              <p className={`${styles.trainerDuration}`}>{scrumTrainer.time}</p>
              <button className={`${styles.favoriteBtn}`}>
                <img className={styles.favorite} src={bookmark} alt="bookmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrumList />
      <div className={styles.contactWrapper}>
        <TrainingsContactUs />
      </div>
    </>
  );
};

export default ScrumModule;