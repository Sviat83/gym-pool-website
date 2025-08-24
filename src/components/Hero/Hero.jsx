import React from "react";
import styles from "./Hero.module.css";
import CtaButton from "../Button/CtaButton";


const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h2>Фітнес-комплекс</h2>
                <h1><span className={styles.red}>Prime</span>Life Club</h1>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </section>
    )
}

export default HeroSection;