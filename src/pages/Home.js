import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function Home() {
  const theme = useTheme();

  const features = [
    {
      title: 'Ежемесячные встречи',
      description: 'Регулярные сессии для обмена опытом и поддержки',
    },
    {
      title: 'Выездные мероприятия',
      description: 'Полугодовые и годовые выезды для укрепления связей',
    },
    {
      title: 'Система поддержки',
      description: 'Бади-система и регулярные отчеты о прогрессе',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" component="h1" gutterBottom>
                  Мастермайнд
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Сообщество предпринимателей для взаимного роста и развития
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ mr: 2 }}
                  >
                    Присоединиться
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/about"
                    variant="outlined"
                    color="inherit"
                    size="large"
                  >
                    Узнать больше
                  </Button>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quote Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontStyle: 'italic', mb: 4 }}
          >
            "Честность. Слабость через открытость. Лидерство. Конфиденциальность."
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary">
            Наши ценности
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 