import React from 'react'
import HeroSection from '../components/Hero/Hero'
import ScrollingText from '../components/ScrollingText/ScrollingText'
import InfoStats from '../components/InfoStats/InfoStats'
import Location from '../components/location/Location'
import Advantages from '../components/Advantages/Advantages'
import Service from '../components/Servises/ServiceSlider';
import ClubCardsSection from '../components/ClubCardsSection/ClubCardsSection'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
      const messages = [
    "АКВАФІТНЕС",
    "АЕРОБНІ ПРОГРАМИ",
    "АВТОРСЬКІ КЛАСИ",
    "ТАНЦЮВАЛЬНІ НАПРЯМКИ",
    "ПРОГРАМИ MIND BODY",
    "СИЛОВИЙ ТА ФУНКЦІОНАЛЬНИЙ ТРЕНІНГ",
    "CYCLE"
  ];
  return (
    <>
      <HeroSection />
      <ScrollingText messages={messages} />
      <InfoStats />
      <Location/>
      <Advantages/>
      <Service/>
      <ClubCardsSection />
      <News />
      <Footer/>
    </>
  );
};

export default HomePage;