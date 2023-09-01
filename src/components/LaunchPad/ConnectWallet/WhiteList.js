import React from "react";
import { MdClose } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { tick } from "../../../images/images";
import styles from "./ConnectWallet.module.css";
import { useAccount } from "wagmi";

const WhiteList = ({ isWhitelisted }) => {
  const { address } = useAccount();
  let string = "whitelisted"
  return (
    <div className={[styles.whiteListContainer, styles.wrapper].join(" ")}>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={tick} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Staking</p>
        </div>
        <div
          className={[styles.isWhiteListed, styles.notWhitelisted].join(" ")}
        >
          <p className={styles.text}>False</p>
          <div className={styles.checkMarkContainer}>
            <MdClose className={styles.checkMark} />
          </div>
        </div>
      </div>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={tick} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Whitelisted</p>
        </div>
        <div
          className={[styles.isWhiteListed, isWhitelisted && address ? styles.whitelisted : styles.notWhitelisted].join(" ")}
        >
          <p className={styles.text}>{isWhitelisted && address ? "True" : "False"}</p>
          <div className={styles.checkMarkContainer}>
            {isWhitelisted && <BiCheck className={styles.checkMark} />}
            {!isWhitelisted && <MdClose className={styles.checkMark} />}

          </div>
        </div>
      </div>
    </div >
  );
};

export default WhiteList;
