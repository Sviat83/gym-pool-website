import React from "react";
import gymData from "../../../LocationMap/data/gymData.json";
import GymHeaderSection from "./GymHeaderSection/GymHeaderSection";
import ZoneList from "../GymPage/ZonesList/ZonesList";
import ClubCardsSection from "../../../ClubCardsSection/ClubCardsSection";
import styles from "./GymPageContent.module.css";


function GymPageContent () {
    return (
        <div className={styles.gymPageContainer}>
            <GymHeaderSection />

            <ZoneList zones={gymData.zones} />

            <ClubCardsSection />
            
        </div>
    )    
};

export default GymPageContent;
