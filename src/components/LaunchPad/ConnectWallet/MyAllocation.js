import React from "react";
import styles from "./ConnectWallet.module.css";
import { wallet } from "../../../images/images";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useAccount } from "wagmi";

const MyAllocation = ({ wlButton, isWhitelisted, button, UserPurchased, publicCap, wlCap }) => {
  const { address } = useAccount();
  const totalValue = isWhitelisted && address ? wlCap : publicCap;
  const currentValue = parseInt(UserPurchased).toFixed(2);

  return (
    <div className={[styles.wrapper, styles.myAllocationContainer].join(" ")}>
      <div className={[styles.box, styles.allocation].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={wallet} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>My Allocation</p>
        </div>
        <div className={styles.progressBarContaner}>
          <ProgressBar
            progress={(currentValue / totalValue) * 100}
            background=" #1CED86"
          />
          <div className={styles.progressValueContainer}>
            <span className={styles.progressText}> Spent :{(currentValue)} USDT</span>
            <span className={styles.progressText}>{totalValue} USDT</span>
          </div>
        </div>
      </div>
      <div className={[styles.joinWhiteList].join(" ")}>
        <div className={styles.reserveAndPending}>
          <button
            className={[
              styles.reserveAndPendingButton,
              isWhitelisted && address ? styles.noReserveSpot : styles.pending,
              // styles.reserveSpot
            ].join(" ")}
          >
            {isWhitelisted && address ? "Whitelisted" : "Whitelist"}
          </button>
          <button
            className={[styles.reserveAndPendingButton, styles.pending,].join(
              " "
            )}
          >
            Reserved
          </button>{" "}
        </div>
        <button
          onClick={wlButton.func}
          className={styles.button} style={{ width: "100%" }}>
          <span className={[styles.buttonText]}>{wlButton.text}</span>
        </button>
      </div>
    </div>
  );
};

export default MyAllocation;
