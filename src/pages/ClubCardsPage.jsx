import React from "react";
import DotsSlider from "../components/DotsSlider/DotsSlider";
import ArrowSlider from "../components/ArrowSlider/ArrowSlider";
import bg from  '../assets/images/Advantages/fon.webp'
import ClubCardsSection from "../components/ClubCardsSection/ClubCardsSection";

const ClubCardsPage = () => {
    return (
        <>
             <div style={{backgroundImage:`url(${bg})`}}>
          <ArrowSlider/>
        
        <ClubCardsSection />
        </div>
   </>
    );
};
export default ClubCardsPage;