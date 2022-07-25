import { configureStore } from '@reduxjs/toolkit';
import { flightsSlice } from '../flights/flightsSlice';

export const store = configureStore({
  reducer: {
    flights: flightsSlice.reducer
  }
});
