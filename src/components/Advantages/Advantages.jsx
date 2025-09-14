import React, { useState } from 'react'
import styles from './Advantages.module.css'

import { useAdvantages } from '../../hooks/useAdvantages';
import { imageMap } from './AdvantageList';


const Advantages = () => {
  const {items ,loading , error} = useAdvantages();
  const [activeIndex, setActiveIndex] = useState(0);
  if (loading) return <p>Завантаження </p>;
  if (error) return <p>Помилка: {error.message}</p>


  return (
    <section className={styles.wrapper} >
      <h2 className={styles.title}>Переваги</h2>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          {items.map((item ,index)=>{
            const imgSrs = imageMap[item.key];
            
            return (
              <img
              key={index}
              src={imgSrs}
              alt={item.title}
              className={`${styles.image} ${index === activeIndex ? styles.show : ''}`}
              />
            )
          })}
 
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