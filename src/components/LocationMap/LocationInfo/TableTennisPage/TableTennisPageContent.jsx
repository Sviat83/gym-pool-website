import React from "react";
import TableTennisHeaderSection from "./TableTennisHeaderSection/TableTennisHeaderSection";
import tableTennisData from "../../data/tableTennisData.json";
import TableTennisMainPart from "./TableTennisMainPart/TableTennisMainPart";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";

import styles from "./TableTennisPageContent.module.css";


function TableTennisPageContent () {
    return (
        <div className={styles.tableTennisPageContainer}>
            <TableTennisHeaderSection />
            <TableTennisMainPart zones={tableTennisData.zones} />
            <ClubCardsSection />
            
        </div>
    )    
};

export default TableTennisPageContent;
