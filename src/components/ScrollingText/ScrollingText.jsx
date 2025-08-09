import React from "react";
import styles from "./ScrollingText.module.css";

const ScrollingText = ({ messages }) => {
  return (
    <div className={styles.scrollingTextWrapper}>
      <div className={styles.scrollingTrack}>
        <div className={styles.scrollingText}>
          {messages.map((msg, index) => (
            <span key={index} className={styles.message}>
              {msg}
            </span>
          ))}
          {messages.map((msg, index) => (
            <span key={`repeat-${index}`} className={styles.message}>
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
