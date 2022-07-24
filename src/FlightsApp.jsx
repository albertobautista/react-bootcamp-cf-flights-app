import { useEffect } from 'react';
import { getToken } from './api/flightsApi';
import AppRouter from './router/AppRouter';
import { AppTheme } from './theme';

const FlightsApp = () => {
  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};

export default FlightsApp;
