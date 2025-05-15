import type { FC } from "react";
import { Banner } from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import { Test } from "../../components/TestSection/Test";
import TrainingExperiences from "./sections/TrainingExperiences";
import ArticlesSection from "./sections/ArticlesSection";
import BookSection from "../../components/BookSection/BookSection";
import PartnersSection from "./sections/PartnersSection";
import StatusSection from "./sections/StatusSection";

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
    </div>
  );
};
export default Home;
