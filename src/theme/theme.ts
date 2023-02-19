import { blue, green, orange, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[500],
      100: blue[100],
      200: blue[200],
      300: blue[300],
      400: blue[400],
      500: blue[500],
      600: blue[600],
      700: blue[700],
      800: blue[800],
      900: blue[900],
    },
    secondary: {
      main: purple[500],
    },
    success: {
      main: green[200],
    },
    warning: {
      main: orange[300],
    },
    info: {
      main: blue[100],
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
});

export default theme;
