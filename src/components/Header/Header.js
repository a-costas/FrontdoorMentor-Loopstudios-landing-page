import React from "react";
import { useState, useEffect } from "react";

import NavigationList from "../NavigationList/NavigationList";
import LoopstudiosLogo from "../../assets/images/logo.svg";

import styles from "../Header/Header.module.css";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 415);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 415);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navigationBar}>
        <img
          src={LoopstudiosLogo}
          alt="Loopstudios logo"
          className={styles.logo}
        />
        <div className={styles.right}>
          <label aria-hidden={true} className={styles.hamburgerMenu}>
            <input aria-label="Toggle hidden menu" type="checkbox" />
          </label>
          {isMobile ? (
            <aside className={styles.sidebar}>
              <nav className={styles.navList}>
                <NavigationList />
              </nav>
            </aside>
          ) : (
            <NavigationList />
          )}
        </div>
      </div>
      <div className={styles.headingBox}>
        <h1 className={styles.heading}>Immersive Experiences That Deliver</h1>
      </div>
    </header>
  );
}

export default Header;
