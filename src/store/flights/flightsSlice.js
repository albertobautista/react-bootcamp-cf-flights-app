import { createSlice } from '@reduxjs/toolkit';
import { fetchFlights } from './thunks';

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    isLoading: false,
    flightsResults: [],
    aircrafts: {},
    carriers: {},
    fullResults: [],
    flightsCount: 0,
    error: {},
    statusMessage: 'Favor de llenar la información para iniciar la búsqueda'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data.length > 0) {
          state.flightsResults = action.payload.data;
          state.fullResults = action.payload;
          state.aircrafts = action.payload.dictionaries.aircraft;
          state.carriers = action.payload.dictionaries.carriers;
          state.flightsCount = action.payload.meta.count;
        }
        state.statusMessage = 'No se econtraron resultados';
        state.error = {};
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.statusMessage = action.payload.message;
        state.error = action.payload;
      });
  }
});
