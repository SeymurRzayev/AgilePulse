
import type { FC } from "react";
import { Banner } from "../../components/Banner/Banner";
import styles from "./Home.module.css";
import { Test } from "../../components/TestSection/Test";
export const Home:FC=()=>{
    return(
        <div className={styles.HomeSection}>
             <Banner/>
             <Test/>
        </div>
       
        
    )
}