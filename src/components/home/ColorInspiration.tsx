import React from 'react';
import { Link } from 'react-router-dom';
import { colorInspirations } from '../../data/content';

const ColorInspiration = () => {
  return (
    <section className="py-16 bg-[#fff5eb]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center  mb-2 gradient-text">Color Inspiration</h2>
        <p className="mb-[35px] text-gray-600 text-md font-normal text-center">
          Discover trending color combinations and get inspired for your next home makeover
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colorInspirations.map(inspiration => (
            <div 
              key={inspiration.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5]">
                <img 
                  src={inspiration.image}
                  alt={inspiration.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-medium mb-2">{inspiration.title}</h3>
                  <p className="text-white/80 mb-4 text-sm font-normal">{inspiration.description}</p>
                  <Link 
                    to={`/inspiration/${inspiration.id}`}
                    className="inline-block text-md font-normal bg-white text-gray-900 px-5 py-2 rounded-lg transition-colors hover:bg-[#fcc740]" style={{transition: "0.5s"}}
                  >
                    Explore Colors
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link 
            to="/inspiration"
            className="px-8 py-3 rounded-lg text-lg font-medium inline-block bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940]" style={{transition: "0.5s"}}
          >
            View All Inspirations
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ColorInspiration; 