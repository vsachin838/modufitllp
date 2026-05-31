import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23336D', // Deep Navy Blue
      light: '#3C4D8F',
      dark: '#16204B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C29F5D', // Warm Gold
      light: '#DCC393',
      dark: '#9A7D42',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
      alternative: '#F4F6F9', // Subtle grayish-blue background
      warm: '#FAF7F0', // Soft warm white/cream background
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#555555',
      light: '#777777',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '8px 24px',
          transition: 'all 0.3s ease-in-out',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(35, 51, 109, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #23336D 0%, #3C4D8F 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #16204B 0%, #23336D 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #C29F5D 0%, #DCC393 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #9A7D42 0%, #C29F5D 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export default theme;
