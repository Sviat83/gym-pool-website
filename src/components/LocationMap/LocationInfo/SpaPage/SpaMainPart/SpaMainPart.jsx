import React from "react";
import styles from "./SpaMainPart.module.css";

function SpaMainPart ({ zones }) {
  return (
    <section className={styles.zonesSection}>
      {zones.map((zone, index) => (
        <div
          key={zone.id}
          className={`${styles.zoneCard} ${index % 2 === 1 ? styles.reverse : ""}`}
        >
          <div className={styles.zoneContent}>
            <div className={styles.imageWrapper}>
              {zone.equipment.map((item, idx) => {
                const delay = (idx * 10) / zone.equipment.length; 
                return (
                <img
                  key={idx}
                  src={require(`../../../../../assets/images/spa/${item.img}`)}
                  alt={item.name}
                  className={styles.zoneImage}
                  style={{ animationDelay: `${delay}s` }}
                  />
                );
              })}
            </div>
            <div className={styles.textBlock}>
              <h3>{zone.title}</h3>
              <p>{zone.description}</p>
              <ul className={styles.equipmentList}>
                {zone.equipment.map((item, idx) => (
                  <li key={idx}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SpaMainPart;
