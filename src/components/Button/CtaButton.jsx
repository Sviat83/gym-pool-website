import React from "react";
import { Link } from "react-router-dom";
import styles from "./CtaButton.module.css";

const CtaButton = ({ targetId, to, children}) => {
    if (to) {
        return (
            <Link to={to} className={styles.cta}>
                {children}
            </Link>
        )
    };

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
