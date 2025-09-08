import React, { useState } from 'react';
import styles from './SchedulePage.module.css';
import { zones, scheduleData } from './data/scheduleData';
import { getWeekDays, getMonthDays } from './utils/dateUtils';

// Import images
import gymImage from '../../assets/images/gym/gym_cardio-equipment_1.webp';
import aquaImage from '../../assets/images/swimming-pool/adult-pool_1.jpg';
import groupImage from '../../assets/images/group-personal-programs/functional-training_1.jpg';
import kidsImage from '../../assets/images/kids-club/kids_club.webp';
import doctorImage from '../../assets/images/Advantages/advantages_gym.webp';

// Import components
import DayView from './components/DayView';
import WeekView from './components/WeekView';
import MonthView from './components/MonthView';
import DateNavigation from './components/DateNavigation';
import ViewModeToggle from './components/ViewModeToggle';

const zoneImages = {
  gym: gymImage,
  aqua: aquaImage,
  group: groupImage,
  kids: kidsImage,
  doctor: doctorImage
};

const SchedulePage = () => {
  const [activeZone, setActiveZone] = useState('gym');
  const [viewMode, setViewMode] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  // scheduleData і zones імпортуються з './data/scheduleData'

  const formatDate = (date) => {
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };



  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    
    if (viewMode === 'day') {
      newDate.setDate(currentDate.getDate() + direction);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else if (viewMode === 'month') {
      newDate.setMonth(currentDate.getMonth() + direction);
    }
    
    setCurrentDate(newDate);
  };

  const getCurrentSchedule = () => {
    console.log('Active Zone:', activeZone);
    console.log('Available Zones:', Object.keys(zones));
    console.log('All Schedule Data:', scheduleData);
    console.log('Current Zone Schedule:', scheduleData[activeZone]);
    if (!scheduleData[activeZone]) {
      console.warn('No schedule data found for zone:', activeZone);
    }
    return scheduleData[activeZone] || {};
  };



  const renderCurrentView = () => {
    const schedule = getCurrentSchedule();
    switch (viewMode) {
      case 'day':
        return <DayView schedule={schedule} />;
      case 'week':
        return <WeekView weekDays={getWeekDays(currentDate)} schedule={schedule} />;
      case 'month':
        return (
          <MonthView 
            days={getMonthDays(currentDate)} 
            currentMonth={currentDate.getMonth()} 
            schedule={schedule} 
          />
        );
      default:
        return <WeekView weekDays={getWeekDays(currentDate)} schedule={schedule} />;
    }
  };

  const getDateString = () => {
    if (viewMode === 'week') {
      const startWeek = getWeekDays(currentDate)[0];
      const endWeek = getWeekDays(currentDate)[6];
      return `Тиждень ${startWeek.getDate()} ${startWeek.toLocaleDateString('uk-UA', { month: 'long' })} - ${endWeek.getDate()} ${endWeek.toLocaleDateString('uk-UA', { month: 'long' })} ${currentDate.getFullYear()} р.`;
    } else if (viewMode === 'month') {
      return currentDate.toLocaleDateString('uk-UA', { month: 'long', year: 'numeric' });
    } else {
      return formatDate(currentDate);
    }
  };

  return (
    <div 
      className={styles['schedule-page']} 
      style={{
        backgroundImage: `url(${zoneImages[activeZone]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Основний контент */}
      <div className={styles['schedule-content']}>
        {/* Заголовок з навігацією */}
        <div className={styles['schedule-header']}>
          <h1 className={styles['schedule-title']}>Розклад - {zones[activeZone]}</h1>
          
          <DateNavigation 
            currentDate={currentDate}
            viewMode={viewMode}
            onNavigate={navigateDate}
            dateString={getDateString()}
          />

          <ViewModeToggle 
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        {/* Навігаційне меню зон */}
        <nav className={styles['zone-navigation']}>
          {Object.entries(zones).map(([key, name]) => (
            <button
              key={key}
              className={`${styles['zone-btn']} ${activeZone === key ? styles['active'] : ''}`}
              onClick={() => setActiveZone(key)}
              aria-pressed={activeZone === key}
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Календарний контент */}
        <div className={styles['schedule-container']}>
          {renderCurrentView()}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;