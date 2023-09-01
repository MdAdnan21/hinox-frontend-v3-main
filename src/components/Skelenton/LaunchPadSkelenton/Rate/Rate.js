import React from "react";
import styles from "./Ratecss.module.css";

const Rate = ({ rate }) => {
  return (
    <div className={[styles.wrapper, styles.skelenton].join(" ")}>
      <div className={styles.spaceBetween}>
        <p className={[styles.rate].join(" ")}>{"Presale Details"}</p>
        <p className={styles.rate}></p>
      </div>
      {Array.from({ length: rate ? rate : 5 }).map((_, i) => (
        <div
          className={[styles.spaceBetween, styles.rateWrapper].join(" ")}
          key={i}
        >
          <p className={styles.rateText}>asdadsf</p>{" "}
          <p className={styles.rateText}>adfasdf</p>
        </div>
      ))}
    </div>
  );
};

export default Rate;
