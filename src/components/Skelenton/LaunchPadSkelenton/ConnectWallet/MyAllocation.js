import React from "react";
import styles from "./ConnectWallet.module.css";

import ProgressBar from "../../../ProgressBar/ProgressBar";

const MyAllocation = () => {
  return (
    <div className={[styles.wrapper, styles.myAllocationContainer].join(" ")}>
      <div className={[styles.box, styles.allocation].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}></div>
          <p className={styles.text}>My Allocation</p>
        </div>
        <div className={styles.progressBarContaner}>
          <ProgressBar progress={0} background=" #1CED86" />
          <div className={styles.progressValueContainer}>
            <span className={styles.progressText}> Spent :50 USDT</span>
            <span className={styles.progressText}>50 USDT</span>
          </div>
        </div>
      </div>
      <div className={[styles.joinWhiteList].join(" ")}>
        <div className={styles.reserveAndPending}>
          <button
            className={[
              styles.reserveAndPendingButton,

              // styles.reserveSpot
            ].join(" ")}
          >
            Whitelisted
          </button>
          <button
            className={[styles.reserveAndPendingButton, styles.pending].join(
              " "
            )}
          >
            Reserved
          </button>{" "}
        </div>
        <button className={styles.button} style={{ width: "100%" }}>
          Lorem
        </button>
      </div>
    </div>
  );
};

export default MyAllocation;
