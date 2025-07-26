import { useMemo, useState } from "react";
import PodcastsSection from "./sections/PodcastsSection/PodcastsSection";
import TrainersSection from "./sections/TrainersSection/TrainersSection";
import styles from "../../assets/styles/Trainings.module.css";
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
import { useGetAllTrainingsQuery, useGetTrainingsByCategoryQuery } from "../../services/features/trainingPage/trainingsApi";
import LoadingSpinner from "../../components/General/LoadingSpinner";

const TrainingsPage = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  // const navigate = useNavigate()

  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const { data: categories } = useGetCategoriesQuery();
  const { data: trainingCourses, isLoading: isLoadingTrainingCourses } = useGetTrainingsByCategoryQuery(activeItem, { skip: activeItem === null });
  const { data: allTrainings, isLoading: isLoadingAllTrainings } = useGetAllTrainingsQuery();

  const visibleCourses = useMemo(() => {
    if (activeItem === null) return allTrainings;
    return trainingCourses;
  }, [activeItem, allTrainings, trainingCourses]);


  if (!allTrainings) {
    return null
  }

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
        <TrainingsSearchContainer
          filterIcon={true}
          height={74}
          onFilterClick={() => setShowFilter(prev => !prev)}
        />
        <div
          className={` 
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${showFilter ? "max-h-[500px] mt-[30px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
                  `}
        >
          <TrainingsCategoryList
            trainingCategories={categories ?? []}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            className=""
          />
        </div>
        {isLoadingAllTrainings || isLoadingTrainingCourses ? <LoadingSpinner /> : <TrainingListContainer
          trainingCourses={visibleCourses ?? allTrainings}
          count={(visibleCourses ?? allTrainings)?.length ?? 0}
        />}
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
