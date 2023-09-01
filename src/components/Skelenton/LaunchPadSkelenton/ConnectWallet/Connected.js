import React from "react";
import styles from "./ConnectWallet.module.css";

const ConnectedWallet = () => {
  return (
    <div className={styles.wrapper}>
      <div className={[styles.box, styles.addressAndName].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}></div>
          <p className={styles.text}>Connected Wallet </p>
        </div>
        <div className={styles.addressContainer}>
          <p className={styles.address}>Copied to Clipboard</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
