import { Link } from "react-router-dom";
import { useState } from "react";
import PodcastsSection from "./sections/PodcastsSection/PodcastsSection";
import TrainersSection from "./sections/TrainersSection/TrainersSection";
import styles from "./TrainingsPage.module.css";
import timeIcon from "../../assets/icons/time.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkCheckIcon from "../../assets/icons/bookmarkCheck.svg";
import avatar1 from "../../assets/images/podcast1.jpg";
import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";

type TrainingListItemProps = {
  item: string;
  isActive: boolean;
  onClick: () => void;
};

const TrainingListItem = ({
  item,
  isActive,
  onClick,
}: TrainingListItemProps) => (
  <li
    className={`${styles.navigationItem} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {item}
  </li>
);

type TrainingCardProps = {
  imgUrl: string;
  title: string;
  time: string;
  avatar: string;
  user: string;
  date: string;
};

const TrainingCard = ({ imgUrl, title, time, avatar, user, date }: TrainingCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const cardContent = (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imgUrl} alt={title} />
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
        <h3>{title}</h3>
        <div className={styles.timeInfo}>
          {content && <p>{content}</p>}
          {!isArticle && <img src={timeIcon} alt="time_icon" />}
          {!isArticle && <span>{time}</span>}
        </div>
        <img
          className={styles.bookmark}
          src={isBookmarked ? bookmarkCheckIcon : bookmarkIcon}
          alt="bookmark"
          onClick={() => setIsBookmarked((prev) => !prev)}
        />
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

  return href ? <Link to={href}>{cardContent}</Link> : cardContent;
};

const TrainingsPage = () => {
  const [activeItem, setActiveItem] = useState("Scrum");

  const trainingCategories = [
    "Scrum",
    "Kanban",
    "Lean",
    "SAFe (Scaled Agile Framework)",
    "XP (Extreme Programming)",
    "Sprint Planlama",
  ];

  const trainingCourses = [
    {
      id: 1,
      imgUrl: training1,
      title: "Scrum nədir? Praktik Başlanğıc",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Səadət Hüseynova",
      date: "12.04.2025",
      href: "/trainings/scrum",
    },
    {
      id: 2,
      imgUrl: training2,
      title: "Agile Manifesto və 12 Prinsip",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Məhəmməd Qasımov",
      date: "16.01.2025",
    },
    {
      id: 3,
      imgUrl: training3,
      title: "Kanban ilə İş Axınını Optimallaşdır",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Tofiq İsayev",
      date: "20.02.2025",
    },
    {
      id: 4,
      imgUrl: training1,
      title: "Scrum nədir? Praktik Başlanğıc",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Səadət Hüseynova",
      date: "12.04.2025",
    },
    {
      id: 5,
      imgUrl: training2,
      title: "Agile Manifesto və 12 Prinsip",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Məhəmməd Qasımov",
      date: "16.01.2025",
    },
    {
      id: 6,
      imgUrl: training3,
      title: "Kanban ilə İş Axınını Optimallaşdır",
      time: "4 modul : 16 blok",
      avatar: avatar1,
      user: "Tofiq İsayev",
      date: "20.02.2025",
    },
  ];

  return (
    <div className={styles.container}>

      <div className={styles.heroSection}></div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.searchIcon}
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" placeholder="Search" />
          </div>
          <button className={styles.filterButton}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M4 7H24M7 14H17M10 21H14"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

      <div className={styles.heroSection}>


      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.searchIcon}>
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="text" placeholder="Search" />

        <div className={styles.heroContent}>
        </div>
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <button className={styles.searchButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className={styles.filterButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6H21M6 12H18M10 18H14"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.categoriesContainer}>
        <ul className={styles.navigation}>
          {trainingCategories.map((item) => (
            <TrainingListItem
              key={item}
              item={item}
              isActive={activeItem === item}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </ul>
      </div>

      <div className={styles.trainingsGrid}>
        {trainingCourses.map((course) => (
          <TrainingCard
            key={course.id}
            imgUrl={course.imgUrl}
            title={course.title}
            time={course.time}
            avatar={course.avatar}
            user={course.user}
            date={course.date}
            href={course.href}
          />
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <button className={styles.viewAllBtn}>Hamısına bax</button>
      </div>

      <PodcastsSection />

      <TrainersSection />
    </div>
  );
};

export default TrainingsPage;
