import ScrumModule from "../../../components/ScrumModule/ScrumModule";
import styles from "./ScrumSection.module.css";

const ScrumSection = () => {
  return (
    <div className={styles.ScrumContainer}>
      <h2 className={styles.ScrumContainer}>Scrum nədir? Praktik Başlanğıc</h2>
      <ScrumModule />
    </div>
  );
};

export default ScrumSection;
