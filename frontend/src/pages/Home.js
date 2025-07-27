import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Welcome to Bike Rental</Typography>
      <Typography>Enjoy your ride with our amazing fleet!</Typography>
    </Container>
  );
}

export default Home;