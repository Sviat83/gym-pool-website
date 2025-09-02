import React from "react";
import PilatesHeaderSection from "./PilatesHeaderSection/PilatesHeaderSection";
import pilatesData from "../../data/pilatesData.json";
import PilatesMainPart from "./PilatesMainPart/PilatesMainPart";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./PilatesPageContent.module.css";


function PilatesPageContent () {
    return (
        <div className={styles.pilatesPageContainer}>
            <PilatesHeaderSection />
            <PilatesMainPart zones={pilatesData.zones} />            
            <ClubCardsSection />
            
        </div>
    )    
};

export default PilatesPageContent;
