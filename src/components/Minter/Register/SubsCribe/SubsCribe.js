import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { MdMailOutline } from "react-icons/md";
import styles from "./SubsCribe.module.css";

const SubsCribe = () => {
  const [values, setValues] = useState({
    firstname: "",
    email: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.subscribe}>
      <div className={styles.inputWrapper}>
        <label htmlFor="firtsName" className={styles.label}>
          First Name
        </label>
        <div className={styles.inputContainer}>
          <RxPerson className={styles.searchIcon} />
          <input
            type="text"
            id="firstName"
            className={styles.input}
            name="firstName"
            value={values["firstname"]}
            onChange={onChange}
            placeholder="Enter your first name"
          />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="emailAddress" className={styles.label}>
          Email Address
        </label>
        <div className={styles.inputContainer}>
          <MdMailOutline className={styles.searchIcon} />
          <input
            type="email"
            id="emailAddress"
            className={styles.input}
            name="email"
            value={values["email"]}
            onChange={onChange}
            placeholder="yourname@gmail.com"
          />
        </div>
      </div>
      <button className={styles.button}>Subscribe</button>
    </div>
  );
};

export default SubsCribe;
