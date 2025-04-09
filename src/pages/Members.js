import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const members = [
  {
    name: 'Николай Кузнецов',
    age: 36,
    location: 'Москва',
    business: 'Товарка на WB (подарочная тематика, товары для взрослых, сезонные товары)',
    revenue: '140 млн. за 2024 г.',
    interests: ['Путешествия', 'Спорт', 'Музыка', 'Инвестиции'],
    image: '/фотографии участников/Николай Кузнецов.jpg'
  },
  {
    name: 'Сергей',
    age: 38,
    location: 'Москва',
    business: 'Строительный бизнес, инвестиционные проекты',
    interests: ['Плавание', 'Футбол', 'Рыбалка', 'Путешествия'],
    image: '/фотографии участников/Сергей.jpg'
  },
  {
    name: 'Демьян Иванец',
    age: 36,
    business: 'Стик Арт и Металлити',
    revenue: '50+ млн. руб/год',
    interests: ['Футбол', 'Спорт', 'Путешествия'],
    image: '/фотографии участников/Демьян Иванец.jpg'
  },
  {
    name: 'Михаил Левин',
    age: 34,
    business: 'Neon Boutique',
    interests: ['Танцы', 'Спорт', 'Геймификация'],
    image: '/фотографии участников/Михаил Левин.jpg'
  }
];

function Members() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(45deg, #9c27b0 30%, #ffd700 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
      >
        Участники сообщества
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Познакомьтесь с успешными предпринимателями, которые являются частью нашего элитного сообщества
      </Typography>

      <Grid container spacing={4}>
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
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
                  background: 'linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)',
                  border: '1px solid rgba(255, 215, 0, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{ 
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'secondary.main',
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {member.age} лет {member.location && `• ${member.location}`}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                    {member.business}
                  </Typography>
                  {member.revenue && (
                    <Typography
                      variant="body2"
                      color="secondary.main"
                      sx={{ mb: 2, fontWeight: 500 }}
                    >
                      {member.revenue}
                    </Typography>
                  )}
                  <Box sx={{ mt: 2 }}>
                    {member.interests.map((interest, i) => (
                      <Chip
                        key={i}
                        label={interest}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: 'rgba(156, 39, 176, 0.2)',
                          color: 'secondary.main',
                          border: '1px solid rgba(255, 215, 0, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(156, 39, 176, 0.3)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Members; 