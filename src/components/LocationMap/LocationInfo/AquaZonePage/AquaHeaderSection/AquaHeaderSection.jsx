import React from "react";
import CtaButton from "../../../../Button/CtaButton";
import aquaBg from "../../../../../assets/images/location/LocationBakground.jpg.webp";
import styles from "./AquaHeaderSection.module.css";


function AquaHeaderSection() {

    return (
        <div className={styles.aquaHeaderSection} style={{ backgroundImage: `url(${aquaBg})` }}>
            <div className={styles.aquaHeaderSectionLeft}>
                <h3 className={styles.aquaTitle}>Аквазона: великий та малий басейни</h3>
                <p className={styles.aquaDesc}>У наших басейнах чистоту води забезпечують сучасні фільтраційні 
                    системи від італійської фірми AstralPool і шведської фірми Pahlen. 
                    Якість води контролюють автоматичні станції Pahlen, 
                    а ультрафіолетові лампи Sita додатково знезаражують воду, зменшуючи потребу в хімічних реагентах.
                </p>
            </div>
            <div className={styles.aquaHeaderSectionRight}>
                <CtaButton targetId="club-cards">Придбати картку</CtaButton>
            </div>
        </div>
    )
}

export default AquaHeaderSection;