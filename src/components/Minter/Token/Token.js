import React from "react";

import styles from "./Token.module.css";

import StakeToken from "./StakeTokenAndEarnApy/StakeToken";

const Token = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.tokenContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              <span className={styles.bold}>EARN</span> up to <span className={styles.bold}>25% APY STAKING{" "}
                HINOX</span> Token
            </h2>
            <p className={styles.text}>
              Stake your Hinox tokens and earn up to 25% APY. and access to Incubator Projects on Hinox
            </p>
            <div className={styles.buttonContainer}>
              <button
                onClick={
                  () => {
                    window.open('https://documentation.hinox.io', '_blank')
                  }
                }
                className={[styles.button, styles.activeButton].join(" ")}
              >
                Docs
              </button>
              <button
                onClick={
                  () => {
                    window.open('https://staking.hinox.io', '_blank')
                  }
                }
                className={styles.button}>Stake Now</button>
            </div>
          </div>
          <StakeToken />
        </div>
      </div>
    </div>
  );
};

export default Token;
