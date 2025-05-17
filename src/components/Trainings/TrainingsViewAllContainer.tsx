import React from "react";
import styles from "../../assets/styles/Trainings.module.css";

type ViewAllContainerProps = {
  text: string;
  clickFunction: () => void
};
const TrainingsViewAllContainer: React.FC<ViewAllContainerProps> = ({ text,clickFunction }) => {
  return (
    <div className={styles.viewAllContainer}>
      <button onClick={clickFunction} className={styles.viewAllBtn}>{text}</button>
    </div>
  );
};

export default TrainingsViewAllContainer;
