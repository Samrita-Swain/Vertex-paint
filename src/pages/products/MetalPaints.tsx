import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CalculatorForm from "../Form/CalculatorForm";

const colors = [
  {
    name: "Moonlit Blue",
    hex: "#507BB2",
    code: "V7246",
    image: "/images/Ink Blue.jpg",
  },
  {
    name: "Mint Glade",
    hex: "#77B98B",
    code: "V7607",
    image: "/images/Terrace Green.jpg",
  },
  {
    name: "Pink Whimsy",
    hex: "#F6EDE9",
    code: "V8140",
    image: "/images/Touch of Fushia.jpg",
  },
  {
    name: "Dusky Petal",
    hex: "#E1A5CA",
    code: "V9416",
    image: "/images/Twilight Pink.jpg",
  },
];

const MetalPaints = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative InteriorColor-banner p-12 bg-cover bg-center bg-no-repeat w-fullrelative InteriorColor-banner px-6 md:px-12 py-12  w-full"
        style={{ backgroundImage: "url(../images/Interior-banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative content text-white text-center flex flex-col items-center">
          <h1 className="text-5xl text-white font-semibold mb-4">
            Metal Paints
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


      <CalculatorForm />
    </div>
  );
};

export default MetalPaints;
