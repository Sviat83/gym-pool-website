import Header from './components/Header/Header';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Service from './components/Servises/ServiceSlider'
import './App.module.css'

function App() {
  return (
    <div>
      <Header />
      {/* Тут будуть інші секції від інших учасників команди */}
      <Service />
      
      <News />
      <Footer />
    </div>
  )
}

export default App;