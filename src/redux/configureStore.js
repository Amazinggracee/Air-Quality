import { configureStore } from '@reduxjs/toolkit';
import AirSlice from './airquality';
import LocationSlice from './getLocation';
import CitiesSlice from './cities';

const store = configureStore({
  reducer: {
    AirSlice,
    LocationSlice,
    CitiesSlice,
  },
});

export default store;
