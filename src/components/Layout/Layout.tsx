"use client";

import React, { useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${styles.HOME_main} ${
        isCollapsed ? styles.SIDEBAR_collapsed : styles.SIDEBAR_expanded
      }`}
    >
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={styles.HOME_content}>
        <Navbar isCollapsed={isCollapsed} />
        {children}
      </div>
    </div>
  );
}
