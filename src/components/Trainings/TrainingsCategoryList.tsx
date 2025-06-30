import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import TrainingCategoryListItem from "./TrainingCategoryListItem";
import type { CategoriesResponse } from "../../types/types";

type TrainingCategoryListProps = {
  trainingCategories: CategoriesResponse[];
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
            key={item.id}
            item={item.name}
            isActive={activeItem === item.name}
            onClick={() => setActiveItem(item.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrainingsCategoryList;
