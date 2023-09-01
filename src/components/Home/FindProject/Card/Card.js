import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import styles from "./Card.module.css";

const Card = ({
  status,
  currency,
  statusbg,
  feature,
  image,
  wlSpot,
  name,
  tagline,
  info,
  softcap,
  hardcap,
  progress,
  liquidity,
  startPrice,
  endPrice,
  color,
  background,
  totalRaised,
  ca,
}) => {
  const [showAll, setShowAll] = useState(false);
  function toggleShowAll() {
    setShowAll(!showAll);
  }
  console.log(ca);
  return (
    <div
      className={styles.card}
    // onClick={() => {
    //   window.location.href = ca;
    // }}
    >
      <Link to={`${ca}`} className={styles.topBox}>
        <div className={styles.header}>
          {" "}
          <div className={styles.features}>
            {feature.map((el, i) => (
              // <p className={styles.feature} key={i}>
              //   {el}
              // </p>

              <div className={styles.status} style={{ background: el == "kyc" ? "#15C2A2" : el == "audit" ? background : "#18ed86" }}>
                <span className={styles.circle}></span>
                <span className={styles.statusText}>{el}</span>
              </div>
            ))}
          </div>
          <div className={styles.status} style={{ background: status == "upcoming" ? "#FCD336" : status == "Successful" ? "#18ED86" : "#FCD336" }}>
            <span className={styles.circle}></span>
            <span className={styles.statusText}>{status}</span>
          </div>
        </div>
        <div className={styles.projectNameImage}>
          <img src={image} alt="#" className={styles.image} />
          <div className={styles.nameAndTagline}>
            <p className={styles.name} style={{ color: color }}>
              {name}
            </p>
            <p className={styles.tagline} style={{ color: color }}>
              {tagline}
            </p>
          </div>
        </div>
      </Link>
      <div className={styles.projectInfo}>
        <p className={styles.info} style={{ color: color }}>
          {showAll ? info : `${info.slice(0, 99)}`}
          <span
            style={{ color: background }}
            className={[styles.info, styles.showMore].join(" ")}
            onClick={toggleShowAll}
          >
            {info.length > 99 && (showAll ? " ... See Less" : " ... See More")}
          </span>
        </p>
        <div className={styles.softCaps}>
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap:</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {softcap} {currency}
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Hardcap:</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {hardcap} {currency}
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Liquidity :</span>
            {"  "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {liquidity} %
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>WL :</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {wlSpot} Spots
            </span>{" "}
          </p>{" "}
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.text}>Progress ({progress}%)</p>
          <ProgressBar progress={progress} background={background} />
          <p className={styles.price} style={{ color: color }}>
            <span>
              {parseInt(totalRaised).toFixed(0)} {currency}
            </span>
            <span>
              {endPrice} {currency}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
