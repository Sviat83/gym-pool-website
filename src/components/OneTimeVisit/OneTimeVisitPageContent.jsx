import React from "react";
import OneTimeVisitMainPart  from "./OneTimeVisitMainPart/OneTimeVisitMainPart";
import OneTimeVisitHeaderSection from "./OneTimeVisitHeaderSection/OneTimeVisitHeaderSection";
import oneTimeVisitData from "../../components/LocationMap/data/oneTimeVisitData.json";
import PurchaseModal from "./PurchaseModal/PurchaseModal";
import styles from "./OneTimeVisitPageContent.module.css";


function OneTimeVisitPageContent () {
    return (
        <div className={styles.oneTimeVisitPageContainer}>
            <OneTimeVisitHeaderSection />


            <OneTimeVisitMainPart zones={oneTimeVisitData.zones} />
            
            <PurchaseModal />
        </div>
    )    
};

export default OneTimeVisitPageContent;
