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
        <img src={LoopstudiosLogo} alt="Loopstudios logo" />
        <nav role="navigation" aria-label="Main menu" className={styles.right}>
          <button
            aria-expanded={isMenuOpen}
            className={styles.hamburgerBtn}
            onClick={toggleIsMenuOpen}
          >
            <img src={Hamburger} alt="Hamburger Menu Button" />
          </button>
          {isMobile ? (
            <>
              {isMenuOpen && (
                <Drawer handleDismiss={toggleIsMenuOpen}>
                  <NavigationList />
                </Drawer>
              )}
            </>
          ) : (
            <NavigationList />
          )}
        </nav>
      </div>
      <div className={styles.headingBox}>
        <h1 className={styles.heading}>Immersive Experiences That Deliver</h1>
      </div>
    </header>
  );
}

export default Header;
