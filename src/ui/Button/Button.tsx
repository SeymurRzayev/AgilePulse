import React, { type ReactNode } from "react";

interface ButtonProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, children, onClick, className, type, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[163px] h-[56px]
        rounded-[30px] 
         outline-none 
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
