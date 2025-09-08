export const formatDate = (date) => {
  return date.toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const getWeekDays = (date) => {
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
  startOfWeek.setDate(diff);

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    weekDays.push(day);
  }
  return weekDays;
};

export const getDateString = (currentDate, viewMode) => {
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

export const getMonthDays = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay() + 1);
  
  const days = [];
  for (let i = 0; i < 42; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    days.push(day);
  }
  return days;
};
