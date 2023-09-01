import React, { useState, useRef, useEffect } from "react";
import styles from "./Counter.module.css";

const Counter = ({ start, end, durationTime, usd }) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(start);
          const diff = Math.abs(end - start);
          const duration = 1000;
          const increment = Math.ceil(diff / (duration / 10));
          let currentCount = start;
          const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= end) {
              clearInterval(interval);
              setCount(end);
            } else {
              setCount(currentCount);
            }
          }, durationTime);
          return () => clearInterval(interval);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer.current && ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, [start, end]);
  return (
    <div>
      {" "}
      <p ref={ref} className={[styles.count].join(" ")}>
        {usd && <span className={styles.usd}>$</span>}
        <span className={styles.countNumber}>
          {" "}
          {count >= end ? end.toLocaleString() : count}
        </span>
      </p>
    </div>
  );
};

export default Counter;
