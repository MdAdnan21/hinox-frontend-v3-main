import React from "react";

import styles from "./ConnectWallet.module.css";

import Features from "./Features";
import WhiteList from "./WhiteList";
import ConnectedWallet from "./Connected";
import MyAllocation from "./MyAllocation";

const ConnectWallet = (url) => {
  return (
    <div className={[styles.mainWrapper, styles.skelenton].join(" ")}>
      <div className={styles.connectWalletContainer}>
        <div className={styles.banner}></div>
      </div>

      <div className={styles.informationContainer}>
        <Features />
        <WhiteList isWhitelisted={true} />
        <ConnectedWallet />
        <MyAllocation />
      </div>
    </div>
  );
};

export default ConnectWallet;
