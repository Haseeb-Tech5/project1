import React, { useState } from "react";
import { GiWorld } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import TranslationModel from "../TranslationModel/TranslationModel";
import styles from "../../styles/Navbar.module.css";

const NavbarTranslation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.NAVBAR_world_main} onClick={handleOpenModal}>
        <div className={styles.NAVBAR_world}>
          <GiWorld style={{ fontSize: "1.5rem" }} />
        </div>
        <div className={styles.NAVBAR_english}>
          <h2>English</h2>
        </div>
        <div className={styles.NAVBAR_en}>
          <h2>(en)</h2>
        </div>
        <div className={styles.NAVBAR_arrow}>
          <TiArrowSortedDown style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <TranslationModel isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default NavbarTranslation;
