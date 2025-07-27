import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bike Rental
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/bikes">Bikes</Button>
        <Button color="inherit" component={Link} to="/booking">Booking</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;