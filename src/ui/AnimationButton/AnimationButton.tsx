import type { FC, ReactNode } from "react";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  children: ReactNode;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default AnimatedButton;