/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { FlightResultsItem } from '../FlightResultsItem';

export const FlightsResultsList = ({ flights }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
        Resultados: 1
      </Typography>
      {flights.map((flight, index) => (
        <FlightResultsItem
          key={index}
          {...flight}
          onChange={handleChange(flight.id)}
          expanded={expanded === flight.id}
        />
      ))}
    </>
  );
};
