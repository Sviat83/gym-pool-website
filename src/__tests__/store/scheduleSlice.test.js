import scheduleReducer, {
  setActiveZone,
  setViewMode,
  setCurrentDate,
  selectActiveZone,
  selectViewMode,
  selectCurrentDate
} from '../../store/slices/scheduleSlice';

describe('Schedule Slice', () => {
  const initialState = {
    activeZone: 'gym',
    viewMode: 'week',
    currentDate: new Date('2025-09-14').toISOString(),
    scheduleData: {},
    zones: {}
  };

  it('should handle initial state', () => {
    expect(scheduleReducer(undefined, { type: 'unknown' })).toEqual({
      activeZone: 'gym',
      viewMode: 'week',
      currentDate: expect.any(String),
      scheduleData: expect.any(Object),
      zones: expect.any(Object)
    });
  });

  it('should handle setActiveZone', () => {
    const actual = scheduleReducer(initialState, setActiveZone('aqua'));
    expect(actual.activeZone).toEqual('aqua');
  });

  it('should handle setViewMode', () => {
    const actual = scheduleReducer(initialState, setViewMode('month'));
    expect(actual.viewMode).toEqual('month');
  });

  it('should handle setCurrentDate', () => {
    const newDate = new Date('2025-10-01').toISOString();
    const actual = scheduleReducer(initialState, setCurrentDate(newDate));
    expect(actual.currentDate).toEqual(newDate);
  });

  describe('Selectors', () => {
    const state = { schedule: initialState };

    it('should select active zone', () => {
      expect(selectActiveZone(state)).toEqual('gym');
    });

    it('should select view mode', () => {
      expect(selectViewMode(state)).toEqual('week');
    });

    it('should select current date', () => {
      expect(selectCurrentDate(state)).toEqual(initialState.currentDate);
    });
  });
});
