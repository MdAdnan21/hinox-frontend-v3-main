import React from "react";
import styles from "./ConnectWallet.module.css";

const Features = () => {
  return (
    <div
      className={[styles.features, styles.wrapper, styles.skelenton].join(" ")}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div className={[styles.feature, styles.box].join(" ")} key={i}>
          <div className={styles.iconContainer}></div>
          <p className={styles.text}> lorem </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
