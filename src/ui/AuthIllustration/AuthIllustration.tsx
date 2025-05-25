import React from "react";
import styles from "./AuthIllustration.module.css";
import logo from "../../assets/images/logoWithOutTitle.svg";
import NavigateArrow from "../NavigateArrow/NavigateArrow";

interface ImageSectionProps {
  title: string;
  description?: string;
  imgSrc: string;
}
const AuthIllustration: React.FC<ImageSectionProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className={styles.imageSection}>
      <div className={styles.backgroundImgContainer}>
        <img
          src={imgSrc}
          alt="Agile komandası ilə iş mühiti"
          className={styles.backgroundImg}
        />
      </div>

      <div className={`&{styles.navigatePageIcon} left-[40px] top-[20px] cursor-pointer`}>
        <NavigateArrow />
      </div>

      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.overlay} />
      <div className={styles.logo}>
        <img src={logo} alt="Agile Pulse logo" className={styles.logoImg} />
        <p className={styles.logoTitle}>Agile Pulse</p>
      </div>
    </div>
  );
};

export default AuthIllustration;
