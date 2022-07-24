import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import { SearchForm, FlightsResultsList, LoadingGif, CardMessageData } from '../components';
import {
  flightsResultsSelector,
  isLoadingSelector,
  statusMessageSelector
} from '../store/flights/selectors';

export const SearchFlightsPage = () => {
  const isLoading = useSelector(isLoadingSelector);
  const flightsResults = useSelector(flightsResultsSelector);
  const statusMessage = useSelector(statusMessageSelector);
  return (
    <Grid
      justifyContent="center"
      padding={5}
      sx={{ minHeight: '100vh', backgroundColor: '#f8f5f4' }}>
      <Grid
        item
        border={3}
        borderColor="purple"
        className="shadow"
        xs={3}
        sx={{
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white'
        }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Vuelos
        </Typography>
        <SearchForm />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          marginTop: 5
        }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={8}>
            {isLoading ? (
              <LoadingGif />
            ) : flightsResults.length > 0 ? (
              <FlightsResultsList flights={flightsResults} />
            ) : (
              <CardMessageData message={statusMessage} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
