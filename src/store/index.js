import { configureStore } from '@reduxjs/toolkit';
import scheduleReducer from './slices/scheduleSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Для підтримки Redux DevTools
if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  window.__REDUX_DEVTOOLS_EXTENSION__.connect();
}

export default store;
