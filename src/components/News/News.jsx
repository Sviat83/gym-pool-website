import React from 'react';
import styles from './News.module.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "ГРАФІК РОБОТИ НА РІЗДВО ТА НОВИЙ РІК",
      description: "Графік роботи Prime Life Club на Різдво та Новий Рік",
      image: "https://st4.depositphotos.com/4319567/22592/i/450/depositphotos_225924008-stock-photo-muscular-handsome-sexy-santa-claus.jpg",
      date: "25.12.2024"
    },
    {
      id: 2,
      title: "РІЧНИЦЯ ФІТНЕС-КЛУБУ Prime Life Club",
      description: "Святкуємо річницю нашого фітнес-клубу",
      image: "https://st2.depositphotos.com/1518767/9040/i/450/depositphotos_90408004-stock-photo-fit-people-working-out-in.jpg", 
      date: "15.01.2025"
    },
    {
      id: 3,
      title: "НОВІ ТРЕНУВАЛЬНІ ПРОГРАМИ Prime Life Club",
      description: "Знайомтеся з новими тренувальними програмами",
      image: "https://st3.depositphotos.com/1518767/12693/i/450/depositphotos_126936964-stock-photo-athletes-looking-in-tablet-computer.jpg",
      date: "10.01.2025"
    }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>НОВИНИ</h2>
            <svg 
              className={styles.arrow}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
          
          <button className={styles.viewAllBtn}>
            ПЕРЕГЛЯНУТИ ВСІ
          </button>
        </div>

        {/* News Grid */}
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.date}>
                  {item.date}
                </div>
              </div>
              
              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>
                <p className={styles.description}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;