import React from 'react';
import styles from '../SchedulePage.module.css';

const ViewModeToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className={styles['view-controls']}>
      <button 
        className={`${styles['view-btn']} ${viewMode === 'day' ? styles['active'] : ''}`}
        onClick={() => onViewModeChange('day')}
      >
        День
      </button>
      <button 
        className={`${styles['view-btn']} ${viewMode === 'week' ? styles['active'] : ''}`}
        onClick={() => onViewModeChange('week')}
      >
        Тиждень
      </button>
      <button 
        className={`${styles['view-btn']} ${viewMode === 'month' ? styles['active'] : ''}`}
        onClick={() => onViewModeChange('month')}
      >
        Місяць
      </button>
    </div>
  );
};

export default React.memo(ViewModeToggle);
