import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Rules from './pages/Rules';
import Values from './pages/Values';
import Rating from './pages/Rating';
import Contact from './pages/Contact';

// Create a theme inspired by Blue Oyster style
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00BCD4', // Cyan
      light: '#62EFFF',
      dark: '#008BA3',
    },
    secondary: {
      main: '#FF4081', // Pink
      light: '#FF79B0',
      dark: '#C60055',
    },
    background: {
      default: '#1A1A2E',
      paper: '#16213E',
    },
    text: {
      primary: '#E6E6E6',
      secondary: 'rgba(230, 230, 230, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.02em',
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontWeight: 600,
      fontFamily: '"Playfair Display", serif',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontFamily: '"Roboto", sans-serif',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 12,
          border: '1px solid rgba(0, 188, 212, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'linear-gradient(145deg, #16213E 0%, #1A1A2E 100%)',
          border: '1px solid rgba(0, 188, 212, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(0, 188, 212, 0.2)',
            border: '1px solid rgba(0, 188, 212, 0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00BCD4 30%, #008BA3 90%)',
          boxShadow: '0 4px 14px rgba(0, 188, 212, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #008BA3 30%, #00BCD4 90%)',
          },
        },
        outlined: {
          borderColor: '#00BCD4',
          color: '#00BCD4',
          '&:hover': {
            borderColor: '#62EFFF',
            backgroundColor: 'rgba(0, 188, 212, 0.1)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/values" element={<Values />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 