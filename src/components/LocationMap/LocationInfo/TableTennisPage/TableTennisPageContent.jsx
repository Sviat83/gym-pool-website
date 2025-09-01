import React from "react";
import TableTennisHeaderSection from "./TableTennisHeaderSection/TableTennisHeaderSection";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./TableTennisPageContent.module.css";


function TableTennisPageContent () {
    return (
        <div className={styles.tableTennisPageContainer}>
            <TableTennisHeaderSection />

            
            <ClubCardsSection />
            
        </div>
    )    
};

export default TableTennisPageContent;
