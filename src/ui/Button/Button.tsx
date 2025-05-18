import React, { type ReactNode } from "react";

interface ButtonProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-[163px] h-[56px]
        rounded-[30px] 
        border-none outline-none 
        text-white
        flex justify-center items-center 
        text-base font-normal 
        cursor-pointer 
        font-[Lexend]
        ${className ?? ""}
      `}
    >
      {title}
      <span className="ml-2">{children && children}</span>
    </button>
  );
};

export default Button;
