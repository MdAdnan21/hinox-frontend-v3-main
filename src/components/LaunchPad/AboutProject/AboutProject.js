import React, { useState } from "react";
import {
  project1,
  topImage,
  youtube,
  facebook,
  web,
  whatapp,
} from "../../../images/images";
import styles from "./AboutProject.module.css";

const AboutProject = ({ isLive, details }) => {
  const [showMore, setShowMore] = useState(false);


  let name = details?.tokenName;
  let symbol = details?.tokenSymbol;
  console.log(details?.tokenName)
  const socialMedia = [
    {
      icon: "https://i.ibb.co/XCGhX19/discord.png",
      to: "https://discord.gg/UhbcT8Xx",
    },
    {
      icon: "https://i.ibb.co/nBP4Bd7/telegram.png",
      to: "https://t.me/HeptonCommunity",
    },
    {
      icon: "https://i.ibb.co/KxtC463/twitter.png",
      to: "https://twitter.com/heptonl3",
    },
  ];
  return (
    <div className={styles.aboutProject}>
      <img src={topImage} alt="#" className={styles.topImage} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.projectNameImage}>
            <img src={details?.logo} alt="#" className={styles.image} />
            <div className={styles.nameAndTagline}>
              <p className={styles.name}>{name}</p>
              <p className={styles.tagline}>{symbol}</p>
            </div>
          </div>

          <div className={styles.featuresAndStatus}>
            <div className={styles.features}>
              <p className={styles.feature}>Kyc+</p>
            </div>
            <div className={styles.features}>
              <p className={styles.feature}>Audit</p>
            </div>

            <div className={styles.status}>
              <span className={styles.circle}></span>
              <span className={styles.statusText}>{isLive ? isLive : "---"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.titleAndSocialMedia}>
          <h4 className={styles.title}>About {details?.tokenName}</h4>
          <div className={styles.socialMediaContainer}>
            {socialMedia.map((el, i) => (
              <a
                key={i}
                href={el.to}
                target="_blank"
                rel="noreferrer"
                className={styles.iconContainer}
              >
                <img src={el.icon} alt="#" className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className={[styles.text, showMore && styles.textScroll].join(" ")}>
          {String(details?.description).slice(0, 350)}{!showMore && <span>...</span>}{" "}
          {showMore && (
            <>
              {" "}
              {String(details?.description)}
            </>
          )}
          {!showMore && (
            <span
              className={styles.showMore}
              onClick={() => setShowMore((prev) => !prev)}
            >
              Show More
            </span>
          )}
          .
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
