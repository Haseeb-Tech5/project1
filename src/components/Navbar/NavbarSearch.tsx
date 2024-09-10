import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import styles from "../../styles/Navbar.module.css";
import Modal from "../Model/Model";

const NavbarSearch: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      handleOpenModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.NAVBAR_search_content} onClick={handleOpenModal}>
        <div className={styles.NAVBAR_search}>
          <IoSearchOutline style={{ fontSize: "1.5rem" }} />
        </div>
        <div className={styles.NAVBAR_Search}>
          <h2>Search</h2>
        </div>
        <div className={styles.NAVBAR_control}>
          <h2>Ctrl+K</h2>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        title="Write minimum of two letters"
        placeholder="Search..."
        buttonText="Esc"
        onClose={handleCloseModal}
      />
    </>
  );
};

export default NavbarSearch;
