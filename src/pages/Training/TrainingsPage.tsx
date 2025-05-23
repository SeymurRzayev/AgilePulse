import { useState } from "react";
import PodcastsSection from "./sections/PodcastsSection/PodcastsSection";
import TrainersSection from "./sections/TrainersSection/TrainersSection";
import styles from "../../assets/styles/Trainings.module.css";
import avatar1 from "../../assets/images/podcast1.webp";
import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
// Trainings Page Components
import TrainingsHeroContainer from "../../components/Trainings/TrainingsHeroContainer";
import TrainingsSearchContainer from "../../components/Trainings/TrainingsSearchContainer";
import TrainingsCategoryList from "../../components/Trainings/TrainingsCategoryList";
import TrainingListContainer from "../../components/Trainings/TrainingListContainer";
import TrainingsContactUs from "../../components/Trainings/TrainingsContactUs";
import TrainingExperiences from "../Home/sections/TrainingExperiences";

const TrainingsPage = () => {
  const [activeItem, setActiveItem] = useState<string>("Scrum");

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
    <>
      <div className="relative left-0 w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className={styles.container}>
        <TrainingsHeroContainer />
        <TrainingsSearchContainer />
        <TrainingsCategoryList
          trainingCategories={trainingCategories}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <TrainingListContainer trainingCourses={trainingCourses} />
              <PodcastsSection />
        <TrainersSection />

      </div>
      <TrainingExperiences />
      <div className="w-[70%] mx-auto">
        <TrainingsContactUs />
      </div>
      <Footer />
    </>
  );
};

export default TrainingsPage;
