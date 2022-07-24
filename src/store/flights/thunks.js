import { createAsyncThunk } from '@reduxjs/toolkit';
import flightsApi from '../../api/flightsApi';

export const fetchFlights = createAsyncThunk(
  'flights',
  async (datos, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {
        originLocationCode,
        destinationLocationCode,
        departureDate,
        returnDate,
        adults,
        children
      } = datos;

      const params = {
        max: 15,
        originLocationCode,
        destinationLocationCode,
        departureDate,
        adults,
        ...(children > 0 && { children }),
        ...(returnDate !== '' && { returnDate })
      };

      const response = await flightsApi.get('/v2/shopping/flight-offers', {
        params
      });

      console.log('RESPONSEEE', response);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log('ERROR', error);
      return rejectWithValue({
        isError: true,
        message: error.message
      });
    }
  }
);
