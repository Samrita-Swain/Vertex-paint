import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "John Doe",
    review: "Amazing service! Highly recommend to everyone.",
    rating: 5,
    image: "/images/apex-banner.jpg"
  },
  {
    name: "Jane Smith",
    review: "Great experience, will definitely come back again!",
    rating: 4,
    image: "/images/tdsbanner.jpeg"
  },
  {
    name: "Alice Brown",
    review: "Customer service was top-notch. Loved it!",
    rating: 5,
    image: "/images/Wallpapers.webp"
  },
  {
    name: "Robert Wilson",
    review: "Affordable and reliable, very satisfied.",
    rating: 4,
    image: "/images/Wood-Paints.webp"
  },
  {
    name: "Jane Smith",
    review: "Great experience, will definitely come back again!",
    rating: 4,
    image: "/images/tdsbanner.jpeg"
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-banner mx-auto p-12">
      <div className="container mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-12 text-center">What Our <span className="gradient-text">Customer Says!</span></h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={false}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200">
              <img src={review.image} alt={review.name} className="w-full h-[230px] mx-auto mb-4" />
              <p className="text-gray-700 text-lg italic">"{review.review}"</p>
              <div className="mt-4 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <h3 className="mt-2 font-semibold text-gray-900">- {review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
