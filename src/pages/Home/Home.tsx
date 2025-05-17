import type { FC } from "react";
import { Banner } from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import { Test } from "../../components/TestSection/Test";
import TrainingExperiences from "./sections/TrainingExperiences";
import ArticlesSection from "./sections/ArticlesSection";
import BookSection from "../../components/BookSection/BookSection";
import PartnersSection from "./sections/PartnersSection";
import StatusSection from "./sections/StatusSection";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";

export const Home: FC = () => {
  return (
    <div className={styles.HomeSection}>
      <Navbar/>
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
