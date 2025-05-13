import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TrainingsPage.module.css";
import InfoButton from "../../components/InfoButton";

// Icons
import timeIcon from "../../assets/icons/time.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkCheckIcon from "../../assets/icons/bookmarkCheck.svg";

// Images
import avatar1 from "../../assets/images/picture.png"; // Using picture.png as avatar
import heroBg from "../../assets/images/first page.png"; // Using home-background.jpeg as hero background
import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";

// Sections
import TrainersSection from "./sections/TrainersSection/TrainersSection";
import PodcastsSection from "./sections/PodcastsSection/PodcastsSection";

type TrainingListItemProps = {
  item: string;
  isActive: boolean;
  onClick: () => void;
};

const TrainingListItem = ({ item, isActive, onClick }: TrainingListItemProps) => (
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
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imgUrl} alt={title} />
        <div className={styles.infoButton}>
          <Link to="*">
            <button className={styles.start_btn}>Kursa başla</button>
          </Link>
        </div>
      </div>
      <div className={styles.cardContent}>
        <p>{title}</p>
        <span>
          <img src={timeIcon} alt="time_icon" />
          {time}
        </span>
        <img
          className={styles.bookmark}
          src={isBookmarked ? bookmarkCheckIcon : bookmarkIcon}
          alt="bookmark"
          onClick={() => setIsBookmarked((prev) => !prev)}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.author}>
          <img src={avatar} alt={user} />
          <span>{user}</span>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className={styles.heroSection}
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
      </div>

      {/* Search & Filter Bar */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <svg width="24" height="24" fill="none" className={styles.searchIcon}>
            <path
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className={styles.filterButton}>
          <svg width="28" height="28" fill="none">
            <path
              d="M4 7h20M7 14h10M10 21h4"
              stroke="#222"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Trainings Content */}
      <div className={styles.trainingsContainer}>
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
        <section className={styles.trainingsCardsContainer}>
          {trainingCourses.map((course) => (
            <TrainingCard
              key={course.id}
              imgUrl={course.imgUrl}
              title={course.title}
              time={course.time}
              avatar={course.avatar}
              user={course.user}
              date={course.date}
            />
          ))}
          <div className={styles.viewAllButton}>
            <InfoButton>Hamısına bax</InfoButton>
          </div>
        </section>
      </div>

      {/* Sections */}
      <TrainersSection />
      <PodcastsSection />
    </div>
  );
};

export default TrainingsPage;