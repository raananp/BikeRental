import React from 'react';
import { Container, Typography } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Contact Us</Typography>
      <Typography>Email us at contact@bikerental.com</Typography>
    </Container>
  );
}

export default Contact;