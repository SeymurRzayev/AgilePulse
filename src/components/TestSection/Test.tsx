import type { FC } from "react";
import styles from "./Test.module.css";
import image from "../../assets/images/testSectionImg.jpg";
import AnimatedButton from "../../ui/AnimationButton/AnimationButton";
export const Test: FC = () => {
  return (
    <div className={styles.testSection}>
      <div className={styles.titleAndTest}>
        <div className={styles.title}>
          <p>
            Beynəlxalq standartlara uyğun suallarla biliyini{" "}
          </p>
         <span className={styles.test}>test</span> <p className={styles.pTitle}>et</p>
        </div>
        <div className={styles.description}>
          <p>
            Qısa testlər və imtahanlarla bilik səviyyəni yoxla, özünü inkişaf
            etdir!
          </p>
        </div>
        <div className={styles.testButton}>
            <AnimatedButton>Testə başla</AnimatedButton>
        </div>
      </div>
     
      <div className={styles.imageContainer}>
             <div className={styles.testTextContainer}>
          <div className={styles.testText}>
           <p> Bizim məqsədimiz bilik səviyyəni <br />
            müəyyən edərək sənə uyğun təlimləri <br />
            təklif etməkdir{" "}</p>
          </div>
           </div>
        <div className={styles.image}>
          <img src={image} alt="Test mərhələsi şəkili" />
        </div>
    
       
      </div>
    </div>
  );
};
