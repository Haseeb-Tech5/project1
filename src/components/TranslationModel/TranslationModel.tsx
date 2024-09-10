import React, { useRef, useEffect, useState, MouseEvent } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import styles from "../../styles/Model.module.css";
import { TranslationModelProps } from "../../types/types";

const TranslationModel: React.FC<TranslationModelProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

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

  const handleSelect = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    visible && (
      <div
        className={`${styles.TRANSLATION_custom} ${
          animate ? styles.fadeIn : styles.fadeOut
        }`}
      >
        <div
          className={`${styles.TRANSLATION_content} ${
            animate ? styles.slideIn : styles.slideOut
          }`}
          ref={modalRef}
        >
          <div className={styles.TRANSLATION_code}>
            {[
              { code: "en", name: "English" },
              { code: "bn", name: "বাংলা" },
              { code: "ar", name: "العربية" },
              { code: "hi", name: "हिंदी" },
            ].map(({ code, name }) => (
              <div key={code} className={styles.TRANSLATION_english_main}>
                <div
                  className={`${styles.TRANSLATION_english} ${
                    selectedLanguage === code ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(code)}
                >
                  {name} <span className={styles.TRANSLATION_en}>({code})</span>
                </div>
                {selectedLanguage === code && (
                  <FaRegCircleCheck
                    style={{ fontSize: "1.6rem" }}
                    className={`${styles.TRANSLATION_check} ${
                      selectedLanguage === code
                        ? styles.selected
                        : styles.notselected
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default TranslationModel;
