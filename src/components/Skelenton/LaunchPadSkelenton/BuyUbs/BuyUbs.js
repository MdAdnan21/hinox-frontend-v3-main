import React from "react";
import styles from "./BuyUbs.module.css";

import Rate from "../Rate/Rate";
import ProgressBar from "./RectangularProgressBar/ProgressBar";

const BuyUbs = () => {
  return (
    <div className={[styles.ubsContainer, styles.skelenton].join(" ")}>
      <div className={styles.topArea}>
        <div className={styles.progressBarContainer}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.progressBar].join(" ")}>
              <ProgressBar percentage={0} />
            </div>
            <div className={styles.box}>
              {/* <Counter dayCount={0} /> */}
              <p className={styles.counterText}>Sales Ended</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.projectWrapper].join(" ")}>
              <p className={styles.projectImage} />
              <div className={styles.valueContainer}>
                <p className={styles.value}>1 USDT ≈ lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.amountTobuyWrapper].join(" ")}>
              <p className={styles.amountToBuy}>Amount To Buy:</p>
              <div className={styles.projectAndValue}>
                <p className={styles.amount}></p>

                <p className={styles.value}>USDT</p>
              </div>
              <div className={styles.availableContainer}>
                <span className={styles.text}>You Get</span>
                <span className={styles.availbleAmount}>Lorem</span>
              </div>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>Lorem</span>
            </button>
          </div>
        </div>
      </div>
      <Rate rate={1} />
    </div>
  );
};

export default BuyUbs;
