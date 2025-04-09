import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Home() {
  const features = [
    {
      title: 'Элитное сообщество',
      description: 'Присоединяйтесь к закрытому клубу успешных предпринимателей',
    },
    {
      title: 'Взаимная поддержка',
      description: 'Обменивайтесь опытом и получайте ценные советы от единомышленников',
    },
    {
      title: 'Регулярные встречи',
      description: 'Ежемесячные сессии для обсуждения целей и достижений',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mb: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(0, 188, 212, 0.2) 0%, rgba(26, 26, 46, 0) 70%)',
            borderRadius: '50%',
            zIndex: -1,
          },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #00BCD4 30%, #FF4081 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            fontFamily: '"Playfair Display", serif',
          }}
        >
          BLUE OYSTER
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{ 
            mb: 4, 
            maxWidth: 800,
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
          }}
        >
          Элитное сообщество предпринимателей для взаимного роста и развития
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/about"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #00BCD4 30%, #008BA3 90%)',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                background: 'linear-gradient(45deg, #008BA3 30%, #00BCD4 90%)',
              },
            }}
          >
            Узнать больше
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#00BCD4',
              color: '#00BCD4',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderColor: '#62EFFF',
                backgroundColor: 'rgba(0, 188, 212, 0.1)',
              },
            }}
          >
            Связаться с нами
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #16213E 0%, #1A1A2E 100%)',
                  border: '1px solid rgba(0, 188, 212, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 188, 212, 0.2)',
                    border: '1px solid rgba(0, 188, 212, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 2,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{
                      fontStyle: 'italic',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home; 