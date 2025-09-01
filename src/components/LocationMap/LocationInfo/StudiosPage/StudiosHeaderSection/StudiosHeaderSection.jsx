import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import studiosBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./StudiosHeaderSection.module.css";


function StudiosHeaderSection () {

    return (
        <div className={styles.studiosHeaderSection} style={{ backgroundImage: `url(${studiosBg})` }}>
            <div className={styles.studiosHeaderSectionLeft}>
                <h3 className={styles.studiosTitle}>Студії групових та персональних програм</h3>
                <p className={styles.studiosDesc}>Функціональне та функціонально-силове тренування
                    Комплексні тренування для розвитку сили, витривалості, швидкості та гнучкості,
                    які включають серії вправ, об'єднаних у ритмічні комбінації на 16 або 32 рахунки.</p>
            </div>
            <div className={styles.studiosHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default StudiosHeaderSection;