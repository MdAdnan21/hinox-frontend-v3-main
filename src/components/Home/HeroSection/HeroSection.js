import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "./HeroSection.module.css";
import { binance, heroImg, solidhash, hepton, greno } from "../../../images/images";


const HeroSection = () => {
  const platforms = [
    { icon: hepton, to: "#" },
    { icon: solidhash, to: "data:image/png;base64,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" },
    { icon: greno, to: "#" },
  ];
  return (
    <section className={`${styles.heroSectionWrapper}`}>
      <div className={styles.heroSection}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              {" "} <br /> <span className={styles.highlight}>Hinox</span> <br /> Ecosystem
            </h1>{" "}
            <p className={styles.text}>
              Hinox is a multi network launchpad service provider aimed at simplifying the process of onboarding the blockchain.


            </p>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => window.open("https://staking.hinox.io/", "_blank")}
                className={`${styles.button} ${styles.activeButton}`}>
                Stake
              </button>{" "}
              <button
                onClick={() => window.open("https://documentation.hinox.io/", "_blank")}
                className={`${styles.button} `}>DOCS</button>
            </div>
            <div className={styles.platforms}>
              {platforms.map((el, i) => (
                <a
                  href="#/"
                  target="_blank"
                  className={styles.iconContainer}
                  key={i}
                  rel="noreferrer"
                >
                  <img src={el.icon} alt="#" className={styles.icon} />
                </a>
              ))}
            </div>
          </div>{" "}
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="#" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
