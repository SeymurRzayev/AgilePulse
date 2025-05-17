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
      <BookSection />
      <TrainingExperiences />
      <ArticlesSection />
      <PartnersSection />
      <StatusSection />
      <Footer/>
    </div>
  );
};
export default Home;
