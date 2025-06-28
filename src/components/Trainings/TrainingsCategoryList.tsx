import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import TrainingCategoryListItem from "./TrainingCategoryListItem";
// import type { CategoriesResponse } from "../../types/types";

type TrainingCategoryListProps = {
  trainingCategories: string[]/* CategoriesResponse[] */;
  activeItem: string;
  setActiveItem: (item: string) => void;
};

const TrainingsCategoryList: React.FC<TrainingCategoryListProps> = ({
  trainingCategories,
  activeItem,
  setActiveItem,
}) => {
  return (
    <div className={styles.categoriesContainer}>
      <ul className={styles.navigation}>
        {trainingCategories.map((item) => (
          <TrainingCategoryListItem
            key={item}
            item={item}
            isActive={activeItem === item}
            onClick={() => setActiveItem(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrainingsCategoryList;
