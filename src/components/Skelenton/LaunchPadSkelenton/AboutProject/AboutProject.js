import React, { useState } from "react";
import {
  project1,
  topImage,
  youtube,
  facebook,
  web,
  whatapp,
} from "../../../../images/images";
import styles from "./AboutProject.module.css";

const AboutProject = ({ isLive, details }) => {
  const [showMore, setShowMore] = useState(false);
  console.log(details?.tokenName);
  const socialMedia = [
    {
      icon: "https://i.ibb.co/XCGhX19/discord.png",
      to: "#",
    },
    {
      icon: "https://i.ibb.co/nBP4Bd7/telegram.png",
      to: "#",
    },
    {
      icon: "https://i.ibb.co/KxtC463/twitter.png",
      to: "#",
    },
  ];
  return (
    <div className={[styles.aboutProject, styles.skelenton].join(" ")}>
      <div className={styles.topImage}>
        <img src={topImage} alt="#" />
      </div>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.projectNameImage}>
            <img
              src={
                "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg"
              }
              alt="#"
              className={styles.image}
            />
            <div className={styles.nameAndTagline}>
              <p className={styles.name}>{details?.tokenName}</p>
              <p className={styles.tagline}>{details?.tokenSymbol}</p>
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
              <span className={styles.statusText}></span>
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
                <img src="" alt="" className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className={[styles.text, showMore && styles.textScroll].join(" ")}>
          {String(details?.description).slice(0, 500)}
          {!showMore && <span>...</span>}{" "}
          {showMore && <> {String(details?.description)}</>}
          {!showMore && (
            <span
              className={styles.showMore}
              onClick={() => setShowMore((prev) => !prev)}
            ></span>
          )}
          .
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
