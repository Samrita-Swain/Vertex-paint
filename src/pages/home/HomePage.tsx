import React from 'react';
import Hero from '../../components/home/Hero';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import ColorInspiration from '../../components/home/ColorInspiration';
import ColorOptions from '../../components/home/ColorOptions';
import CustomerReviews from '../../components/home/CustomerReviews';
import Form from '../Form/Form';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Form />
      <FeaturedProducts />
      <ColorInspiration />
      <ColorOptions />
      {/* <Services /> */}
      {/* <PaintCalculator /> */}
      {/* <LatestStories /> */}
      <CustomerReviews />
    </div>
  );
};

export default HomePage; 