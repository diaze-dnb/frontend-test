import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "./modal.module.scss";
import { GrClose } from "react-icons/gr";

export interface IModalProps {
  open?: boolean;
  isContainer?: boolean;
  onClose(event: React.MouseEvent<HTMLDivElement>): void;
  showButtonClose?: boolean;
}

export const Modal: React.FC<PropsWithChildren<IModalProps>> = ({
  children,
  open = false,
  isContainer = false,
  onClose,
  showButtonClose = true,
}: PropsWithChildren<IModalProps>) => {
  const [noScrollSet, setNoScrollSet] = useState(false);
  const noScrollClass = styles.noScrollOnBody;
  useEffect(() => {
    if (open) {
      if (!document.body.classList.contains(noScrollClass)) {
        document.body.classList.add(noScrollClass);
        setNoScrollSet(true);
      }
    } else {
      if (noScrollSet) {
        document.body.classList.remove(noScrollClass);
        setNoScrollSet(false);
      }
    }
    return () => {
      if (noScrollSet) {
        document.body.classList.remove(noScrollClass);
        setNoScrollSet(false);
      }
    };
  }, [open, noScrollSet]);

  return (
    <>
      {open && (
        <div className={`${styles.modalOverlay} ${[styles.open]}`}>
          <div
            className={`${styles.modal} ${
              isContainer ? styles.typeContainer : styles.typeNotification
            }
            `}
          >
            {showButtonClose && (
              <div className={styles.buttonClose} onClick={(e) => onClose(e)}>
                <GrClose size={20} />
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
