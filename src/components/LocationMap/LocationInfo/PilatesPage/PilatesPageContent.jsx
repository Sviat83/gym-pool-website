import React from "react";
import PilatesHeaderSection from "./PilatesHeaderSection/PilatesHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./PilatesPageContent.module.css";


function PilatesPageContent () {
    return (
        <div className={styles.pilatesPageContainer}>
            <PilatesHeaderSection />

            
            <ClubCardsSection />
            
        </div>
    )    
};

export default PilatesPageContent;
