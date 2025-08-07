import React from "react";
import styles from "./Hero.module.css";


const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h2>Фітнес-комплекс</h2>
                <h1><span className={styles.red}>Prime</span>Life Club</h1>
                <button className={styles.cta}>Придбати картку</button>
            </div>
        </section>
    )
}

export default HeroSection;