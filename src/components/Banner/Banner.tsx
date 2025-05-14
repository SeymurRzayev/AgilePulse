import type { FC } from "react";
import AnimatedButton from "../../ui/AnimationButton/AnimationButton";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

export const Banner: FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.overlay}/>
      <div className={styles.title}>
        <h1>Çevik düşünməklə dünyanı dəyişənlərdən ol!</h1>
        <p>Adaptiv, çevik, dəyişkən, dürüst və qorxmaz</p>
      </div>
      <Link to="/trainings" className={styles.btnContainer}>
       <AnimatedButton>Təlimlərə başla</AnimatedButton>
      </Link>
    </div>
  );
};
