import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from '@mui/material';
import {
  Group as GroupIcon,
  Event as EventIcon,
  EmojiEvents as EmojiEventsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const features = [
  {
    title: 'Формат встреч',
    icon: <EventIcon color="primary" />,
    description: 'Ежемесячные встречи с 13 до 19 (21) часов, оптимальная длительность 5-6 часов',
    details: [
      'Синхронизация и обмен чувствами',
      'Вопросы из карточек',
      'Отчеты за месяц',
      'Глубокие разборы тем',
      'Постановка целей на месяц',
    ],
  },
  {
    title: 'Выездные мероприятия',
    icon: <GroupIcon color="primary" />,
    description: 'Регулярные выезды для укрепления связей и обмена опытом',
    details: [
      'Полугодовой выезд (3-4 дня)',
      'Годовой выезд с семьями (5-7 дней)',
      'Активный отдых и networking',
      'Совместное планирование',
    ],
  },
  {
    title: 'Система поддержки',
    icon: <EmojiEventsIcon color="primary" />,
    description: 'Комплексная система поддержки и развития участников',
    details: [
      'Бади-система с ежемесячной ротацией',
      'Еженедельные отчеты о прогрессе',
      'Система штрафов для поддержания дисциплины',
      'Отслеживание финансовых показателей',
    ],
  },
  {
    title: 'Для кого этот мастермайнд',
    icon: <PersonIcon color="primary" />,
    description: 'Сообщество для активных предпринимателей, готовых к развитию',
    details: [
      'Предприниматели с опытом ведения бизнеса',
      'Руководители высокого уровня',
      'Люди, ориентированные на рост',
      'Готовые делиться опытом и поддерживать других',
    ],
  },
];

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        О мастермайнде
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Сообщество предпринимателей для взаимного роста и развития
      </Typography>

      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Наша миссия
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: 'auto' }}
        >
          Создать сообщество успешных предпринимателей, где каждый участник может
          получить поддержку, обменяться опытом и развиваться вместе с другими.
          Мы верим в силу взаимной поддержки и коллективного роста.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {feature.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {feature.description}
                </Typography>
                <List>
                  {feature.details.map((detail, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About; 