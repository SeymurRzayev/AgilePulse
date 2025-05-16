import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Test.module.css";
import image from "../../assets/images/testSectionImg.jpg";
import AnimatedButton from "../../ui/AnimatedButton/AnimatedButton";
export const Test: FC = () => {
  return (
    <div className={styles.testSection}>
      <div className={styles.titleAndTest}>
        <div className={styles.title}>
          <p>Beynəlxalq standartlara uyğun suallarla biliyini </p>
          <span className={styles.test}>test</span>{" "}
          <p className={styles.pTitle}>et</p>
        </div>
        <div className={styles.description}>
          <p>
            Qısa testlər və imtahanlarla bilik səviyyəni yoxla, özünü inkişaf
            etdir!
          </p>
        </div>
        <Link to="/exams"  className={styles.testButton}>
          <AnimatedButton>Testə başla</AnimatedButton>
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.testTextContainer}>
          <div className={styles.testText}>
            <p>
              {" "}
              Bizim məqsədimiz bilik səviyyəni müəyyən edərək sənə uyğun
              təlimləri təklif etməkdir{" "}
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img src={image} alt="Test mərhələsi şəkili" />
        </div>
      </div>
    </div>
  );
};
