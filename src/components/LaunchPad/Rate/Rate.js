import React from "react";
import styles from "./Ratecss.module.css";

const Rate = ({ rate, tokenSymbol, IDOrate }) => {
  console.log(typeof IDOrate)
  return (
    <div className={styles.wrapper}>
      <div className={styles.spaceBetween}>
        <p className={styles.rate}>{" Details"}</p>
        <p className={styles.rate}></p>
      </div>
      {rate.map((el, i) => (
        <div
          className={[styles.spaceBetween, styles.rateWrapper].join(" ")}
          key={i}
        >
          <p className={styles.rateText}>{el.key}</p>{" "}
          <p className={styles.rateText}>{el.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Rate;
