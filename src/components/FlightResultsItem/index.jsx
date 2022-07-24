/* eslint-disable react/prop-types */
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FlightIcon from '@mui/icons-material/Flight';
import { SegmentItem } from '../SegmentItem';
import { getDate, getDuration } from '../../utils';
import { currencyFormat } from '../../utils/currency';

export const FlightResultsItem = (props) => {
  const {
    numberOfBookableSeats,
    price: { total },
    itineraries,
    lastTicketingDate,
    id,
    expanded,
    onChange
  } = props;
  const { segments, duration } = itineraries[0];

  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        sx={{ backgroundColor: '#F7F7F7' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}bh-content`}
        id={`panel${id}bh-header`}>
        <Grid container>
          <Grid item xs={12} sm={2} md={1} marginTop={2} textAlign="center">
            <FlightIcon fontSize="large" />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Typography>Boletos disponibles: {numberOfBookableSeats}</Typography>
            <Typography>Ultimo día para reservar: {getDate(lastTicketingDate)}</Typography>
            <Typography fontWeight="bold">Duración: {getDuration(duration)}</Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={6} textAlign="right" marginTop={2}>
            <Typography variant="h6" fontWeight="bold">
              {currencyFormat(total)}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={{ borderTop: '1px solid rgba(0, 0, 0, .125)' }}>
        {segments.map((segment, index) => (
          <SegmentItem key={index} segment={segment} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
