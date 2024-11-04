import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import MyForm from '../components/Login';

const Login: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#f0f4f8',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sisselogimine
        </Typography>
        <MyForm />
      </Box>
    </Container>
  );
};

export default Login;
