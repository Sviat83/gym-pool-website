// import React from "react";


// import ArrowSlider from "../components/ArrowSlider/ArrowSlider";
// import bg from  '../assets/images/Advantages/fon.webp'
// import ClubCardsSection from "../components/ClubCardsSection/ClubCardsSection";
// import studio from '../assets/images/location/studio.webp';
// import pilates from '../assets/images/location/Pilates.webp';
// import pool from '../assets/images/location/swimming-pools.webp';
// import PurchaseModal from "../components/OneTimeVisit/PurchaseModal/PurchaseModal";






// const items = [studio, pilates, pool, pilates, studio, pilates, pool];
// const ClubCardsPage = () => {
//     return (
//         <>
//              <div style={{backgroundImage:`url(${bg})`}}>
//           <ArrowSlider  items={items}/>
         
//         <ClubCardsSection />
//        <PurchaseModal/>

//         </div>
//    </>
//     );
// };
// export default ClubCardsPage;

import React, { useState } from "react";
import ArrowSlider from "../components/ArrowSlider/ArrowSlider";
import bg from "../assets/images/Advantages/fon.webp";
import ClubCardsSection from "../components/ClubCardsSection/ClubCardsSection";
import studio from "../assets/images/location/studio.webp";
import pilates from "../assets/images/location/Pilates.webp";
import pool from "../assets/images/location/swimming-pools.webp";
import PurchaseModal from "../components/OneTimeVisit/PurchaseModal/PurchaseModal";

const items = [studio, pilates, pool, pilates, studio, pilates, pool];

const ClubCardsPage = () => {
  // стан для модалки
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBuy = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <ArrowSlider items={items} />

      {/*  Передаємо callback handleBuy у ClubCardsSection */}
      <ClubCardsSection onBuy={handleBuy} />

      {/*  Модалка покупки */}
      {selectedCard && (
        <PurchaseModal open={true} onClose={closeModal} plan={selectedCard} />
      )}
    </div>
  );
};

export default ClubCardsPage;
