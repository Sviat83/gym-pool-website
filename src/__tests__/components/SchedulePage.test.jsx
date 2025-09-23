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
  const defaultState = {
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

  it('renders without crashing', () => {
    renderWithRedux(<SchedulePage />, { preloadedState: defaultState });
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
    renderWithRedux(<SchedulePage />, { preloadedState: defaultState });
    const prevButton = screen.getByText('←');
    const nextButton = screen.getByText('→');
    
    const initialDate = screen.getByText(/Тиждень \d{1,2} \w+ - \d{1,2} \w+ \d{4}/);
    fireEvent.click(nextButton);
    // Перевіряємо, що дата змінилась
    const newDate = screen.getByText(/Тиждень \d{1,2} \w+ - \d{1,2} \w+ \d{4}/);
    expect(newDate.textContent).not.toBe(initialDate.textContent);
  });

  it('displays schedule data correctly', () => {
    const currentDate = new Date().toISOString();
    const preloadedState = {
      schedule: {
        ...defaultState.schedule,
        activeZone: 'gym',
        viewMode: 'day',
        currentDate: currentDate,
        scheduleData: {
          gym: {
            '09:00': 'Ранкове тренування'
          }
        }
      }
    };
    
    renderWithRedux(<SchedulePage />, { preloadedState });
    expect(screen.getByText('Ранкове тренування')).toBeInTheDocument();
  });
});
