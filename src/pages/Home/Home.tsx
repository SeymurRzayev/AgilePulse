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
