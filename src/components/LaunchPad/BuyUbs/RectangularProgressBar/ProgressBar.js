import React from "react";
import styles from "./Progressbar.module.css";

const Progress = ({ strokeWidth = 8, percentage }) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: "#1CED86",
    strokeLinecap: "rectangle",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <svg
      className={"CircularProgressbar"}
      viewBox="0 0 100 100"
      width="100%"
      height={180}
    >
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: "rgba(214, 237, 255, 0.12)",
        }}
      />
      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />
      <text
        className={`CircularProgressbar-text ${styles.progressBar}`}
        x={50}
        y={40}
        style={{
          fill: "#D6EDFF",
          fontSize: "16px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {`${percentage}%`}
      </text>{" "}
      <text
        className={`CircularProgressbar-text ${styles.progressBar}`}
        x={50}
        y={60}
        style={{
          fill: "rgb(214, 237, 255, 0.5)",
          fontSize: "12px",
          fontWeight: "500",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        Progress
      </text>
    </svg>
  );
};
export default Progress;
