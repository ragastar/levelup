import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Event as EventIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const rules = [
  {
    title: 'Основные требования',
    icon: <CheckCircleIcon color="primary" />,
    items: [
      'Проактивность: обязательное присутствие, вовлеченность, готовность делиться опытом, поддержка',
      'Конфиденциальность: всё обсуждаемое остаётся исключительно внутри группы',
      'Ответственность: Изначально на входе скидываем по 10к в банк казначею',
      'Предпринимательский опыт: свой бизнес, партнёрство или высокая управленческая роль',
      'Развитие: ориентация на рост, постановка и проработка целей',
    ],
  },
  {
    title: 'Формат встреч',
    icon: <EventIcon color="primary" />,
    items: [
      'Встречи раз в месяц с 13 до 19 (21) часов',
      'Оптимальная длительность 5-6 часов',
      'Возможность дополнительной активности после встречи',
    ],
  },
  {
    title: 'Выездные мероприятия',
    icon: <GroupIcon color="primary" />,
    items: [
      'Полугодовой выезд: 3-4 дня для участников',
      'Годовой выезд: 5-7 дней с семьями',
      'Ежегодная смена организатора выезда',
    ],
  },
  {
    title: 'Система отчетности',
    icon: <AssignmentIcon color="primary" />,
    items: [
      'Еженедельные отчеты до воскресенья 23:59:59',
      'Свободный формат: что сделано, план на след неделю, инсайты',
    ],
  },
  {
    title: 'Штрафы и санкции',
    icon: <AttachMoneyIcon color="primary" />,
    items: [
      'Штраф за недельный отчет: 2,5к',
      'Прогулы: 1 официальный, 1 платный 25к',
      'Опоздание: 5к до 10 мин, 10к до 20 мин',
      'Больше двух прогулов за год - исключение',
    ],
  },
];

function Rules() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Правила мастермайнда
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Структурированные правила и требования к участникам
      </Typography>

      <Grid container spacing={4}>
        {rules.map((section, index) => (
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
                  {section.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 2 }}>
                    {section.title}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <List>
                  {section.items.map((item, i) => (
                    <ListItem key={i} sx={{ py: 1 }}>
                      <ListItemText primary={item} />
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

export default Rules; 