import React from 'react';
import styles from '../SchedulePage.module.css';

const WeekView = ({ weekDays, schedule }) => {
  const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];

  return (
    <div className={styles['schedule-table-container']}>
      <div className={styles['schedule-header-row']}>
        <div className={styles['time-header']}></div>
        {weekDays.map((day, index) => (
          <div key={index} className={styles['day-header']}>
            <div className={styles['day-name']}>{dayNames[index]}</div>
            <div className={styles['day-number']}>{day.getDate()}</div>
          </div>
        ))}
      </div>
      
      <div className={styles['schedule-body']}>
        {Object.entries(schedule).map(([time, activity]) => (
          <div key={time} className={styles['schedule-row']}>
            <div className={styles['time-cell']}>{time}</div>
            {weekDays.map((day, dayIndex) => (
              <div key={dayIndex} className={styles['activity-cell']}>
                {activity}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(WeekView);
