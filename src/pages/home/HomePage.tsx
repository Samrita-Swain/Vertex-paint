import React from 'react';
import Hero from '../../components/home/Hero';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import ColorInspiration from '../../components/home/ColorInspiration';
import Services from '../../components/home/Services';
// import PaintCalculator from '../../components/home/PaintCalculator';
import LatestStories from '../../components/home/LatestStories';
import ColorOptions from '../../components/home/ColorOptions';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <ColorInspiration />
      <ColorOptions />
      <Services />
      {/* <PaintCalculator /> */}
      <LatestStories />
    </div>
  );
};

export default HomePage; 