import type { ReactNode } from "react";
import type { FC } from "react";
import  styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  children: ReactNode;
 
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children}) => {
  return (
    <button className={styles.btn} type="button">
      {children}
    </button>
  );
};

export default AnimatedButton;
