import React from 'react';
import { Container, Grid } from '@mui/material';
import BikeCard from '../components/BikeCard';

const dummyBikes = [
  {
    image: 'https://via.placeholder.com/300x140',
    title: 'Honda 650F',
    description: 'Comfortable sport touring bike.',
  },
  {
    image: 'https://via.placeholder.com/300x140',
    title: 'Yamaha MT-07',
    description: 'Naked bike with great torque and agility.',
  },
];

function Bikes() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {dummyBikes.map((bike, i) => (
          <Grid item key={i}>
            <BikeCard {...bike} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Bikes;