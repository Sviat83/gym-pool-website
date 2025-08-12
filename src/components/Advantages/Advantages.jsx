import React, { useState } from 'react'
import styles from './Advantages.module.css'
import { items } from './AdvantageList'
import fon from "../../assets/images/Advantages/fon.webp"


const Advantages = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.wrapper} style={{ backgroundImage: `url(${fon})`, }}>
      <h2 className={styles.title}>Переваги</h2>
      <div className={styles.container}>



        <div className={styles.imageWrapper}>
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.image}
              alt={item.title}
              className={`${styles.image} ${idx === activeIndex ? styles.show : ''}`}
            />
          ))}
        </div>


        <div className={styles.listWrapper}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.item} ${idx === activeIndex ? styles.active : ''}`}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Advantages