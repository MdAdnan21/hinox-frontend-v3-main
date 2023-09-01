import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const MyCountDown = ({ dayCount }) => {
  const endTime = new Date(dayCount).getTime();

  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const day = Math.floor(gap / days);
  const hour = Math.floor((gap % days) / hours);
  const minute = Math.floor((gap % hours) / minutes);
  const second = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.count}>
        {" "}
        <span>{`${day < 10 ? "0" + day : day}`}</span>
      </p>
      <p className={styles.separator}>:</p>
      <p className={styles.count}>
        {" "}
        <span>{`${hour < 10 ? "0" + hour : hour}`}</span>
      </p>
      <p className={styles.separator}>:</p>
      <p className={styles.count}>
        {" "}
        <span>{`${minute < 10 ? "0" + minute : minute}`}</span>
      </p>
      <p className={styles.separator}>:</p>
      <p className={styles.count}>
        {" "}
        <span>{`${second < 10 ? "0" + second : second}`}</span>
      </p>
    </div>
  );
};

export default MyCountDown;
