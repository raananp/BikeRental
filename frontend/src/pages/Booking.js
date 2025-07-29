import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Booking() {
  return (
    <Container sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" gutterBottom>
          Book Your Ride
        </Typography>
        <Typography>
          Coming soon: An easy and fast way to reserve your favorite bike online.
        </Typography>
      </motion.div>
    </Container>
  );
}

export default Booking;