import styles from '../../assets/styles/Trainings.module.css'

type TrainingCategoryListItemProps = {
  item: string;
  isActive: boolean;
  onClick: () => void;
};

const TrainingCategoryListItem = ({
  item,
  isActive,
  onClick,
}: TrainingCategoryListItemProps) => (
  <li
    className={`${styles.navigationItem} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {item}
  </li>
);

export default TrainingCategoryListItem