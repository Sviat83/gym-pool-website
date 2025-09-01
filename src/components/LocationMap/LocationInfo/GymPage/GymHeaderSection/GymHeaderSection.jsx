import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import bg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./GymHeaderSection.module.css";


function GymHeaderSection() {

    return (
        <div className={styles.gymHeaderSection} style={{ backgroundImage: `url(${bg})` }}>
            <div className={styles.gymHeaderSectionLeft}>
                <h3 className={styles.gymTitle}>Тренажерний зал</h3>
                <p className={styles.gymDesc}>Наш тренажерний зал — це 1200 м² функціонального простору з найсучаснішим
                обладнанням з поділом на спеціалізовані зони для різних типів тренувань:</p>
            </div>
            <div className={styles.gymHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default GymHeaderSection;