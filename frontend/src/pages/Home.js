import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const bikes = [
  { id: 1, name: 'Honda CB650R', image: 'https://via.placeholder.com/300?text=CB650R' },
  { id: 2, name: 'Yamaha R3', image: 'https://via.placeholder.com/300?text=Yamaha+R3' },
  { id: 3, name: 'Kawasaki Z400', image: 'https://via.placeholder.com/300?text=Z400' },
];

function Home() {
  return (
    <Grid container spacing={4}>
      {bikes.map((bike) => (
        <Grid item xs={12} sm={6} md={4} key={bike.id}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={bike.image}
              alt={bike.name}
            />
            <CardContent>
              <Typography variant="h6">{bike.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;