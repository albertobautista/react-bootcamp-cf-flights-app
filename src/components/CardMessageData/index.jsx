/* eslint-disable react/prop-types */
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

export const CardMessageData = ({ message }) => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ padding: 5 }}>
      <Grid item justifyContent="center" xs={8}>
        <Card sx={{ display: 'flex', padding: 2, justifyContent: 'space-around' }}>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image="./emptyFlights.jpeg"
            alt="Live from space album cover"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <CardContent>
              <Typography variant="h5" fontWeight={'bold'} textAlign="center">
                {message}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
