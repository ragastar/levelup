import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const values = [
  {
    title: 'Честность',
    description: 'Открытость в общении и честность в оценках - основа доверия в группе',
    icon: '🤝',
  },
  {
    title: 'Слабость через открытость',
    description: 'Признание своих слабостей и готовность работать над ними - путь к росту',
    icon: '💪',
  },
  {
    title: 'Лидерство',
    description: 'Развитие лидерских качеств и принятие ответственности за свои действия',
    icon: '👑',
  },
  {
    title: 'Конфиденциальность',
    description: 'Сохранение приватности информации, обсуждаемой в группе',
    icon: '🔒',
  },
  {
    title: 'Разные ниши',
    description: 'Разнообразие бизнес-направлений для обогащения опыта всех участников',
    icon: '🎯',
  },
];

function Values() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Ценности мастермайнда
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Принципы, которые объединяют наше сообщество
      </Typography>

      <Grid container spacing={4}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '4rem',
                      mb: 2,
                    }}
                  >
                    {value.icon}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Как мы применяем наши ценности
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Наши ценности - это не просто слова, а принципы, которые мы применяем в каждом аспекте нашей работы.
          Они помогают нам создавать безопасное пространство для роста, где каждый участник может быть собой,
          делиться своими успехами и неудачами, и получать поддержку от сообщества.
        </Typography>
      </Box>
    </Container>
  );
}

export default Values; 