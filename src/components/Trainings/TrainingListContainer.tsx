import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import TrainingCard from "./TrainingCard";

type TrainingCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  time?: string;
  avatar?: string;
  user?: string;
  date?: string;
};

type TrainingListContainerProps = {
  trainingCourses: TrainingCardProps[];
};
const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  trainingCourses,
}) => {
  return (
    <div className={styles.trainingsGrid}>
      {trainingCourses.map((course) => (
        <TrainingCard
          key={course.id}
          imgUrl={course.imgUrl}
          title={course.title}
          time={course.time}
          avatar={course.avatar}
          user={course.user}
          date={course.date}
        />
      ))}
    </div>
  );
};

export default TrainingListContainer;
