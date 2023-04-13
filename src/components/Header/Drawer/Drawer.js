import React from "react";

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import LoopstudiosLogo from "../../../assets/images/logo.svg";

import styles from "./Drawer.module.css";

function Drawer({ children }) {
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.drawer}>
            <div className={styles.menuHeader}>
              <img
                className={styles.logo}
                src={LoopstudiosLogo}
                alt="Loopstudios logo"
              />
            </div>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Drawer;
