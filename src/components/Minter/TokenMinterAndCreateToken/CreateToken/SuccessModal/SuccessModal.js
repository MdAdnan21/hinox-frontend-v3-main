import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  sticker,
  computing,
  hashing,
  mintCoin,
  copy,
} from "../../../../../images/images";
import styles from "./SuccessModal.module.css";

const SuccessModal = ({ tokenName, tokenSymbol, decimals, setModal, contract }) => {
  const data = [
    {
      icon: sticker,
      key: "Token Name",

      value: tokenName,
    },
    {
      icon: hashing,
      key: "Token Symbol",

      value: tokenSymbol,
    },

    {
      icon: computing,
      key: "Decimals",
      value: decimals,
    },
  ];

  const handleModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className={styles.modalWrapper}>
        <button className={styles.backButton} onClick={handleModal}>
          <HiOutlineArrowLeft />
        </button>
        <div className={styles.modal}>
          <h4 className={styles.title}>
            Congratulations, you have Successfully deployed your Token
          </h4>
          <p className={styles.tagline}>
            Please copy and save Details of your deployed token{" "}
          </p>
          <div className={styles.details}>
            <div className={styles.keyAndValue}>
              <div className={styles.keyWrapper}>
                <img src={mintCoin} alt="#" className={styles.icon} />
                <p className={styles.key}>Contract address:</p>
              </div>
              <div className={styles.valueWrapper}>
                <p className={styles.value}>{contract}</p>
                <div className={styles.iconContainer}>
                  <img src={copy} alt="#" className={styles.icon} />
                </div>
              </div>
            </div>
            {data.map((el, i) => (
              <div className={styles.keyAndValue} key={i}>
                <div className={styles.keyWrapper}>
                  <img src={el.icon} alt="#" className={styles.icon} />
                  <p className={styles.key}>{el.key}</p>
                </div>
                <div className={styles.valueWrapper}>
                  <p className={styles.value}>{el.value}</p>
                  <div className={styles.iconContainer}>
                    <img src={copy} alt="#" className={styles.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
          <div className={styles.buttonContainer}>
            <button onClick={handleModal} className={styles.button}>Done</button>{" "}
            <button className={[styles.button, styles.activeButton].join(" ")}>
              Create IDO (Coming Soon)
            </button>
          </div>
        </div>
      </div>{" "}
      <div className={styles.overlay} onClick={handleModal}></div>
    </>
  );
};

export default SuccessModal;
