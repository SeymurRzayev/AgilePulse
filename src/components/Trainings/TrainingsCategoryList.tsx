import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import TrainingCategoryListItem from "./TrainingCategoryListItem";
import type { CategoriesResponse } from "../../types/types";

type TrainingCategoryListProps = {
  trainingCategories: CategoriesResponse[];
  activeItem: number;
  setActiveItem: (item: number) => void;
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
            key={item.id}
            item={item.name}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrainingsCategoryList;
