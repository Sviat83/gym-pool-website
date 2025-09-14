import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { initialContacts } from '../data/contactsData';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import gymBg from '../assets/images/location/LocationBakground.jpg.webp';
import boxingBg from '../assets/images/location/LocationBakground.jpg.webp';
import studiosBg from '../assets/images/location/LocationBakground.jpg.webp';
import pilatesBg from '../assets/images/location/LocationBakground.jpg.webp';
import aquaBg from '../assets/images/location/LocationBakground.jpg.webp';
import spaBg from '../assets/images/location/LocationBakground.jpg.webp';
import tennisBg from '../assets/images/location/LocationBakground.jpg.webp';
import visitBg from '../assets/images/location/LocationBakground.jpg.webp';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const pageHeaderBg = {
  '/gym-pool-website/gym': gymBg,
  '/gym-pool-website/boxing': boxingBg,
  '/gym-pool-website/studios': studiosBg,
  '/gym-pool-website/pilates': pilatesBg,
  '/gym-pool-website/aquazone': aquaBg,
  '/gym-pool-website/spa': spaBg,
  '/gym-pool-website/table-tennis': tennisBg,
  '/gym-pool-website/one-time-visit': visitBg
};
const MainLayouts = () => {
  const location = useLocation();
  const headerBg = pageHeaderBg[location.pathname] || null;
  
   const [contacts, setContacts] = useState(initialContacts);

  // Підписка на Firebase, щоб Footer оновлювався автоматично
  useEffect(() => {
    const docRef = doc(db, "contacts", "main");
    const unsubscribe = onSnapshot(docRef, (snap) => {
      if (snap.exists()) {
        setContacts(snap.data());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Header bg={headerBg}/>

      <Outlet/>
      <Footer contacts={contacts} />
     
    </>
  );
};

export default MainLayouts;