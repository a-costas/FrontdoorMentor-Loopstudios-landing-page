import React from "react";
import { useState, useEffect } from "react";
import useToggle from "../../hooks/use-toggle";

import Drawer from "./Drawer/Drawer";
import NavigationList from "../NavigationList/NavigationList";

import LoopstudiosLogo from "../../assets/images/logo.svg";
import Hamburger from "../../assets/images/icon-hamburger.svg";

import styles from "../Header/Header.module.css";

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  console.log("isMenuOpen", isMenuOpen);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 375);
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
          <label className={styles.hamburgerMenu}>
            <input type="checkbox" onChange={toggleIsMenuOpen} />
          </label>
          {/* {isMobile ? (
            <>
              {isMenuOpen && (
                <Drawer
                  className={styles.drawer}
                  handleDismiss={toggleIsMenuOpen}
                >
                  <NavigationList />
                </Drawer>
              )}
            </>
          ) : (
            <NavigationList />
          )} */}
          <aside className={styles.sidebar}>
            <nav className={styles.navList}>
              <NavigationList />
            </nav>
          </aside>
        </div>
      </div>
      <div className={styles.headingBox}>
        <h1 className={styles.heading}>Immersive Experiences That Deliver</h1>
      </div>
    </header>
  );
}

export default Header;
