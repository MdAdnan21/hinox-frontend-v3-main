import React from "react";

import styles from "./ConnectWallet.module.css";

const WhiteList = () => {
  return (
    <div className={[styles.whiteListContainer, styles.wrapper].join(" ")}>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}></div>
          <p className={styles.text}>Staking</p>
        </div>
      </div>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}></div>
          <p className={styles.text}>Whitelisted</p>
        </div>
      </div>
    </div>
  );
};

export default WhiteList;
