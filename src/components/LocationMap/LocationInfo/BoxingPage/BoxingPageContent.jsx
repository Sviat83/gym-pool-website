import React from "react";
// import gymData from "../../../LocationMap/data/gymData.json";
import BoxingHeaderSection from "./BoxingHeaderSection/BoxingHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./BoxingPageContent.module.css";


function BoxingPageContent () {
    return (
        <div className={styles.boxingPageContainer}>
            <BoxingHeaderSection />

            <ClubCardsSection />
            
        </div>
    )    
};

export default BoxingPageContent;
