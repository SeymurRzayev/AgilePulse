import type { FC } from "react";
import styles from "./ScrumModule.module.css";
import bookmark from "../../assets/icons/bookmark.svg";
import ScrumList from "./ScrumList/ScrumList";
import TrainingsContactUs from "../Trainings/TrainingsContactUs";
import { useGetTrainingByIdQuery } from "../../services/features/trainingPage/trainingsApi";
import { useParams } from "react-router-dom";

const ScrumModule: FC = () => {
  const params = useParams()
  const id = params.id

  const { data: scrumTrainer } = useGetTrainingByIdQuery(Number(id));

  const progress = 14.5;
  // console.log(scrumTrainer)

  return (
    <>
      <h2 className="w-[80%] mx-auto ">{scrumTrainer?.title}</h2>

      <div className={`${styles.moduleWrapper}`}>
        <div className={styles.progressBar}>
          <span
            className={`${styles.progressFill} mt-5 `}
            style={{ width: `${progress}%` }}
          />
          <div className={`${styles.trainerInfo} mt-5  flex-col md:flex-row md:justify-start md:items-start`}>
            <div className="flex flex-col md:items-center md:flex-row ">
              <img
                src={scrumTrainer?.authorAvatarUrl}
                alt={scrumTrainer?.authorName}
                className={`${styles.trainerImage}  `}
              />
              <h3 className={`${styles.trainerName} mt-3 md:mt-0 text-2xl md:text-3xl`}>{scrumTrainer?.authorName}</h3>
            </div>
            <div className="flex flex-col justify-center  md:w-[60%]">
              <p className={`${styles.trainerDate} text-xl md:text-2xl`}>{scrumTrainer?.publishedAt}</p>
              <p className={`${styles.trainerDuration} text-xl md:text-2xl md:[background-size:48.5px_46.4px] [background-size:35.5px_35.4px]`}>
                {scrumTrainer?.modules?.length} modul  {scrumTrainer?.modules?.reduce((total, mod) => total + mod.lessons.length, 0)} blok
              </p>
              <button className={`${styles.favoriteBtn} w-[45px] md:w-[86px]`}>
                <img className={styles.favorite} src={bookmark} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ScrumList data={scrumTrainer}/>
      <div className="w-[70%] mx-auto">
        <TrainingsContactUs />
      </div>
    </>
  );
};

export default ScrumModule;
