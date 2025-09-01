import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import boxingBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./BoxingHeaderSection.module.css";


function BoxingHeaderSection() {

    return (
        <div className={styles.boxingHeaderSection} style={{ backgroundImage: `url(${boxingBg})` }}>
            <div className={styles.boxingHeaderSectionLeft}>
                <h3 className={styles.boxingTitle}>Зона боксу</h3>
            </div>
            <div className={styles.boxingHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default BoxingHeaderSection;