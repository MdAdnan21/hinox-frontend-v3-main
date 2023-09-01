import React, { useState } from "react";
import styles from "./BuyUbs.module.css";
import { testProject, ubsProject } from "../../../images/images";
import Rate from "../Rate/Rate";
import ProgressBar from "./RectangularProgressBar/ProgressBar";
import Counter from "./Counter/Counter";
const BuyUbs = ({ isLive, buyButton, amount, setAmount, endTime, totalRaised, hardcap, IDOrate, tokenSymbol }) => {
  console.log(isLive, "haha")
  let percentage = ((totalRaised / hardcap) * 100).toFixed(0);
  // let percentage = 100.00;
  const rate = [
    {
      key: "Gas Price",
      value: "5 Gwei",

    },

  ];
  const handleKeyDown = (event) => {
    if (
      event.key !== "Backspace" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      !/[0-9]/.test(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.ubsContainer}>
      <div className={styles.topArea}>
        <div className={styles.progressBarContainer}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.progressBar].join(" ")}>
              <ProgressBar percentage={percentage} />
            </div>
            <div className={styles.box}>
              {isLive != "ended" && <Counter dayCount={endTime} />}
              {isLive == "ended" && <p className={styles.counterText}>{"Sales Ended"}</p>}

            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.projectWrapper].join(" ")}>
              <img src={ubsProject} alt="#" className={styles.projectImage} />
              <div className={styles.valueContainer}>
                <p className={styles.value}>1 USDT ≈ {IDOrate} {tokenSymbol}</p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.amountTobuyWrapper].join(" ")}>
              <p className={styles.amountToBuy}>Amount To Buy:</p>
              <div className={styles.projectAndValue}>
                <img src={testProject} alt="#" className={styles.testProject} />
                <input
                  min={1}
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.amount}
                />

                <p className={styles.value}>USDT</p>
              </div>
              <div className={styles.availableContainer}>

                <span className={styles.text}>You Get</span>
                <span className={styles.availbleAmount}>{amount * IDOrate} {tokenSymbol}</span>
              </div>
            </div>
            <button
              onClick={buyButton.func}
              className={styles.button}>
              <span className={styles.buttonText}>{buyButton.text}</span>
            </button>
          </div>
        </div>
      </div>
      <Rate rate={rate} tokenSymbol={tokenSymbol} IDOrate={IDOrate} />
    </div >
  );
};

export default BuyUbs;
