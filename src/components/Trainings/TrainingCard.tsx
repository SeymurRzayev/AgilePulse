import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import timeIcon from "../../assets/icons/time.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkCheckIcon from "../../assets/icons/bookmarkCheck.svg";

type TrainingCardProps = {
  imgUrl: string;
  title: string;
  time?: string;
  avatar?: string;
  user?: string;
  date?: string;
  content?: string;
  isArticle?: boolean;
};

const TrainingCard: React.FC<TrainingCardProps> = ({
  imgUrl,
  title,
  time,
  avatar,
  user,
  date,
  content,
  isArticle,
}: TrainingCardProps) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imgUrl} alt={title} loading="lazy" />
        <div className="absolute bottom-0 right-0 flex justify-end items-end z-40">
          <div className={styles.curve_one}></div>
          <div className={styles.infoButton}>
            <button className={styles.start_btn}>
              {isArticle ? "Daha çox" : "Kursa başla"}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className="w-4/5">{title}</h3>
        <div className={styles.timeInfo}>
          {content && <p>{content}</p>}
          {!isArticle && <img src={timeIcon} alt="time_icon" />}
          {!isArticle && <span>{time}</span>}
        </div>
        {!isArticle && (
          <img
            className={styles.bookmark}
            src={isBookmarked ? bookmarkCheckIcon : bookmarkIcon}
            alt="bookmark"
            onClick={() => setIsBookmarked((prev) => !prev)}
            loading="lazy"
          />
        )}
      </div>
      {!isArticle && (
        <div className={styles.cardFooter}>
          <div className={styles.author}>
            <img src={avatar} alt={user} />
            <span>{user}</span>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      )}
    </div>
  );
};

export default TrainingCard;
