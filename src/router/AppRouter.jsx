import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResultsFlightsPage, SearchFlightsPage } from '../pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchFlightsPage />} />

      <Route path="/results" element={<ResultsFlightsPage />} />
    </Routes>
  );
};

export default AppRouter;
