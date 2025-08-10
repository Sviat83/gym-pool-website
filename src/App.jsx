import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
import ScrollingText from './components/ScrollingText/ScrollingText';
import InfoStats from './components/InfoStats/InfoStats';
import Location from './components/location/Location';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Service from './components/Servises/ServiceSlider';
import './App.module.css'



function App() {
  const messages = [
    "АКВАФІТНЕС",
    "АЕРОБНІ ПРОГРАМИ",
    "АВТОРСЬКІ КЛАСИ",
    "ТАНЦЮВАЛЬНІ НАПРЯМКИ",
    "ПРОГРАМИ MIND BODY",
    "СИЛОВИЙ ТА ФУНКЦІОНАЛЬНИЙ ТРЕНІНГ",
    "CYCLE"
  ]

  return (
    <div>
      <Header />
      <HeroSection />
      <ScrollingText messages={messages} />
      <InfoStats />
      {/* Тут будуть інші секції від інших учасників команди */}
      <Location/>
      <Service />
      
      <News />
      <Footer />
    </div>
  )
}

export default App;