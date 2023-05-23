import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getQuality from '../APIs/airApi';
import getGeoLocation from '../APIs/geoLocationApi';

const GET_AIR = 'POLLUTIONCHECK/airquality/GET_AIR';
const initialState = {
  air: null,
  error: '',
};
export const getAir = createAsyncThunk(GET_AIR, async (location) => {
  // eslint-disable-next-line max-len
  const response = await getGeoLocation(location).then((response) => getQuality(response[0].lat, response[0].lon));
  return response;
});

const AirSlice = createSlice({
  name: 'AIR',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAir.fulfilled, (state, action) => ({
        ...state,
        air: action.payload,
      }))
      .addCase(getAir.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export const { resetState } = AirSlice.actions;
export default AirSlice.reducer;
