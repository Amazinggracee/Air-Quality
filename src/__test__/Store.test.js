import { configureStore } from '@reduxjs/toolkit';
import AirSlice from '../redux/airquality';
import LocationSlice from '../redux/getLocation';
import CitiesSlice from '../redux/cities';

describe('store', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        AirSlice,
        LocationSlice,
        CitiesSlice,
      },
    });
  });

  it('should have initial state', () => {
    const initialState = store.getState();
    expect(initialState.AirSlice).toEqual({ air: null, error: '' });
  });
});
