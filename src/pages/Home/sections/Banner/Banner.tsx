import type { FC } from "react";
import styles from "./Banner.module.css";
import AnimatedButton from "../../../../ui/AnimatedButton/AnimatedButton"
import { Link } from "react-router-dom";
import Navbar from "../../../../layout/Navbar/Navbar";
export const Banner: FC = () => {

  return (
    <div className={`${styles.container} backdrop-brightness-50`}>
      <Navbar/>
      <div className={styles.overlay} />
      <div className={styles.title}>
        <h1>Çevik düşünməklə dünyanı dəyişənlərdən ol!</h1>
        <p>Adaptiv, çevik, dəyişkən, dürüst və qorxmaz</p>
      </div>
      <Link className="cursor-pointer" to="/trainings">
        <AnimatedButton>Təlimlərə başla</AnimatedButton>
      </Link>

    </div>
  );
};
