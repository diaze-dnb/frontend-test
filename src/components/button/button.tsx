import * as React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const Button = ({
  label,
  size = "medium",
  onClick,
}: IButtonProps): React.ReactElement => {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {label}
    </button>
  );
};
