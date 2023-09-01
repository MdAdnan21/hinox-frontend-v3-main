import React from "react";
import styles from "./ConnectWallet.module.css";

const Features = ({ features }) => {
  return (
    <div className={[styles.features, styles.wrapper].join(" ")}>
      {features.map((el, i) => (
        <div className={[styles.feature, styles.box].join(" ")} key={i}>
          <div className={styles.iconContainer}>
            <img src={el.icon} alt="#" className={styles.icon} />
          </div>
          {el.text && <p className={styles.text}> {el.text} </p>}
          {el.percent && <p className={styles.text}> {el.percent}% </p>}{" "}
          {el.value && (
            <p className={styles.text}>
              {" "}
              {el.value.curentValue} /{" "}
              <span className={styles.topValue}>{el.value.topValue}</span>{" "}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
