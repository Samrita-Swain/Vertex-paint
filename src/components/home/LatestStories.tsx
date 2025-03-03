import React from 'react';
import { Link } from 'react-router-dom';
import { latestStories } from '../../data/content';
import { FaArrowRight } from "react-icons/fa";

const LatestStories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-[40px] font-bold text-center  gradient-text">Latest Stories</h2>
        <p className="mb-[35px] text-gray-600 text-[20px]">
          Get inspired with the latest trends and expert advice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestStories.map(story => (
            <article 
              key={story.id}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{story.date}</span>
                  <Link 
                    to={`/stories/${story.id}`}
                    className="px-2 py-2 rounded-lg text-[17px] font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940] flex flex-row gap-2 items-center" style={{transition: "0.5s"}}
                  >
                    Read More <FaArrowRight className="icon"/>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/stories"
            className="px-8 py-3 rounded-lg text-lg font-medium bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940]" style={{transition: "0.5s"}}
          >
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestStories; 