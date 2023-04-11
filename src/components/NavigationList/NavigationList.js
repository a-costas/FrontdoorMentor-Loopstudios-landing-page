import React from "react";

import styles from "../NavigationList/NavigationList.module.css";

function NavigationList() {
  return (
    <ul className={styles.navigationList}>
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
    </ul>
  );
}

export default NavigationList;
