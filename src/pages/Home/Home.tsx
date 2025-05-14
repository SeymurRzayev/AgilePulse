import type { FC } from "react";
import { Banner } from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import { Test } from "../../components/TestSection/Test";
import TrainingExperiences from "./sections/TrainingExperiences"

export const Home: FC = () => {
    return (
        <div className={styles.HomeSection}>
            <Banner />
            <Test />
            <TrainingExperiences />
        </div>
    )
}
export default Home
