import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CalculatorForm from "../Form/CalculatorForm";


const OtherSurface = () => {

 const OtherSurfaceProducts = [
    {
      name: "BD Seal",
      image: "/images/BD_seal.png",
      href: "/OtherSurface/BDSeal",
      animation: true,
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 0,
      unit: "per L",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative InteriorColor-banner p-12 bg-cover bg-center bg-no-repeat w-fullrelative InteriorColor-banner px-6 md:px-12 py-12  w-full"
        style={{ backgroundImage: "url(../images/othersurface-banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative content text-white text-center flex flex-col items-center">
          <h1 className="text-5xl text-white font-semibold mb-4">
            Other Surface
          </h1>
          <p className="text-lg font-normal">
            Explore the exclusive range of wall paint colors for every space.
          </p>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="inspired-by grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-12 bg-[#f7f2e7] justify-center items-center">
        <div className="inspired-by-content-part" data-aos="fade-right" data-aos-duration="1500">
          <h6 className="text-3xl font-medium mb-3">Get inspired by our</h6>
          <h1 className="text-6xl font-semibold w-[60%] leading-[65px] gradient-text mb-3">
            Exquisite Collections
          </h1>
          <p className="text-[17px] font-normal mb-5">
            Elevate your style and imagination with the range of Texture
            Collections
          </p>
          <button className="inspired-by-button flex items-center">
            Get Inspired <FaArrowRight className="icon" />
          </button>
        </div>

        <div className="inspired-by-image-part grid grid-cols-3 gap-3 w-full">
          <div className="first-img flex flex-col gap-3">
            <img
              src="/images/first-image.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-3.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="third-img">
            <img
              src="/images/image-5.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="second-img flex flex-col gap-3">
            <img
              src="/images/image-1.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-2.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
        </div>
      </div>

      <div className="exterior-Ultima-band p-12 bg-[#fff] flex flex-col items-center">
        <h1 className="gradient-text text-4xl font-semibold text-center mb-[35px]">
          Other Surface
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          {OtherSurfaceProducts.map((product, index) => (
            <a
              key={index}
              href={product.href}
              className="ultima-box group relative p-4 cursor-pointer border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              {...(product.animation && {
                "data-aos": "zoom-in",
                "data-aos-duration": "1500",
              })}
            >
              <div className="mb-5">
                <div className="flex justify-center items-center h-[115px]">
                  <img
                    className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="ultima-content">
                <h6 className="text-[16px] font-semibold mb-[8px] text-center">
                  {product.name}
                </h6>
                <ul className="list-disc ml-4 text-md text-[14px] font-[400] mb-4">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
                <p className="text-center text-[15px] font-medium text-gray-700">
                  MRP <span className="font-bold text-black">₹ {product.price}.00</span>
                </p>
                <p className="text-center text-[12px] text-gray-500 italic">
                  (Inclusive of all taxes) {product.unit}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <CalculatorForm />
    </div>
  );
};

export default OtherSurface;
