import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import TrainingCategoryListItem from "./TrainingCategoryListItem";
import type { CategoriesResponse } from "../../types/types";

type TrainingCategoryListProps = {
  trainingCategories: CategoriesResponse[];
  activeItem: number | null;
  setActiveItem: (item: number | null) => void;
  className: string
};

const TrainingsCategoryList: React.FC<TrainingCategoryListProps> = ({
  trainingCategories,
  activeItem,
  setActiveItem,
  className,
}) => {
  return (
    <div className={` ${className}`}>
      <ul className={styles.navigation}>
        {trainingCategories.map((item) => (
          <TrainingCategoryListItem
            key={item.id}
            item={item.name}
            isActive={activeItem === item.id}
            onClick={() =>
              activeItem === item.id
                ? setActiveItem(null) // Əgər eyni kateqoriyaya klik olunursa, seçimi ləğv et
                : setActiveItem(item.id) // Əks halda onu seç
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default TrainingsCategoryList;
