import React from 'react';
import styles from '../SchedulePage.module.css';

const DateNavigation = ({ onNavigate, dateString }) => {
  return (
    <div className={styles['date-controls']}>
      <button className={styles['nav-arrow']} onClick={() => onNavigate(-1)}>
        ←
      </button>
      <span className={styles['current-date']}>{dateString}</span>
      <button className={styles['nav-arrow']} onClick={() => onNavigate(1)}>
        →
      </button>
    </div>
  );
};

export default React.memo(DateNavigation);
