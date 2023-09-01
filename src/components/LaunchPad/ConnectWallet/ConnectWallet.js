import React from "react";

import styles from "./ConnectWallet.module.css";
import {
  connectWalletbanner,
  liteCoin,
  lock,
  profileCircle,
} from "../../../images/images";
import Features from "./Features";
import WhiteList from "./WhiteList";
import ConnectedWallet from "./Connected";
import MyAllocation from "./MyAllocation";

const ConnectWallet = ({ url, name, whitelistFunc, maxWL, isWhitelisted, wlButton, wlCount, button, UserPurchased, publicCap, wlCap, }) => {
  const formattedNumber = maxWL.toLocaleString('en-US', { maximumSignificantDigits: 3, notation: "compact" });

  const features = [
    {
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      text: "USDT",
    },
    {
      icon: "https://i.ibb.co/sRdJrLv/verified.png",
      percent: 93.75,
    },
    {
      icon: "https://i.ibb.co/gRwckKM/checklist.png",
      value: {
        curentValue: wlCount ? wlCount : 0,
        topValue: formattedNumber,
      },
    },
    {
      icon: "https://i.ibb.co/wBf4g8G/booking.png",
      value: {
        curentValue: 0,
        topValue: 0,
      },
    },
  ];


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.connectWalletContainer}>
        <img src={connectWalletbanner} alt="#" className={styles.banner} />
        <div className={styles.spaceBetween}>
          <h3 className={styles.title}>
            Learn More about <br /> {name}
          </h3>
          <button
            onClick={() => window.open(url)}
            className={styles.button}>
            <span className={styles.buttonText}>Docs</span>
          </button>{" "}
        </div>
      </div>

      <div className={styles.informationContainer}>
        <Features features={features} />
        <WhiteList isWhitelisted={isWhitelisted} />
        <ConnectedWallet />
        <MyAllocation button={button} whitelistFunc={whitelistFunc} wlButton={wlButton} isWhitelisted={isWhitelisted} UserPurchased={UserPurchased} wlCap={wlCap} publicCap={publicCap} />
      </div>
    </div>
  );
};

export default ConnectWallet;
