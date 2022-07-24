import { Grid, Typography } from '@mui/material';
import React from 'react';

import { SearchForm, FlightsResultsList } from '../components';
import { flightsData } from '../data/flights';

export const SearchFlightsPage = () => {
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
          <Grid item xs={10}>
            {/* <LoadingGif /> */}
            <FlightsResultsList flights={flightsData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
