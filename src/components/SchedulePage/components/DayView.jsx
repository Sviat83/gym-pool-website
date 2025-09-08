import React from 'react';
import styles from '../SchedulePage.module.css';

const DayView = ({ schedule }) => {
  return (
    <div className={styles['day-schedule']}>
      {Object.entries(schedule).map(([time, activity]) => (
        <div key={time} className={styles['day-schedule-item']}>
          <div className={styles['day-time']}>{time}</div>
          <div className={styles['day-activity']}>{activity}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(DayView);
