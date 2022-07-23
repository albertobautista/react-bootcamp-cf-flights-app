import { Grid, Typography } from '@mui/material';
import React from 'react';

import { SearchForm } from '../components';

export const SearchFlightsPage = () => {
  return (
    <Grid justifyContent="center" padding={5} sx={{ minHeight: '100vh' }}>
      <Grid
        item
        border={5}
        borderColor="purple"
        className="shadow"
        xs={3}
        sx={{
          padding: 3,
          borderRadius: 2
        }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Vuelos
        </Typography>
        <SearchForm />
      </Grid>
    </Grid>
  );
};
