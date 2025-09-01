import React from "react";
import StudiosHeaderSection from "./StudiosHeaderSection/StudiosHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./StudiosPageContent.module.css";


function StudiosPageContent () {
    return (
        <div className={styles.studiosPageContainer}>
            <StudiosHeaderSection />

            
            <ClubCardsSection />
            
        </div>
    )    
};

export default StudiosPageContent;
