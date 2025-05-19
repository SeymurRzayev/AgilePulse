import type { FC } from "react";
import styles from "./Banner.module.css";
import AnimatedButton from "../../../../ui/AnimatedButton/AnimatedButton";
import { Link } from "react-router-dom";
import Navbar from "../../../../layout/Navbar/Navbar";
import bannerImg from "../../../../assets/images/banner.webp";
export const Banner: FC = () => {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      <img
        src={bannerImg}
        alt="banner"
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
     
      <div className={`${styles.container} backdrop-brightness-80`}>
        <div className={styles.overlay} />
        <div className={styles.title}>
          <h1>Çevik düşünməklə dünyanı dəyişənlərdən ol!</h1>
          <p>Adaptiv, çevik, dəyişkən, dürüst və qorxmaz</p>
        </div>
        <Link className="cursor-pointer mt-20" to="/trainings">
          <AnimatedButton>Təlimlərə başla</AnimatedButton>
        </Link>
      </div>
    </>
  );
};
