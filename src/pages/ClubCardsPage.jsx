import React from "react";
import ArrowSlider from "../components/ArrowSlider/ArrowSlider";
import bg from  '../assets/images/Advantages/fon.webp'
import ClubCardsSection from "../components/ClubCardsSection/ClubCardsSection";
import studio from '../assets/images/location/studio.webp';
import pilates from '../assets/images/location/Pilates.webp';
import pool from '../assets/images/location/swimming-pools.webp';






const items = [studio, pilates, pool, pool, pilates, studio, pilates, pool];
const ClubCardsPage = () => {
    return (
        <>
             <div style={{backgroundImage:`url(${bg})`}}>
          <ArrowSlider  items={items}/>
         
        <ClubCardsSection />
     

        </div>
   </>
    );
};
export default ClubCardsPage;