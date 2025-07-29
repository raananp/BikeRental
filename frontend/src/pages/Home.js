import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Bike Rental
        </Typography>
        <Typography>
          Enjoy your ride with our amazing fleet!
        </Typography>
      </Container>
    </motion.div>
  );
}

export default Home;