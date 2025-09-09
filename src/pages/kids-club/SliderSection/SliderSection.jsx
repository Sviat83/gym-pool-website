import React from 'react'
import lego from '../../../assets/images/kids-club/kids-lego.jpg'
import elephant from '../../../assets/images/kids-club/kids-elephant.jpg'
import gymnastics from '../../../assets/images/kids-club/kids-gymnastics.jpg'
import gymnastics2 from '../../../assets/images/kids-club/kids-gymnastics2.webp'
import DotsSlider from '../../../components/DotsSlider/DotsSlider';
import styles from './slider-section.module.css'



const dotsSlider1 = [elephant, lego];
const dotsSlider2 = [gymnastics, gymnastics2];

const SliderSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
      <div className={styles.element}>
        <DotsSlider images={dotsSlider1} className={styles.slider} />
        <div className={styles.info}>
          <h3 className={styles.title}>Ігрова кімната та дитячий фітнес-зал у клубі UNI FORCE</h3>
          <p className={styles.text}><b>Ігрова кімната</b> – простір для дітей до 10 років, де вони можуть грати, спілкуватися, малювати та насолоджуватися настільними іграми.</p>
          <p className={styles.text}><b>Дитячий фітнес-зал</b> – просторий зал, обладнаний для безпечних і цікавих тренувань дітей різного віку.</p>
        </div>
      </div>
      <div className={styles.element}>
        <DotsSlider images={dotsSlider2} className={styles.slider} />
        <div className={styles.info}>
          <h3 className={styles.title}>Програми та активності для дітей у клубі UNI FORCE</h3>
          <p className={styles.text}> Ми пропонуємо широкий вибір програм для дітей різних вікових груп, які сприяють фізичному розвитку, творчості та здоровому способу життя:</p>
          <ul className={styles.list}>
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
      </div>
    </section>
  )
}

export default SliderSection