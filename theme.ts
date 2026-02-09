'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6F4E37',
      light: '#8B6914',
      dark: '#4A3728',
      contrastText: '#fff',
    },
    secondary: {
      main: '#C4A77D',
      light: '#D4BC8A',
      dark: '#8B7355',
      contrastText: '#fff',
    },
    background: {
      default: '#F5F0E8',
      paper: '#FFFEF9',
    },
  },
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(111,78,55,0.12)',
          border: '1px solid rgba(111,78,55,0.15)',
        },
      },
    },
  },
});

export default theme;
