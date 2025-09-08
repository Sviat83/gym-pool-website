import React from 'react'
import ArrowSlider from '../../components/ArrowSlider/ArrowSlider';

import styles from './kids-club.module.css'
import lego from '../../assets/images/kids-club/kids-lego.jpg'
import elephant from '../../assets/images/kids-club/kids-elephant.jpg'
import equipment from '../../assets/images/kids-club/kids-equipment.webp'
import club from '../../assets/images/kids-club/kids_club.webp'
import gymnastics from '../../assets/images/kids-club/kids-gymnastics.jpg'
import gymnastics2 from '../../assets/images/kids-club/kids-gymnastics2.webp'
import bg from '../../assets/images/Advantages/fon.webp'
import DotsSlider from '../../components/DotsSlider/DotsSlider';
import KidsTraining from '../../components/KidsTraining/KidsTraining';


const images = [lego, elephant, equipment, club];
const dotsSlider1 =[elephant,lego];
const dotsSlider2 =[gymnastics,gymnastics2];

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
      <section className={styles.sliders}>
        <div className={styles.slidersItems}>
          <DotsSlider images={dotsSlider1} className={styles.slider} />
          <div className={styles.slidersInfo}>
            <h3 className={styles.slidersTitle}>Ігрова кімната та дитячий фітнес-зал у клубі UNI FORCE</h3>
            <p><b>Ігрова кімната</b> – простір для дітей до 10 років, де вони можуть грати, спілкуватися, малювати та насолоджуватися настільними іграми.</p>
            <p><b>Дитячий фітнес-зал</b> – просторий зал, обладнаний для безпечних і цікавих тренувань дітей різного віку.</p>
          </div>
        </div>
        <div className={styles.slidersItems}>
          <DotsSlider images={dotsSlider2} className={styles.slider} />
          <div className={styles.slidersInfo}>
            <h3 className={styles.slidersTitle}>Програми та активності для дітей у клубі UNI FORCE</h3>
            <p>Ми пропонуємо широкий вибір програм для дітей різних вікових груп, які сприяють фізичному розвитку, творчості та здоровому способу життя:</p>
            
            <ul>
              <li>Плавання</li>
              <li>Східні єдиноборства</li>
              <li>Танці та хореографія </li>
              <li>Бокс</li>
              <li>Стретчинг</li>
              <li>Повітряна гімнастика </li>
              <li>Креативні заняття</li>
              <li>Рухливі ігри та квести</li>
            </ul>
          

          </div>
            
        </div>
      </section>
          <KidsTraining/>
    </>
  );
};
export default KidsClubPage;
