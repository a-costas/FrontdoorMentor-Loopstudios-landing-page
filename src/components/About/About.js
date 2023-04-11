import React from "react";

import MobileImage from "../../assets/images/mobile/image-interactive.jpg";
import DesktopImage from "../../assets/images/desktop/image-interactive.jpg";

import styles from "../About/About.module.css";

function About() {
  return (
    <section className={styles.wrapper}>
      <picture>
        <source media="(max-width: 670px)" srcSet={MobileImage} />
        <source media="(min-width: 671px)" srcSet={DesktopImage} />
        <img
          className={styles.mainImage}
          src={MobileImage}
          alt="Man with VR headset"
        />
      </picture>
      <h2 className={styles.title}>The Leader in Interactive VR</h2>
      <p className={styles.blurb}>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </section>
  );
}

export default About;
