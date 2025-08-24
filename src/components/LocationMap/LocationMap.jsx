import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationModal.module.css";

const LocationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // не рендеримо, якщо закрита

  return (
    <div
      className={styles.modal}
      onMouseLeave={onClose} // закриває при виході мишки
    >
        <ul className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}>
            <li className={styles.navItem}><Link to=''>Про клуб</Link></li>
            <li className={styles.navItem}><Link to='trainers'>Тренери</Link></li>
            <li className={styles.navItem}><Link to='locations'>Локації</Link></li>
            <li className={styles.navItem}><Link to='club-cards'>Клубні картки</Link></li>
            <li className={styles.navItem}><Link to='one-time-visit'>Разовий візит</Link></li>
            <li className={styles.navItem}><Link to='schedule'>Розклад</Link></li>
            <li className={styles.navItem}><Link to='kids-club'>Дитячий клуб</Link></li>
            <li className={styles.navItem}><Link to='prime-cafe'>Prime Life Cafe</Link></li>
        </ul>
    </div>
  );
};

export default LocationModal;


