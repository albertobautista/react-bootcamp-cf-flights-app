/* eslint-disable react/prop-types */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '.';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
