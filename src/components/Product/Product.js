import React from "react";

import styles from "../Product/Product.module.css";

function Product(creation) {
  return (
    <div className={styles.wrapper}>
      <picture className={styles.image}>
        <source
          media="(max-width: 670px)"
          srcSet={require(`../../assets/images/mobile/` + creation.image)}
          alt={creation.name}
        />
        <source
          media="(min-width: 671px)"
          srcSet={require(`../../assets/images/desktop/` + creation.image)}
          alt={creation.name}
        />
        <img
          className={styles.mainImage}
          src={require(`../../assets/images/mobile/` + creation.image)}
          alt={creation.name}
        />
      </picture>
      <div aria-hidden={true} className={styles.filter}></div>
      <h3 className={styles.title}>{creation.name}</h3>
    </div>
  );
}

export default Product;
