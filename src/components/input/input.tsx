import React, { useEffect, useState } from "react";
import styles from "./input.module.scss";
import { ImWarning } from "react-icons/im";

interface IInputProps {
  placeholder?: string;
  size?: "mini" | "small" | "medium" | "large";
  onChangeFunction(value: any): void;
  error?: boolean;
  errorMessage?: string;
  value: any;
  label: string;
  type?: "text" | "number" | "file";
  maxLength?: number;
  minLength?: number;
  autofocus?: boolean;
  acceptedFiles?: string;
  disabled?: boolean;
}

export const Input = ({
  placeholder,
  size = "small",
  onChangeFunction,
  error = false,
  errorMessage = "",
  value,
  label,
  type = "text",
  maxLength,
  minLength,
  autofocus = false,
  acceptedFiles,
  disabled = false,
}: IInputProps): React.ReactElement => {
  const [newValue, setNewValue] = useState<string>("");
  const [newErrorMessage, setNewErrorMessage] = useState<string>(errorMessage);
  const [showError, setShowError] = useState<boolean>(error);

  const onChangeInput = (event: any) => {
    const inputValue = event.target.value;
    if (maxLength) {
      if (inputValue.length <= maxLength) {
        validateValue(inputValue);
      }
    } else validateValue(inputValue);
  };

  useEffect(() => {
    onChangeFunction(newValue);
  }, [newValue]);

  const validateOnBlur = () => {
    if (minLength && newValue.length < minLength) {
      setShowError(true);
      setNewErrorMessage(`Debe de tener al menos ${minLength} caracteres`);
    } else setShowError(false);
  };

  const validateValue = (valueToValidate: string) => {
    switch (type) {
      case "text": {
        setNewValue(valueToValidate);
        break;
      }
      case "number": {
        const onlyNumbers = valueToValidate.replace(/[^0-9]+/g, "");
        setNewValue(onlyNumbers);
        break;
      }
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        <label className={styles.label}>{label}</label>
      </div>
      <input
        className={`${styles.input} ${styles[size]} ${
          showError ? styles.errorStatus : ""
        } ${styles[type]}`}
        placeholder={placeholder}
        onChange={(e) => {
          onChangeInput(e);
        }}
        value={value}
        onBlur={() => validateOnBlur()}
        autoFocus={autofocus}
        type={type}
        accept={acceptedFiles}
        disabled={disabled}
      />
      {showError && (
        <div className={styles.errorContainer}>
          <ImWarning size={15} color={"#d60f0f"} />
          <div className={styles.errorMessage}>{newErrorMessage}</div>
        </div>
      )}
    </div>
  );
};
