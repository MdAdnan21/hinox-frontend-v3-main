import React from "react";
import {
  unlock,
  vestingEndImage,
  availableToken,
} from "../../../../images/images";
import styles from "./SingleProject.module.css";
import MyCountDown from "./MyCountDown/MyCountDown";

const SingleProject = ({
  logo,
  price,
  name,
  symbol,
  status,
  remainingToken,
  tokenPrice,
  claimOn,
  unclaimedValue,
  unlockNext,
  vestingEnds,
  availableTokens,
  claimable,
  totalUnclaimed,
  func
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <div className={styles.logoNameStatus}>
          <img src={logo} alt={name} className={styles.logo} />
          <div className={styles.nameAndStatus}>
            <h5 className={styles.name}>{name}</h5>
            <p className={[styles.status, styles.text].join(" ")}>
              {status.text}
            </p>
          </div>
        </div>
        <div className={styles.remainingTokenAndPrice}>
          <p className={styles.remainingToken}>
            {" "}
            <span className={[styles.text].join(" ")}>Unclaimed {symbol}:</span>
            {"  "}{" "}
            <span
              className={[styles.remainingTokenPrice, styles.price].join(" ")}
            >
              {totalUnclaimed} {symbol}
            </span>
          </p>
          <p>
            <span className={[styles.text].join(" ")}>{symbol} price:</span> {"  "}{" "}
            <span className={[styles.remainingTokenPrice, styles.price].join(" ")}>
              {Number(price).toFixed(5)} {"usd"}
            </span>
          </p>
        </div>
      </div>

      <div className={styles.calimDetails}>
        <div className={styles.spaceBetween}>
          <p className={styles.text}>Vesting Network:</p>{" "}
          <p className={styles.claimOnContainer}>
            <img className={styles.claimOnLogo} src={claimOn.logo} alt="#" />

            <span className={styles.calimOn}>{claimOn.name}</span>
          </p>
        </div>{" "}
        {/* <div className={styles.spaceBetween}>
          <p className={styles.text}>My Unclaimed value:</p>{" "}
          <p className={[styles.price, styles.uncalimableValue].join(" ")}>
            {unclaimedValue.toLocaleString()} {"USD"}
          </p>
        </div> */}
      </div>
      <div className={styles.countDownContainer}>
        <div className={[styles.countDown, styles.unlockNext].join(" ")}>
          <div className={styles.iconAndText}>
            <img src={unlock} alt="#" className={styles.icon} />
            <span className={styles.text}>Unlock Next:</span>
          </div>
          <MyCountDown dayCount={unlockNext} />
        </div>
        <div className={[styles.countDown, styles.vestingEnds].join(" ")}>
          <div className={styles.iconAndText}>
            <img src={vestingEndImage} alt="#" className={styles.icon} />
            <span className={styles.text}>Vesting Ends:</span>
          </div>
          <MyCountDown dayCount={vestingEnds} />
        </div>
      </div>
      <div className={styles.availableTokenContainer}>
        <div className={styles.spaceBetween}>
          <div className={styles.iconAndText}>
            <img src={availableToken} alt="#" className={styles.icon} />
            <span className={styles.text}>My Available Tokens:</span>
          </div>
          <div className={styles.availableTokens}>
            <span className={[styles.bnb, styles.text].join(" ")}>
              {availableTokens.bnb.toLocaleString()} {symbol}
            </span>
            <span className={styles.text}> ≈ </span>
            <span className={[styles.usd, styles.price].join(" ")}>
              ${Number(availableTokens.usd).toLocaleString()}
            </span>
          </div>
        </div>
        <button

          onClick={func}
          className={[
            styles.button,
            claimable.value && styles.activeButton,
          ].join(" ")}
        >
          <span className={[styles.text].join(" ")}>{claimable.text}</span>
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
