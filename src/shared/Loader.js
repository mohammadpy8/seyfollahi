import React from "react";

///styles
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingChildren}></div>
      </div>
    </div>
  );
};

export default Loader;
