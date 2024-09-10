"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import profile from "../../public/assets/profile.png";
import { MdDashboard } from "react-icons/md";
import { TbBrandBooking, TbShoppingBagDiscount } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { SidebarProps } from "../../types/types";

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>(pathname);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (path: string) => {
    setActiveItem(path);
  };

  return (
    <div
      className={`${styles.SIDEBAR_main} ${
        isCollapsed ? styles.SIDEBAR_collapsed : styles.SIDEBAR_expanded
      }`}
    >
      <div className={styles.SIDEBAR_container}>
        <div className={styles.SIDEBAR_logo_combine}>
          <div className={styles.SIDEBAR_logo}>
            <Link href="/admin/dashboard">
              <Image
                src={logo}
                alt="Logo"
                className={styles.SIDEBAR_logo_img}
              />
            </Link>
          </div>
          <div className={styles.SIDEBAR_text}>
            Demand<span style={{ color: "#ffb900" }}>ium</span>
          </div>
          <div className={styles.SIDEBAR_humburger}>
            <input
              type="checkbox"
              id={styles.checkbox}
              checked={isCollapsed}
              onChange={toggleSidebar}
            />
            <label htmlFor={styles.checkbox} className={styles.toggle}>
              <div className={styles.bars} id={styles.bar1}></div>
              <div className={styles.bars} id={styles.bar2}></div>
              <div className={styles.bars} id={styles.bar3}></div>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.SIDEBAR_profile_main_container}>
        <div className={styles.SIDEBAR_profile_main}>
          <div className={styles.SIDEBAR_profile}>
            <Image
              src={profile}
              alt="Profile"
              className={styles.SIDEBAR_logo_img_fill}
            />
          </div>
          <div className={styles.SIDEBAR_superadmin}>
            <h2>Super Admin</h2>
          </div>
        </div>
        <div className={styles.SIDEBAR_original}>
          <div className={styles.SIDEBAR_main_text}>
            <h2>MAIN</h2>
          </div>
          <SidebarItem
            icon={MdDashboard}
            title="Dashboard"
            active={pathname === "/admin/dashboard"}
            to="/admin/dashboard"
            onClick={() => handleItemClick("/admin/dashboard")}
            dropdownOptions={[
              "Customized Options",
              "Verify Requests",
              "Booking Requests",
              "Offline Payments",
              "Accepted",
              "Ongoing",
              "Completed",
              "Canceled",
            ]}
          />
          <div className={styles.SIDEBAR_bookings_text}>
            <h2>BOOKING MANAGEMENT</h2>
          </div>
          <SidebarItem
            icon={TbBrandBooking}
            title="Bookings"
            active={pathname === "/admin/bookings"}
            to="/admin/bookings"
            onClick={() => handleItemClick("/admin/bookings")}
            dropdownOptions={[
              "Customized Options",
              "Verify Requests",
              "Booking Requests",
              "Offline Payments",
              "Accepted",
              "Ongoing",
              "Completed",
              "Canceled",
            ]}
          />
          <div className={styles.SIDEBAR_bookings_text}>
            <h2>PROMOTION MANAGEMENT</h2>
          </div>
          <SidebarItem
            icon={TbShoppingBagDiscount}
            title="Discounts"
            active={pathname === "/admin/discounts"}
            to="/admin/discounts"
            onClick={() => handleItemClick("/admin/discounts")}
            dropdownOptions={[
              "Customized Options",
              "Verify Requests",
              "Booking Requests",
              "Offline Payments",
              "Accepted",
              "Ongoing",
              "Completed",
              "Canceled",
            ]}
          />
          <SidebarItem
            icon={MdDiscount}
            title="Coupons"
            active={pathname === "/admin/coupons"}
            to="/admin/coupons"
            onClick={() => handleItemClick("/admin/coupons")}
            dropdownOptions={[
              "Customized Options",
              "Verify Requests",
              "Booking Requests",
              "Offline Payments",
              "Accepted",
              "Ongoing",
              "Completed",
              "Canceled",
            ]}
          />
          <SidebarItem
            icon={IoIosWallet}
            title="Wallet Bonus"
            active={pathname === "/admin/wallet"}
            to="/admin/wallet"
            onClick={() => handleItemClick("/admin/wallet")}
            dropdownOptions={[
              "Customized Options",
              "Verify Requests",
              "Booking Requests",
              "Offline Payments",
              "Accepted",
              "Ongoing",
              "Completed",
              "Canceled",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
