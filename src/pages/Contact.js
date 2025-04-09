import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import TelegramIcon from '@mui/icons-material/Telegram';

const MotionBox = motion(Box);

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Свяжитесь с нами
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 6 }}
      >
        Заполните форму, чтобы присоединиться к нашему сообществу
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Информация о присоединении
              </Typography>
              <Typography variant="body1" paragraph>
                Для присоединения к мастермайнду необходимо:
              </Typography>
              <Box component="ul" sx={{ mb: 4 }}>
                <Typography component="li" variant="body1" paragraph>
                  • Иметь опыт ведения бизнеса или управленческую позицию
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  • Быть готовым к регулярному участию во встречах
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  • Соблюдать правила конфиденциальности
                </Typography>
                <Typography component="li" variant="body1" paragraph>
                  • Внести вступительный взнос
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Контакты организаторов
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TelegramIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Telegram: @nick_tutu
                </Typography>
              </Box>
            </Paper>
          </MotionBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Ваше имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Ваш бизнес"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Сообщение"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Отправить заявку
                </Button>
              </form>
            </Paper>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact; 