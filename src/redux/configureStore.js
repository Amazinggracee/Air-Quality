import { configureStore } from '@reduxjs/toolkit';
import AirSlice from './airquality/airquality';
import LocationSlice from './getLocation/getLocation';
import CitiesSlice from './cities/cities';

const store = configureStore({
  reducer: {
    AirSlice,
    LocationSlice,
    CitiesSlice,
  },
});

export default store;
