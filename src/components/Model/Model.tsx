import React, { useRef, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styles from "../../styles/Model.module.css";
import { ModalProps } from "../../types/types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    visible && (
      <div
        className={`${styles.MODAL_custom} ${
          animate ? styles.fadeIn : styles.fadeOut
        }`}
      >
        <div
          className={`${styles.MODAL_content} ${
            animate ? styles.slideIn : styles.slideOut
          }`}
          ref={modalRef}
        >
          <div className={styles.MODAL_input}>
            <input type="text" placeholder={placeholder} />
            <div className={styles.MODAL_Search}>
              <IoSearchOutline style={{ fontSize: "2rem" }} />
            </div>
            <div className={styles.MODAL_esc}>{buttonText}</div>
          </div>
          <div className={styles.MODAL_search}>
            <div className={styles.MODAL_text}>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
