import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    primary: {
      main: purple[900]
    },
    secondary: {
      main: '#543884'
    },
    error: {
      main: red.A400
    }
  }
});
