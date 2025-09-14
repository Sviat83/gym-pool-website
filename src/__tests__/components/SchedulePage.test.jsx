import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from '../../store/slices/scheduleSlice';
import SchedulePage from '../../components/SchedulePage/SchedulePage';

// Створюємо тестовий store
const createTestStore = (preloadedState) => {
  return configureStore({
    reducer: {
      schedule: scheduleReducer,
    },
    preloadedState,
  });
};

// Обгортка для тестування компонента з Redux
const renderWithRedux = (
  component,
  { preloadedState = {}, store = createTestStore(preloadedState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('SchedulePage Component', () => {
  it('renders without crashing', () => {
    renderWithRedux(<SchedulePage />);
    expect(screen.getByText(/Розклад/i)).toBeInTheDocument();
  });

  it('shows correct zone name when zone is selected', () => {
    const preloadedState = {
      schedule: {
        activeZone: 'gym',
        viewMode: 'week',
        currentDate: new Date().toISOString(),
        scheduleData: {},
        zones: {
          gym: 'ТРЕНАЖЕРНИЙ ЗАЛ',
          aqua: 'АКВАЗОНА',
          group: 'ГРУПОВІ ЗАНЯТТЯ',
          kids: 'ДИТЯЧИЙ КЛУБ',
          doctor: 'ЛІКАР-ТЕРАПЕВТ ТА ДІЄТОЛОГ'
        }
      }
    };
    renderWithRedux(<SchedulePage />, { preloadedState });
    const aquaButton = screen.getByText('АКВАЗОНА');
    fireEvent.click(aquaButton);
    expect(screen.getByText('Розклад - АКВАЗОНА')).toBeInTheDocument();
  });

  it('changes view mode when clicking view mode buttons', () => {
    const preloadedState = {
      schedule: {
        activeZone: 'gym',
        viewMode: 'week',
        currentDate: new Date().toISOString()
      }
    };
    const { store } = renderWithRedux(<SchedulePage />, { preloadedState });
    const dayViewButton = screen.getByText(/день/i);
    fireEvent.click(dayViewButton);
    expect(store.getState().schedule.viewMode).toBe('day');
  });

  it('navigates through dates correctly', () => {
    renderWithRedux(<SchedulePage />);
    const prevButton = screen.getByLabelText(/попередній/i);
    const nextButton = screen.getByLabelText(/наступний/i);
    
    const initialDate = screen.getByText(/\d{1,2}\s\w+\s\d{4}/);
    fireEvent.click(nextButton);
    // Перевіряємо, що дата змінилась
    expect(screen.getByText(/\d{1,2}\s\w+\s\d{4}/)).not.toEqual(initialDate);
  });

  it('displays schedule data correctly', () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const preloadedState = {
      schedule: {
        activeZone: 'gym',
        viewMode: 'day',
        currentDate: new Date().toISOString(),
        scheduleData: {
          gym: {
            [currentDate]: {
              '09:00': {
                title: 'Ранкове тренування',
                trainer: 'Іван Петренко',
                duration: 60
              }
            }
          }
        }
      }
    };
    
    renderWithRedux(<SchedulePage />, { preloadedState });
    expect(screen.getByText('Ранкове тренування')).toBeInTheDocument();
    expect(screen.getByText('Іван Петренко')).toBeInTheDocument();
  });
});
