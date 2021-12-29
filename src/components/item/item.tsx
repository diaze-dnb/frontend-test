import * as React from "react";
import styles from "./item.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";

interface IItemProps {
  name?: string;
  onClickUpdate(): void;
  imageURL: string;
  price: number;
  code: string;
}

export const Item = ({
  name,
  onClickUpdate,
  imageURL,
  price,
  code,
}: IItemProps): React.ReactElement => {
  const priceFormat = (newPrice: number) => {
    return new Intl.NumberFormat("ES-MX", {
      style: "currency",
      currency: "MXN",
    }).format(newPrice);
  };

  return (
    <div className={styles.item}>
      <div className={styles.borderRight} />
      <div className={styles.cardContainer}>
        <div className={styles.title}> {name}</div>
        <img className={styles.image} src={imageURL} alt={"product"} />
        <div className={styles.price}> {priceFormat(price)}</div>
        <div className={styles.code}> Code: {code}</div>
        <div className={styles.buttonsContainer}>
          <div className={styles.detail} onClick={() => onClickUpdate()}>
            <CgDetailsMore size={20} color={"#fff"} />
          </div>
          <div className={styles.edit} onClick={() => onClickUpdate()}>
            <AiFillEdit size={20} color={"#fff"} />
          </div>
        </div>
      </div>
    </div>
  );
};
