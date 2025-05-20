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
            className={`${styles.progressFill} mt-5 `}
            style={{ width: `${progress}%` }}
          />
          <div className={`${styles.trainerInfo} mt-5  flex-col md:flex-row md:justify-start md:items-start`}>
            <div className="flex flex-col md:items-center md:flex-row ">
              <img
                src={scrumTrainer.image}
                alt={scrumTrainer.name}
                className={`${styles.trainerImage}  `}
              />
              <h3 className={`${styles.trainerName} mt-3 md:mt-0 text-2xl md:text-3xl`}>{scrumTrainer.name}</h3>
            </div>
            <div className="flex flex-col justify-center  md:w-[60%]">
              <p className={`${styles.trainerDate} text-xl md:text-2xl`}>{scrumTrainer.date}</p>
              <p className={`${styles.trainerDuration} text-xl md:text-2xl md:[background-size:48.5px_46.4px] [background-size:35.5px_35.4px]`}>{scrumTrainer.time}</p>
              <button className={`${styles.favoriteBtn} w-[45px] md:w-[86px]`}>
                <img className={styles.favorite} src={bookmark} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrumList />
      <div className="w-[70%] mx-auto">
        <TrainingsContactUs />
      </div>
    </>
  );
};

export default ScrumModule;
