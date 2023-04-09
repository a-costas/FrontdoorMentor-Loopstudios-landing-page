import React from "react";

// import FocusLock from "react-focus-lock";

import LoopstudiosLogo from "../../../assets/images/logo.svg";
import closeBtn from "../../../assets/images/icon-close.svg";

import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  return (
    // <FocusLock returnFocus={true}>
    <div className={styles.wrapper}>
      <div className={styles.drawer}>
        <div className={styles.menuHeader}>
          <img
            className={styles.logo}
            src={LoopstudiosLogo}
            alt="Loopstudios logo"
          />
          <button className={styles.closeBtn}>
            <img
              src={closeBtn}
              alt="Close Menu Button"
              aria-hidden="true"
              onClick={handleDismiss}
            />
          </button>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
    // </FocusLock>
  );
}

export default Drawer;
