import React from "react";
import styles from "./HeroSection.module.css";
import { vestingDashboardHeroImg } from "../../../images/images";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.heroSection}>
          <div className={styles.textContainer}>
            <p className={styles.testimonial}>Hinox Vesting Dashboard</p>
            <h1 className={styles.title}>
              {" "}
              <span className={styles.bold}> Vesting </span>project Tracker{" "}
              <span className={styles.bold}>Dashboard</span>
            </h1>
            <p className={styles.text}>
              Our all-in-one Vesting Hub, Crypto Vesting Dashboard, and Tracker
              platform simplifies your crypto rewards management, allowing you
              to effortlessly monitor and manage your tokens.
            </p>
          </div>
          <div className={styles.imageContainer}>
            {" "}
            <img
              src={vestingDashboardHeroImg}
              alt="#"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
