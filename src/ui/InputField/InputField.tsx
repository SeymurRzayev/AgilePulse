import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  noSpace?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  noSpace,
}) => {
  return (
    <div className={styles.inputFieldContainer}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (noSpace && e.key === " ") {
            e.preventDefault(); // space bloklanır
          }
        }}
        className={`${styles.inputField} ${error ? styles.error : ""}`}
      />
      {error && <span className={styles.errorMsg}>*{error}</span>}
    </div>
  );
};

export default InputField;
