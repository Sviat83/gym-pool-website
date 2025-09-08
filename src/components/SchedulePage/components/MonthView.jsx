import React from 'react';
import styles from '../SchedulePage.module.css';

const MonthView = ({ days, currentMonth, schedule }) => {
  return (
    <div className={styles['month-view']}>
      <div className={styles['month-weekdays']}>
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map(day => (
          <div key={day} className={styles['month-weekday']}>{day}</div>
        ))}
      </div>
      <div className={styles['month-grid']}>
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`${styles['month-day']} ${day.getMonth() !== currentMonth ? styles['other-month'] : ''}`}
          >
            <span className={styles['month-day-number']}>{day.getDate()}</span>
            {Object.keys(schedule).length > 0 && (
              <div className={styles['month-activity-indicator']}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MonthView);
