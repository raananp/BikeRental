import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 1,
    title: 'Welcome to Pattaya Bike Rental',
    subtitle: 'Brand New Big Bikes. Ride Anywhere in Thailand.',
    image: '/images/bike1.jpg',
  },
  {
    id: 2,
    title: 'Ride in Style',
    subtitle: 'From sport to cruiser, we’ve got your dream ride.',
    image: '/images/bike2.jpg',
  },
  {
    id: 3,
    title: 'Full Insurance, Zero Worries',
    subtitle: 'Explore with confidence. We’ve got you covered.',
    image: '/images/bike3.jpg',
  },
];

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      {sections.map((section) => (
        <Box
          key={section.id}
          sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            px: 2,
          }}
        >
          <motion.img
            src={section.image}
            alt={section.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // scroll-in every time
            style={{
              width: '60%',
              maxWidth: '600px',
              borderRadius: '20px',
              marginBottom: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }} // scroll-in every time
            style={{ textAlign: 'center', maxWidth: '700px' }}
          >
            <Typography variant="h4" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="h6">{section.subtitle}</Typography>
          </motion.div>
        </Box>
      ))}
    </Box>
  );
};

export default Home;