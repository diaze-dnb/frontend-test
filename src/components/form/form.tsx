import * as React from "react";
import { Input } from "../input/input";
import { useState } from "react";
import styles from "./form.module.scss";

interface IFormProps {
  readonly?: boolean;
}

export const Form = ({ readonly = false }: IFormProps): React.ReactElement => {
  const [inputChange, setInputChange] = useState<string>();

  return (
    <form className={styles.form}>
      <Input
        onChangeFunction={(value) => setInputChange(value)}
        value={inputChange}
        label={"Nombre"}
        placeholder={"Nombre del producto"}
        disabled={readonly}
        size={"large"}
      />
      <Input
        onChangeFunction={(value) => setInputChange(value)}
        value={inputChange}
        label={"Precio"}
        placeholder={"Precio"}
        type={"number"}
        disabled={readonly}
      />
      <div className={styles.imageContainer}>
        {readonly ? (
          <img className={styles.image} src={""} alt="product" />
        ) : (
          <Input
            onChangeFunction={(value) => setInputChange(value)}
            value={inputChange}
            label={"Imagen"}
            placeholder={"Imagen"}
            type={"file"}
            disabled={readonly}
          />
        )}
      </div>
    </form>
  );
};
