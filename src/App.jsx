import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
// import './App.module.css'
import ScrollingText from './components/ScrollingText/ScrollingText';

import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Service from './components/Servises/ServiceSlider'
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
      {/* Тут будуть інші секції від інших учасників команди */}
      <Service />
      
      <News />
      <Footer />
    </div>
  )
}

export default App;