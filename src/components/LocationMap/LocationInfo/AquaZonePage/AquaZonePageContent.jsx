import React from "react";
import AquaHeaderSection from "./AquaHeaderSection/AquaHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./AquaZonePageContent.module.css";


function AquaPageContent () {
    return (
        <div className={styles.aquaPageContainer}>
            <AquaHeaderSection />

     

            <ClubCardsSection />
            
        </div>
    )    
};

export default AquaPageContent;
