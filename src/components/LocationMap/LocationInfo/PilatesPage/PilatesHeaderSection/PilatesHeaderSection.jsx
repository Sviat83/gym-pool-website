import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import pilatesBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./PilatesHeaderSection.module.css";


function PilatesHeaderSection () {

    return (
        <div className={styles.pilatesHeaderSection} style={{ backgroundImage: `url(${pilatesBg})` }}>
            <div className={styles.pilatesHeaderSectionLeft}>
                <h3 className={styles.pilatesTitle}>Пілатес на реформерах</h3>
            </div>
            <div className={styles.pilatesHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default PilatesHeaderSection;