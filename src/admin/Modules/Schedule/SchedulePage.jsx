import React, { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  where 
} from 'firebase/firestore';
import { db } from '../../../firebase';
import styles from './SchedulePage.module.css';


const SchedulePage = () => {
  const [scheduleData, setScheduleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(getCurrentWeek());
  const [selectedZone, setSelectedZone] = useState(0); // Додана змінна для активної зони
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [error, setError] = useState('');

  // Зони тренажерного залу
  const zones = [
    'ТРЕНАЖЕРНИЙ ЗАЛ',
    'АКВАЗОНА', 
    'ГРУПОВІ ЗАНЯТТЯ',
    'ДИТЯЧИЙ КЛУБ',
    'ЛІКАР-ТЕРАПЕВТ ТА ДІЄТОЛОГ'
  ];

  // Часові слоти
  const timeSlots = [
    '08:00', '09:00', '10:00', '12:00', '14:00', '18:00', '20:00', '22:00'
  ];

  // Отримання поточного тижня
  function getCurrentWeek() {
    const now = new Date();
    const startOfWeek = new Date(now);
    const dayOfWeek = now.getDay();
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startOfWeek.setDate(now.getDate() - daysToMonday);
    return startOfWeek;
  }

  // Отримання днів тижня
  function getWeekDays(startDate) {
    const days = [];
    const dayNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push({
        name: dayNames[i],
        date: date.getDate(),
        fullDate: date.toISOString().split('T')[0]
      });
    }
    return days;
  }

  const weekDays = getWeekDays(selectedWeek);

  // Завантаження розкладу з Firebase
  const fetchScheduleData = async () => {
    try {
      setLoading(true);
      const startDate = selectedWeek.toISOString().split('T')[0];
      const endDate = new Date(selectedWeek);
      endDate.setDate(endDate.getDate() + 6);
      const endDateStr = endDate.toISOString().split('T')[0];

      const q = query(
        collection(db, 'gym-schedule'),
        where('date', '>=', startDate),
        where('date', '<=', endDateStr)
      );
      
      const querySnapshot = await getDocs(q);
      const data = {};
      
      querySnapshot.forEach((doc) => {
        const scheduleItem = doc.data();
        const key = `${scheduleItem.date}-${scheduleItem.time}-${scheduleItem.zone}`;
        data[key] = {
          id: doc.id,
          activity: scheduleItem.activity,
          instructor: scheduleItem.instructor || '',
          capacity: scheduleItem.capacity || 0
        };
      });
      
      setScheduleData(data);
      setError('');
    } catch (err) {
      console.error('Помилка завантаження розкладу:', err);
      setError('Помилка завантаження даних');
    } finally {
      setLoading(false);
    }
  };

  // Збереження змін в Firebase
  const saveScheduleItem = async (date, time, zone, activity, instructor = '', capacity = 0) => {
    try {
      const key = `${date}-${time}-${zone}`;
      const existingItem = scheduleData[key];

      if (existingItem && existingItem.id) {
        // Оновлення існуючого запису
        await updateDoc(doc(db, 'gym-schedule', existingItem.id), {
          activity,
          instructor,
          capacity: parseInt(capacity) || 0,
          updatedAt: new Date()
        });
      } else {
        // Створення нового запису
        const docRef = await addDoc(collection(db, 'gym-schedule'), {
          date,
          time,
          zone,
          activity,
          instructor,
          capacity: parseInt(capacity) || 0,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        // Оновлення локального стану з правильним ID
        setScheduleData(prev => ({
          ...prev,
          [key]: {
            id: docRef.id,
            activity,
            instructor,
            capacity: parseInt(capacity) || 0
          }
        }));
        
        setError('');
        return;
      }

      // Оновлення локального стану для існуючого запису
      setScheduleData(prev => ({
        ...prev,
        [key]: {
          id: existingItem.id,
          activity,
          instructor,
          capacity: parseInt(capacity) || 0
        }
      }));

      setError('');
    } catch (err) {
      console.error('Помилка збереження:', err);
      setError('Помилка збереження змін');
    }
  };

  // Видалення запису
  const deleteScheduleItem = async (date, time, zone) => {
    try {
      const key = `${date}-${time}-${zone}`;
      const item = scheduleData[key];
      
      if (item && item.id && item.id !== 'temp') {
        await deleteDoc(doc(db, 'gym-schedule', item.id));
      }

      setScheduleData(prev => {
        const newData = { ...prev };
        delete newData[key];
        return newData;
      });
      
      setError('');
    } catch (err) {
      console.error('Помилка видалення:', err);
      setError('Помилка видалення запису');
    }
  };

  // Обробка редагування комірки
  const handleCellEdit = (date, time, zone) => {
    const key = `${date}-${time}-${zone}`;
    const currentValue = scheduleData[key]?.activity || '';
    setEditingCell(key);
    setEditValue(currentValue);
  };

  // Збереження редагування
  const handleSaveEdit = async () => {
    if (!editingCell) return;

    const [date, time, zone] = editingCell.split('-');
    
    if (editValue.trim()) {
      await saveScheduleItem(date, time, zone, editValue.trim());
    } else {
      await deleteScheduleItem(date, time, zone);
    }

    setEditingCell(null);
    setEditValue('');
  };

  // Скасування редагування
  const handleCancelEdit = () => {
    setEditingCell(null);
    setEditValue('');
  };

  // Навігація по тижнях
  const navigateWeek = (direction) => {
    const newWeek = new Date(selectedWeek);
    newWeek.setDate(newWeek.getDate() + (direction * 7));
    setSelectedWeek(newWeek);
  };

  // Зміна активної зони
  const handleZoneChange = (zoneIndex) => {
    setSelectedZone(zoneIndex);
    setEditingCell(null); // Скасувати редагування при зміні зони
    setEditValue('');
  };

  // Отримання значення комірки
  const getCellValue = (date, time, zone) => {
    const key = `${date}-${time}-${zone}`;
    return scheduleData[key]?.activity || '';
  };

  // Швидке додавання тренування
  const handleQuickAdd = async (trainingName) => {
    if (editingCell) {
      // Якщо редагуємо комірку, просто встановлюємо значення
      setEditValue(trainingName);
    } else {
      // Якщо не редагуємо, можна показати повідомлення
      alert('Спочатку клікніть на комірку, яку хочете редагувати');
    }
  };

  // Завантаження даних при зміні тижня або зони
  useEffect(() => {
    fetchScheduleData();
  }, [selectedWeek]);

  if (loading) {
    return <div className={styles.loading}>Завантаження розкладу...</div>;
  }

  return (
    <div className={styles.schedulePage}>
      {/* Заголовок з навігацією */}
      <div className={styles.header}>
        <h1>РОЗКЛАД - {zones[selectedZone]}</h1>
        <div className={styles.navigation}>
          <button onClick={() => navigateWeek(-1)} className={styles.navBtn}>←</button>
          <span className={styles.weekInfo}>
            Тиждень {weekDays[0].date} {getMonthName(selectedWeek)} - {weekDays[6].date} {getMonthName(new Date(selectedWeek.getTime() + 6 * 24 * 60 * 60 * 1000))} 2025 р.
          </span>
          <button onClick={() => navigateWeek(1)} className={styles.navBtn}>→</button>
        </div>
        <div className={styles.viewButtons}>
          <button className={styles.activeView}>День</button>
          <button className={styles.activeView}>Тиждень</button>
          <button>Місяць</button>
          <button onClick={() => fetchScheduleData()} className={styles.refreshBtn}>
            🔄 Оновити
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {/* Навігація по зонах */}
      <div className={styles.zoneNavigation}>
        {zones.map((zone, index) => (
          <button
            key={zone}
            className={`${styles.zoneBtn} ${index === selectedZone ? styles.activeZone : ''}`}
            onClick={() => handleZoneChange(index)}
          >
            {zone}
          </button>
        ))}
      </div>

      {/* Таблиця розкладу */}
      <div className={styles.scheduleTable}>
        <table>
          <thead>
            <tr>
              <th></th>
              {weekDays.map((day) => (
                <th key={day.fullDate} className={styles.dayHeader}>
                  <div className={styles.dayName}>{day.name}</div>
                  <div className={styles.dayDate}>{day.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                <td className={styles.timeSlot}>{time}</td>
                {weekDays.map((day) => (
                  <td key={`${day.fullDate}-${time}`} className={styles.scheduleCell}>
                    {editingCell === `${day.fullDate}-${time}-${zones[selectedZone]}` ? (
                      <div className={styles.editCell}>
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className={styles.editInput}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit();
                            if (e.key === 'Escape') handleCancelEdit();
                          }}
                        />
                        <div className={styles.editButtons}>
                          <button onClick={handleSaveEdit} className={styles.saveBtn}>✓</button>
                          <button onClick={handleCancelEdit} className={styles.cancelBtn}>✗</button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={styles.cellContent}
                        onClick={() => handleCellEdit(day.fullDate, time, zones[selectedZone])}
                      >
                        {getCellValue(day.fullDate, time, zones[selectedZone]) || 'Клікніть для редагування'}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Швидке додавання популярних тренувань */}
      <div className={styles.quickAdd}>
        <h3>Швидке додавання тренувань для зони: {zones[selectedZone]}</h3>
        <div className={styles.quickButtons}>
          {getQuickButtonsForZone(selectedZone).map((training, index) => (
            <button 
              key={index}
              onClick={() => handleQuickAdd(training)} 
              className={styles.quickBtn}
            >
              {training}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Допоміжна функція для отримання назви місяця
function getMonthName(date) {
  const months = [
    'січень', 'лютий', 'березень', 'квітень', 'травень', 'червень',
    'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'
  ];
  return months[date.getMonth()];
}

// Функція для отримання шаблонів тренувань залежно від зони
function getQuickButtonsForZone(zoneIndex) {
  const templates = [
    // ТРЕНАЖЕРНИЙ ЗАЛ
    [
      'Відкриття залу', 'Ранкове тренування', 'Персональні тренування', 
      'Обідня перерва', 'Денні тренування', 'Вечірні тренування', 
      'Силові тренування', 'Закриття залу'
    ],
    // АКВАЗОНА
    [
      'Ранкове плавання', 'Аквааеробіка', 'Персональні заняття', 
      'Обідня перерва', 'Дитяче плавання', 'Аква-фітнес', 
      'Вечірнє плавання', 'Аква-терапія'
    ],
    // ГРУПОВІ ЗАНЯТТЯ
    [
      'Ранкова йога', 'Пілатес', 'Зумба', 'Обідня перерва', 
      'Кардіо-тренування', 'Функціональний тренінг', 
      'Стретчинг', 'Вечірня йога'
    ],
    // ДИТЯЧИЙ КЛУБ
    [
      'Дитяча гімнастика', 'Творчі майстерні', 'Ігрові заняття', 
      'Обідня перерва', 'Танці для дітей', 'Спортивні ігри', 
      'Розвиваючі заняття', 'Дитяча йога'
    ],
    // ЛІКАР-ТЕРАПЕВТ ТА ДІЄТОЛОГ
    [
      'Консультації лікаря', 'Дієтологічні консультації', 
      'Обстеження', 'Обідня перерва', 'Планування харчування', 
      'Медичні процедури', 'Реабілітація', 'Профілактичні огляди'
    ]
  ];
  
  return templates[zoneIndex] || templates[0];
}

export default SchedulePage;