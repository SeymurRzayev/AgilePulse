import type { CSSProperties, ReactNode, FC } from "react";
import styles from "./FormButton.module.css";

interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick: () => void;
  type?: "submit" | "button" | "reset";
}

const FormButton: FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={styles.btn} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
