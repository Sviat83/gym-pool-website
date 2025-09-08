import React from "react";
import AquaHeaderSection from "./AquaHeaderSection/AquaHeaderSection";
import poolData from "../../data/poolData.json";
import AquaMainPart from "./AquaMainPart/AquaMainPart";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./AquaZonePageContent.module.css";


function AquaPageContent () {
    return (
        <div className={styles.aquaPageContainer}>
            <AquaHeaderSection />
            <AquaMainPart zones={poolData.zones} />
            <ClubCardsSection />
            
        </div>
    )    
};

export default AquaPageContent;
