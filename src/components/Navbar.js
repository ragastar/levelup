import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Главная', path: '/' },
  { name: 'О нас', path: '/about' },
  { name: 'Участники', path: '/members' },
  { name: 'Правила', path: '/rules' },
  { name: 'Ценности', path: '/values' },
  { name: 'Рейтинг', path: '/rating' },
  { name: 'Контакты', path: '/contact' },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'linear-gradient(to right, #1A1A2E, #16213E)',
          boxShadow: '0 4px 20px rgba(0, 188, 212, 0.2)',
          borderBottom: '1px solid rgba(0, 188, 212, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                letterSpacing: '.2rem',
                fontFamily: '"Playfair Display", serif',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  bottom: -4,
                  left: 0,
                  background: 'linear-gradient(to right, #00BCD4, #FF4081)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.3s ease-out',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
                },
              }}
            >
              BLUE OYSTER
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    backgroundColor: '#16213E',
                    backgroundImage: 'linear-gradient(rgba(22, 33, 62, 0.9), rgba(22, 33, 62, 0.9))',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      },
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                letterSpacing: '.2rem',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              BLUE OYSTER
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    mx: 1, 
                    color: 'text.primary', 
                    display: 'block',
                    position: 'relative',
                    fontFamily: '"Playfair Display", serif',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(to right, #00BCD4, #FF4081)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.main',
                      '&::after': {
                        width: '80%',
                      },
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar; 