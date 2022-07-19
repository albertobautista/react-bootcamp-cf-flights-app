import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResultsFlightsPage from '../pages/ResultsFlightsPage';
import SearchFlightsPage from '../pages/SearchFlightsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchFlightsPage />} />

      <Route path="/results" element={<ResultsFlightsPage />} />
    </Routes>
  );
};

export default AppRouter;
