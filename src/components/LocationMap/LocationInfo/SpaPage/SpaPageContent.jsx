import React from "react";
import SpaHeaderSection from "./SpaHeaderSection/SpaHeaderSection";
import spaData from "../../data/spaData.json";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import SpaMainPart from "./SpaMainPart/SpaMainPart";
import styles from "./SpaPageContent.module.css";


function SpaPageContent () {
    return (
        <div className={styles.spaPageContainer}>
            <SpaHeaderSection />
            <SpaMainPart zones={spaData.zones} />
            <ClubCardsSection />
            
        </div>
    )    
};

export default SpaPageContent;
