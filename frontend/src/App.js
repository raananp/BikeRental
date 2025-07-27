import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FullpageHome from './pages/FullpageHome';
import Bikes from './pages/Bikes';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FullpageHome />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
