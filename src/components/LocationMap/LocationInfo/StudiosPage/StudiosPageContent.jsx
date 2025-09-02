import React from "react";
import StudiosHeaderSection from "./StudiosHeaderSection/StudiosHeaderSection";
import studiosData from "../../data/studiosData.json";
import StudiosMainPart from "./StudiosMainPart/StudiosMainPart";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./StudiosPageContent.module.css";


function StudiosPageContent () {
    return (
        <div className={styles.studiosPageContainer}>
            <StudiosHeaderSection />

            <StudiosMainPart zones={studiosData.zones} />

            <ClubCardsSection />
            
        </div>
    )    
};

export default StudiosPageContent;
