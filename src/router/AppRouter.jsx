import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchFlightsPage } from '../pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchFlightsPage />} />
    </Routes>
  );
};

export default AppRouter;
