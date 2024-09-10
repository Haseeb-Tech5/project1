import React, { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { RiArrowDropRightLine } from "react-icons/ri";
import styles from "../../styles/Sidebar.module.css";
import { SidebarItemProps } from "../../types/types";

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  title,
  active,
  to,
  dropdownOptions,
  onClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${styles.SIDEBAR_options} ${active ? styles.active : ""}`}>
      <div className={styles.SIDEBAR_item_main} onClick={toggleDropdown}>
        <Link href={to} onClick={onClick}>
          <div className={styles.SIDEBAR_active}>
            <Icon
              className={`${styles.SIDEBAR_icon} ${
                active ? styles.active_icon : ""
              }`}
              style={{ fontSize: "var(--react-icons)" }}
            />
            <h2>{title}</h2>
          </div>
        </Link>
        <div
          className={`${styles.SIDEBAR_arrow} ${
            isDropdownOpen ? styles.open : ""
          }`}
        >
          <RiArrowDropRightLine
            className={`${styles.SIDEBAR_icon} ${
              active ? styles.active_icon : ""
            }`}
            style={{ fontSize: "var(--react-icons)" }}
          />
        </div>
      </div>
      <div className={styles.SIDEBAR_content_main}>
        <div
          className={`${styles.SIDEBAR_dropdown} ${
            isDropdownOpen ? styles.open : styles.closing
          }`}
        >
          {dropdownOptions.map((option, index) => (
            <div className={styles.SIDEBAR_sub_option} key={index}>
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
