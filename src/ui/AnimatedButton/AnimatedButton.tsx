import type { ReactNode } from "react";
import type { FC } from "react";
import  styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  children: ReactNode;
 onClick?: () => void;
 disabled?: boolean;
 className: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children, onClick, disabled}) => {
  return (
    <button className={`${styles.btn} !cursor-pointer`} 
    onClick={onClick} 
    disabled={disabled}
    type="button">
      {children}
    </button>
  );
};

export default AnimatedButton;
