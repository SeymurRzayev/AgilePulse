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
import TrainingsHeroContainer from "../../components/Trainings/TrainingsHeroContainer";
import TrainingsSearchContainer from "../../components/Trainings/TrainingsSearchContainer";
import TrainingsCategoryList from "../../components/Trainings/TrainingsCategoryList";
import TrainingListContainer from "../../components/Trainings/TrainingListContainer";
import TrainingsContactUs from "../../components/Trainings/TrainingsContactUs";
import TrainingExperiences from "../Home/sections/TrainingExperiences";
// import MainButton from "../../components/Butttons/MainButton";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../redux/hooks/Hooks";
import { useGetCategoriesQuery } from "../../services/features/trainingPage/categoryApi";

const TrainingsPage = () => {
  const [activeItem, setActiveItem] = useState<string>("Scrum");
  // const navigate = useNavigate()

  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const {data} = useGetCategoriesQuery();
  console.log(data)


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
    <div className="relative">
      {/*    {
        !isLoggedIn && (
          <div className="fixed backdrop-blur-lg h-screen  w-screen z-40 flex flex-col gap-3 justify-center items-center">
            <div className="text-center text-2xl font-[Corbel] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e7912b] via-[#d83d69] to-[#2c4b9b]">Təlimlər səhifəsinə keçid etmək üçün daxil olun!</div>
            <MainButton onClick={() => navigate('/sign-in')} text="Daxil ol" buttonClassName="px-10 py-3" />
          </div>
        )
      } */}
      <div className="relative left-0 w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className={`${styles.container} font-[Corbel]`}>
        <TrainingsHeroContainer />
        <TrainingsSearchContainer filterIcon={true} height={74} />
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
      <div className="w-full mx-auto  max-w-[1020px] ">
        <TrainingsContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default TrainingsPage;
