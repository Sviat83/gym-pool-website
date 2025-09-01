import React from "react";
import SpaHeaderSection from "./SpaHeaderSection/SpaHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./SpaPageContent.module.css";


function SpaPageContent () {
    return (
        <div className={styles.spaPageContainer}>
            <SpaHeaderSection />

     

            <ClubCardsSection />
            
        </div>
    )    
};

export default SpaPageContent;
