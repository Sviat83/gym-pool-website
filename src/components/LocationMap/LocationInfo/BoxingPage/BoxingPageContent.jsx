import React from "react";

import boxingData from "../../../LocationMap/data/boxingData.json";
import BoxingHeaderSection from "./BoxingHeaderSection/BoxingHeaderSection";
import BoxingMainPart from "./BoxingMainPart/BoxingMainPart";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./BoxingPageContent.module.css";


function BoxingPageContent () {
    return (
        <div className={styles.boxingPageContainer}>
            <BoxingHeaderSection />

            <BoxingMainPart zones={boxingData.zones} />

            <ClubCardsSection />
            
        </div>
    )    
};

export default BoxingPageContent;
