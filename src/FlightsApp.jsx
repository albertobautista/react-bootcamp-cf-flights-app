import AppRouter from './router/AppRouter';
import { AppTheme } from './theme';

const FlightsApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};

export default FlightsApp;
