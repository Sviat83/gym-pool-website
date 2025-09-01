import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import tennisBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./TableTennisHeaderSection.module.css";


function TableTennisHeaderSection () {

    return (
        <div className={styles.tableTennisHeaderSection} style={{ backgroundImage: `url(${tennisBg})` }}>
            <div className={styles.tableTennisHeaderSectionLeft}>
                <h3 className={styles.tableTennisTitle}>Настільний теніс</h3>
            </div>
            <div className={styles.tableTennisHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default TableTennisHeaderSection;