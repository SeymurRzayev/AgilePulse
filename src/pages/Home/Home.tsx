import type { FC } from "react";
import { Banner } from "./sections/Banner/Banner";
import styles from "./Home.module.css";
import { Test } from "./sections/TestSection/Test";
import TrainingExperiences from "./sections/TrainingExperiences";
import ArticlesSection from "./sections/ArticlesSection";
import BookSection from "./sections/BookSection/BookSection";
import PartnersSection from "./sections/PartnersSection";
import StatusSection from "./sections/StatusSection";
import Footer from "../../layout/Footer/Footer";

export const Home: FC = () => {
  return (
    <div className={styles.HomeSection}>
<<<<<<< HEAD
=======
    
>>>>>>> fix-from-main
      <Banner />
      <Test />
      <div className="relative">
        <div className=" absolute bg-gradient-to-b from-[#E99826] via-[#DA3D68] to-[#4B4193] opacity-60 w-[800px] h-[800px] top-[30%] -z-10 right-0 rounded-full rotate-45 blur-[150px]"></div>
        <div className=" absolute bg-gradient-to-b from-[#E99826] via-[#DA3D68] to-[#4B4193] opacity-60 w-[800px] h-[800px] bottom-0 -z-10 left-[-10%] rounded-full rotate-45 blur-[150px]"></div>
        <BookSection />
        <TrainingExperiences />
        <ArticlesSection />
      </div>
      <PartnersSection />
      <StatusSection />
      <Footer />
    </div>
  );
};
export default Home;
