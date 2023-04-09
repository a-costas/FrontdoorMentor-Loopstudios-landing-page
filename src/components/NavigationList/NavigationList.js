import React from "react";

import styles from "../NavigationList/NavigationList.module.css";

function NavigationList() {
  return (
    <ul className={styles.navigationList}>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="#Careers">Careers</a>
      </li>
      <li>
        <a href="#Events">Events</a>
      </li>
      <li>
        <a href="#Products">Products</a>
      </li>
      <li>
        <a href="#Support">Support</a>
      </li>
    </ul>
  );
}

export default NavigationList;
