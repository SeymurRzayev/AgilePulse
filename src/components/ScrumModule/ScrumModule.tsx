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
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
          <div className={styles.trainerInfo}>
            <div>
              <img
                src={scrumTrainer.image}
                alt={scrumTrainer.name}
                className={styles.trainerImage}
              />
              <h3 className={styles.trainerName}>{scrumTrainer.name}</h3>
            </div>
            <p className={styles.trainerDate}>{scrumTrainer.date}</p>
            <p className={styles.trainerDuration}>{scrumTrainer.time}</p>
            <button className={styles.favoriteBtn}>
              <img className={styles.favorite} src={bookmark} />
            </button>
          </div>
        </div>
      </div>
      <ScrumList />
      <div className="w-[70%] mx-auto">
        <TrainingsContactUs/>
      </div>
    </>
  );
};

export default ScrumModule;
