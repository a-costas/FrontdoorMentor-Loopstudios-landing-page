import React from "react";

import styles from "../Footer/Footer.module.css";
import LoopstudiosLogo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import NavigationList from "../NavigationList/NavigationList";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <img
          src={LoopstudiosLogo}
          alt="Loopstudios logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navList}>
        <div className={styles.navigationList}>
          <li>
            <a className={styles.link} href="/">
              About
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Careers">
              Careers
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Events">
              Events
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Products">
              Products
            </a>
          </li>
          <li>
            <a className={styles.link} href="#Support">
              Support
            </a>
          </li>
        </div>
      </nav>
      <div className={styles.icons}>
        <a className={styles.icon} href="http://facebook.com">
          <img src={Facebook} alt="Facebook icon" />
        </a>
        <a className={styles.icon} href="http://twitter.com">
          <img src={Twitter} alt="Twitter icon" />
        </a>
        <a className={styles.icon} href="http://pinterest.com">
          <img src={Pinterest} alt="Pinterest icon" />
        </a>
        <a className={styles.icon} href="http://instagram.com">
          <img src={Instagram} alt="Instagram icon" />
        </a>
      </div>
      <p className={styles.copyright}>
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
