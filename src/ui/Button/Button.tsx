import type { CSSProperties, ReactNode, FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;