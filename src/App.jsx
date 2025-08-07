import Header from './components/Header/Header';
import HeroSection from './components/Hero/Hero';
// import './App.module.css'
import ScrollingText from './components/ScrollingText/ScrollingText';

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
    <div >
      <Header />
      <HeroSection />
      <ScrollingText messages={messages} />
    </div>
  );
}

export default App;
