import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoButton.module.css'; // Assuming you have this file

interface InfoButtonProps {
  children: React.ReactNode;
  to?: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({ children, to }) => {
  // If a "to" prop is provided, render as a Link, otherwise render as a button
  if (to) {
    return (
      <Link to={to} className={styles.infoButton}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles.infoButton}>
      {children}
    </button>
  );
};

export default InfoButton;