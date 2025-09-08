import React from "react";
import CtaButton from "../../Button/CtaButton";
import visitBg from "../../../assets/images/location/LocationBakground.jpg.webp";

import gym_1 from "../../../assets/images/one-time-visit/gym_1.jpg";
import gym_2 from "../../../assets/images/one-time-visit/gym_2.jpg";
import gym_3 from "../../../assets/images/one-time-visit/gym_3.jpg";
import finnish_sauna_2 from "../../../assets/images/one-time-visit/finnish_sauna_2.jpg";
import ArrowSlider from "../../ArrowSlider/ArrowSlider";


import styles from "./OneTimeVisitHeaderSection.module.css";

const images = [gym_1, gym_2, gym_3, finnish_sauna_2];
function OneTimeVisitHeaderSection () {

    return (
        <div className={styles.oneTimeVisitHeaderSection} style={{ backgroundImage: `url(${visitBg})` }}>
            
            <section className={styles.oneTimeVisitTop}>
                
                <ArrowSlider items={images} />
           
            </section>    

            <section className={styles.oneTimeVisitBottom}>   
                <div className={styles.oneTimeVisitHeaderSectionLeft}>
                    <h3 className={styles.visitTitle}>Разовий візит</h3>
                    <p className={styles.visitDesc}>Відчути комфорт та переваги нашого фітнес-комплексу можна за один візит. Вам будуть доступні:</p>
                </div>
                <div className={styles.oneTimeVisitHeaderSectionRight}>
                    <CtaButton targetId="purchase-modal">Придбати картку</CtaButton>
                </div>
            </section>     
        </div>
    )
}

export default OneTimeVisitHeaderSection;