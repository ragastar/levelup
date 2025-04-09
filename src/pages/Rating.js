import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  useTheme,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const members = [
  {
    name: 'Николай Кузнецов',
    lastAction: 'Отчет за неделю',
    points: 120,
    level: 'Эксперт',
    achievements: ['Активный участник', 'Лидер обсуждений'],
  },
  {
    name: 'Сергей',
    lastAction: 'Презентация проекта',
    points: 95,
    level: 'Профессионал',
    achievements: ['Лучший докладчик'],
  },
  {
    name: 'Демьян Иванец',
    lastAction: 'Менторская сессия',
    points: 110,
    level: 'Эксперт',
    achievements: ['Ментор месяца'],
  },
  {
    name: 'Михаил Левин',
    lastAction: 'Воркшоп по геймификации',
    points: 105,
    level: 'Профессионал',
    achievements: ['Инноватор'],
  },
];

const achievements = [
  {
    title: 'Активный участник',
    description: 'Регулярное посещение встреч и активное участие в обсуждениях',
    points: 20,
  },
  {
    title: 'Лидер обсуждений',
    description: 'Инициация и ведение продуктивных дискуссий',
    points: 15,
  },
  {
    title: 'Лучший докладчик',
    description: 'Высокое качество презентаций и выступлений',
    points: 25,
  },
  {
    title: 'Ментор месяца',
    description: 'Эффективная поддержка других участников',
    points: 30,
  },
  {
    title: 'Инноватор',
    description: 'Внедрение новых идей и подходов',
    points: 20,
  },
];

function Rating() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Рейтинг участников
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Отслеживание прогресса и достижений участников
      </Typography>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TableContainer component={Paper} sx={{ mb: 6 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Участник</TableCell>
                <TableCell>Последнее действие</TableCell>
                <TableCell align="center">Баллы</TableCell>
                <TableCell align="center">Уровень</TableCell>
                <TableCell>Достижения</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {member.name}
                  </TableCell>
                  <TableCell>{member.lastAction}</TableCell>
                  <TableCell align="center">{member.points}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={member.level}
                      color={member.level === 'Эксперт' ? 'primary' : 'secondary'}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {member.achievements.map((achievement, i) => (
                        <Chip
                          key={i}
                          label={achievement}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MotionBox>

      <Typography variant="h5" gutterBottom align="center" sx={{ mt: 8 }}>
        Система достижений
      </Typography>
      <Grid container spacing={3}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {achievement.description}
                </Typography>
                <Chip
                  label={`${achievement.points} баллов`}
                  color="primary"
                  size="small"
                />
              </Paper>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Rating; 