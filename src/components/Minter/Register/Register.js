import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "./Register.module.css";
import SubsCribe from "./SubsCribe/SubsCribe";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.register}>
          <div className={styles.textcontainer}>
            <h2 className={styles.title}>
              register <span className={styles.bold}>your email address </span>{" "}
              to us to get <span className={styles.bold}>notifications</span> on{" "}
              <p className={[styles.nextSales, styles.bold].join(" ")}>
                next sales
                <span className={styles.arrowContainer}>
                  {" "}
                  <HiArrowSmRight className={styles.arrow} />
                </span>
              </p>
            </h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat
            </p>
          </div>

          <SubsCribe />
        </div>
      </div>
    </div>
  );
};

export default Register;
