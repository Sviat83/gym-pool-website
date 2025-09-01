import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import gymBg from '../assets/images/location/LocationBakground.jpg.webp';
import boxingBg from '../assets/images/location/LocationBakground.jpg.webp';
import studiosBg from '../assets/images/location/LocationBakground.jpg.webp';
import pilatesBg from '../assets/images/location/LocationBakground.jpg.webp';
import aquaBg from '../assets/images/location/LocationBakground.jpg.webp';
import spaBg from '../assets/images/location/LocationBakground.jpg.webp';
import tennisBg from '../assets/images/location/LocationBakground.jpg.webp';

const pageHeaderBg = {
  '/gym-pool-website/gym': gymBg,
  '/gym-pool-website/boxing': boxingBg,
  '/gym-pool-website/studios': studiosBg,
  '/gym-pool-website/pilates': pilatesBg,
  '/gym-pool-website/aquazone': aquaBg,
  '/gym-pool-website/spa': spaBg,
  '/gym-pool-website/table-tennis': tennisBg
};
const MainLayouts = () => {
  const location = useLocation();
  const headerBg = pageHeaderBg[location.pathname] || null;
  
  return (
    <>
      <Header bg={headerBg}/>

      <Outlet/>
      <Footer/>
     
    </>
  );
};

export default MainLayouts;