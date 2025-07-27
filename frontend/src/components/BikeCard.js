import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function BikeCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default BikeCard;