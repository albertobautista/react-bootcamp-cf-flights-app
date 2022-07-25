/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { getDate, getDuration, getTime } from '../../utils';
import { useSelector } from 'react-redux';
import { flightsAircraftsSelector, flightsCarriersSelector } from '../../redux/flights/selectors';

export const SegmentItem = ({ segment }) => {
  const flightsAircrafts = useSelector(flightsAircraftsSelector);
  const flightsCarriers = useSelector(flightsCarriersSelector);

  return (
    <Grid
      container
      marginY={3}
      justifyContent="center"
      border={1}
      borderRadius={2}
      borderColor="#dbd8d6">
      <Grid container margin={3} borderBottom={1} borderColor="#dbd8d6" flex alignItems="center">
        <Grid item xs={2} sm={2} md={1}>
          <img src={`/Square/${segment.carrierCode}.png`} width={'40px'} />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Typography fontWeight="bold" fontSize="13px">
            {flightsCarriers[segment.carrierCode]}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={9} textAlign="right">
          <Typography fontWeight="bold" fontSize="13px">
            Vuelo {segment.number} - {flightsAircrafts[segment.aircraft.code]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" marginY={2}>
        <Grid item xs={12} sm={5} md={3} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {segment.departure.iataCode}
          </Typography>
          <Typography>{getDate(segment.departure.at)}</Typography>
          <Typography fontWeight="bold">{getTime(segment.departure.at)}</Typography>
          <Typography>
            Terminal: {segment.departure.terminal ? segment.departure.terminal : 'Desconocida'}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={1} textAlign="center">
          <FlightTakeoffIcon fontSize="large" />
          <Typography>Duracion:</Typography>
          <Typography fontWeight="bold" fontSize="15px">
            {getDuration(segment.duration)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={3} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {segment.arrival.iataCode}
          </Typography>
          <Typography>{getDate(segment.arrival.at)}</Typography>
          <Typography fontWeight="bold">{getTime(segment.arrival.at)}</Typography>
          <Typography>
            Terminal: {segment.arrival.terminal ? segment.arrival.terminal : 'Desconocida'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
