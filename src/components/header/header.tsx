import * as React from "react";
import styles from "./header.module.scss";
import { Button } from "../button/button";
import { FaStore } from "react-icons/fa";

interface IHeaderProps {
  onClickFunction(): void;
}

export const Header = ({
  onClickFunction,
}: IHeaderProps): React.ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <FaStore size={30} />
        <h1>FENALCO</h1>
      </div>
      <Button label={"Add Product"} onClick={() => onClickFunction()} />
    </div>
  );
};
