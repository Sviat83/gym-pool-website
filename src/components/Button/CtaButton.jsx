import React from "react";
import styles from "./CtaButton.module.css";

const CtaButton = ({ targetId, children}) => {
    const handleClick = () => {
        const section = document.getElementById(targetId);
            if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button className={styles.cta} onClick={handleClick}>
            {children}
        </button>
    );
};
export default CtaButton;
