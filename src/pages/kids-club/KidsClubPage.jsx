import React from 'react'
import ArrowSlider from '../../components/ArrowSlider/ArrowSlider';
import styles from './kids-club.module.css'
import lego from '../../assets/images/kids-club/kids-lego.jpg'
import elephant from '../../assets/images/kids-club/kids-elephant.jpg'
import equipment from '../../assets/images/kids-club/kids-equipment.webp'
import club from '../../assets/images/kids-club/kids_club.webp'
import bg from '../../assets/images/Advantages/fon.webp'
import KidsTraining from '../../components/KidsTraining/KidsTraining';
import SliderSection from './SliderSection/SliderSection';


const images = [lego, elephant, equipment, club];


const KidsClubPage = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${bg})` }}>
        <ArrowSlider items={images} />
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Дитячий клуб</h2>
            <p className={styles.text}>Наш дитячий клуб — це місце, де ваша дитина зможе познайомитися зі світом фітнесу, творчості та здорового способу життя у дружній атмосфері під керівництвом досвідчених тренерів. Ми пропонуємо різноманітні програми, адаптовані для дітей від 2 місяців до 15 років, розраховані на різні вікові групи та рівні підготовки.</p>
          </div>
          <div className={styles.infoBox}>
            <p className={styles.infoText}>Графік роботи:</p>
            <p className={styles.infoText}> <span>будні:</span>	10:00 - 20:00</p>
            <p className={styles.infoText}> <span>вихідні:</span>10:00 - 18:00</p>
          </div>
        </div>
      </section>
      <SliderSection/>
          <KidsTraining/>
    </>
  );
};
export default KidsClubPage;
