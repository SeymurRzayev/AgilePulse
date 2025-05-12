import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthIllustration.module.css";
import arrowIcon from "../../assets/images/arrow.svg";
import logo from "../../assets/images/logoWithOutTitle.svg";

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
  // Navigates the user back to the previous page
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // back to home
    }
  };

  return (
    <div className={styles.imageSection}>
      <div className={styles.backgroundImgContainer}>
        <img
          src={imgSrc}
          alt="Agile komandası ilə iş mühiti"
          className={styles.backgroundImg}
        />
      </div>

      <div className={styles.navigatePageIcon} onClick={handleBack}>
        <img
          src={arrowIcon}
          alt="Əvvəlki səhifəyə qayıt"
          className={styles.navigateIconImg}
        />
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
