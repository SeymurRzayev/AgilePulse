import type { FC } from "react";
import styles from "./Test.module.css";
import image from "../../assets/images/testSectionImg.jpg";
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
           <button className={styles.button}>Testə başla</button>
        </div>
      </div>
     
      <div className={styles.imageContainer}>
             <div className={styles.testTextContainer}>
          <div className={styles.testText}>
           <p> Bizim məqsədimiz bilik səviyyəni 
            müəyyən edərək sənə uyğun təlimləri 
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
