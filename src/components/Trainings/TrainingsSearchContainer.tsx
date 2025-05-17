import React from "react";
import styles from '../../assets/styles/Trainings.module.css'

const TrainingsSearchContainer: React.FC = () => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
          <button className={styles.searchButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#222222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <button className={styles.filterButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6H21M6 12H18M10 18H14"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default TrainingsSearchContainer;
