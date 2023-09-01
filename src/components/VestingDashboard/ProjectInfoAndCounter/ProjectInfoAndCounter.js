import React from "react";
import Counter from "./Counter/Counter";
import styles from "./ProjectInfo.module.css";

const ProjectInfoAndCounter = () => {
  const data = [
    {
      value: 1,
      text: "Total Projects",
      usd: false,
    },
    {
      value: 0,
      text: "Total Unlocked value",
      usd: true,
    },
    {
      value: 0,
      text: "Total value",
      usd: true,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.projectInfo}>
          {data.map((el, i) => (
            <div className={styles.counterContainer} key={i}>
              <Counter
                start={0}
                end={el.value}
                durationTime={10}
                usd={el.usd}
              />
              <p className={styles.text}>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoAndCounter;
