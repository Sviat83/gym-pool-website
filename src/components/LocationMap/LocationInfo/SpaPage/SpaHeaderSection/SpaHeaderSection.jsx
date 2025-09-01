import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import spaBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./SpaHeaderSection.module.css";


function SpaHeaderSection() {

    return (
        <div className={styles.spaHeaderSection} style={{ backgroundImage: `url(${spaBg})` }}>
            <div className={styles.spaHeaderSectionLeft}>
                <h3 className={styles.spaTitle}>Зона СПА</h3>
            </div>
            <div className={styles.spaHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default SpaHeaderSection;