import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import profile from "../../public/assets/profile.png";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import dashboardstyles from "../../styles/Sidebar.module.css";
import { NavbarProps } from "../../types/types";
import NavbarSearch from "./NavbarSearch";
import TranslationModel from "./NavbarTranslation";

const Navbar: React.FC<NavbarProps> = ({ isCollapsed }) => {
  return (
    <div className={styles.NAVBAR_main}>
      <div className={styles.NAVBAR_collaspe}>
        {isCollapsed && (
          <div className={dashboardstyles.SIDEBAR_humburger}>
            <input type="checkbox" id={dashboardstyles.checkbox} />
            <label
              htmlFor={dashboardstyles.checkbox}
              className={dashboardstyles.toggle}
            >
              <div
                className={dashboardstyles.bars}
                id={dashboardstyles.bar1}
              ></div>
              <div
                className={dashboardstyles.bars}
                id={dashboardstyles.bar2}
              ></div>
              <div
                className={dashboardstyles.bars}
                id={dashboardstyles.bar3}
              ></div>
            </label>
          </div>
        )}
      </div>
      <div className={styles.NAVBAR_content_container}>
        <NavbarSearch />
        <TranslationModel />
        <div className={styles.NAVBAR_message}>
          <BiMessageRounded style={{ fontSize: "2rem" }} />
        </div>
        <div className={styles.NAVBAR_profile_image}>
          <Image
            src={profile}
            alt="Profile"
            className={styles.NAVBAR_profile_image_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
