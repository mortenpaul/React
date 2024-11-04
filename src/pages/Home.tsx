import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     sx={{ padding: 4, backgroundColor: '#f0f4f8', borderRadius: 2, boxShadow: 3 }}
    >
      <Box
        p={4}
        borderRadius={2}
        boxShadow={3}
        textAlign="center"
        sx={{ backgroundColor: '#ffffff', maxWidth: 500 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Tere tulemast!
        </Typography>
        <Typography variant="body1">
          See on avaleht!
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
