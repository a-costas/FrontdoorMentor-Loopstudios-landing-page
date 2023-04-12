import React from "react";
import Product from "../Product/Product";

import styles from "../Products/Products.module.css";

function Products() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.ourCreations}>Our Creations</h2>
      <div className={styles.productList}>
        <Product image="image-deep-earth.jpg" name="Deep Earth" />
        <Product image="image-night-arcade.jpg" name="Night Arcade" />
        <Product image="image-soccer-team.jpg" name="Soccer Team VR" />
        <Product image="image-grid.jpg" name="The Grid" />
        <Product image="image-from-above.jpg" name="From Up Above VR" />
        <Product image="image-pocket-borealis.jpg" name="Pocket Borealis" />
        <Product image="image-curiosity.jpg" name="The Curiosity" />
        <Product image="image-fisheye.jpg" name="Make It Fisheye" />
      </div>
      <button className={styles.seeAllBtn}>See All</button>
    </section>
  );
}

export default Products;
