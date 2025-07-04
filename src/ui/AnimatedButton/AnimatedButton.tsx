import type { ReactNode } from "react";
import type { FC } from "react";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children, className, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className} !cursor-pointer`} type={type ? type : 'button'}>
      {children}
    </button>
  );
};

export default AnimatedButton;