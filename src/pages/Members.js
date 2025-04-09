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
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Участники мастермайнда
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Знакомьтесь с нашими участниками - успешными предпринимателями
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
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {member.age} лет {member.location && `• ${member.location}`}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {member.business}
                  </Typography>
                  {member.revenue && (
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ mb: 2 }}
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
                        sx={{ mr: 1, mb: 1 }}
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