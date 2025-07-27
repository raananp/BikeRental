import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Bike Rental
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enjoy your ride with our amazing fleet!
      </Typography>
      <Button variant="contained" color="primary">
        Book Now
      </Button>
    </Container>
  );
}

export default App;