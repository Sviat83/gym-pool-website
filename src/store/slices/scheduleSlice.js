import { createSlice } from '@reduxjs/toolkit';
import { zones, scheduleData as initialScheduleData } from '../../components/SchedulePage/data/scheduleData';

const initialState = {
  activeZone: 'gym',
  viewMode: 'week',
  currentDate: new Date().toISOString(),
  scheduleData: initialScheduleData,
  zones: zones
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setActiveZone: (state, action) => {
      state.activeZone = action.payload;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    updateSchedule: (state, action) => {
      const { zone, schedule } = action.payload;
      state.scheduleData[zone] = schedule;
    }
  }
});

// Action creators
export const { 
  setActiveZone, 
  setViewMode, 
  setCurrentDate, 
  updateSchedule 
} = scheduleSlice.actions;

// Selectors
export const selectActiveZone = (state) => state.schedule.activeZone;
export const selectViewMode = (state) => state.schedule.viewMode;
export const selectCurrentDate = (state) => state.schedule.currentDate;
export const selectScheduleData = (state) => state.schedule.scheduleData;
export const selectZones = (state) => state.schedule.zones;
export const selectCurrentZoneSchedule = (state) => {
  const { scheduleData, activeZone } = state.schedule;
  return scheduleData && scheduleData[activeZone] ? scheduleData[activeZone] : {};
};

export default scheduleSlice.reducer;
