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

const InteriorColor = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative InteriorColor-banner p-12 bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url(../images/Interior-banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative content text-white text-center flex flex-col items-center">
          <h1 className="text-5xl text-white font-semibold mb-4">
            Interior Wall Paints
          </h1>
          <p className="text-lg font-normal">
            Explore the exclusive range of wall paint colors for every space.
          </p>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="inspired-by grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-12 bg-[#f7f2e7] justify-center items-center">
        <div
          className="inspired-by-content-part"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h6 className="text-4xl font-medium mb-3">Get inspired by our</h6>
          <h1 className="text-7xl font-semibold w-[89%] leading-[75px] gradient-text mb-3">
            Exquisite Collections
          </h1>
          <p className="text-lg font-normal mb-5">
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
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-3.webp"
              alt=""
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="third-img">
            <img
              src="/images/image-5.webp"
              alt=""
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="second-img flex flex-col gap-3">
            <img
              src="/images/image-1.webp"
              alt=""
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-2.webp"
              alt=""
              className="w-full h-auto object-cover"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>

      {/* Color Selection Section */}
      <div className="p-10 bg-white">
  <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-12 items-center">
    {/* Left Section - Takes More Width on Larger Screens */}
    <div className="lg:col-span-2 space-y-8" data-aos="zoom-in"
              data-aos-duration="1500">
      {/* Full-width Image */}
      <div className="w-full">
        <img
          src={selectedColor.image}
          alt={`${selectedColor.name} image`}
          className="w-full lg:h-[520px] md:h-[460px] sm:h-[330px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Color Tabs with Responsiveness */}
      <div className="flex flex-row gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`cursor-pointer rounded-lg transition transform ${
              selectedColor.name === color.name ? "shadow-2xl" : "shadow-lg"
            }`}
            style={{ width: "20%" }} 
          >
            {/* Color Block */}
            <div
              className="rounded-t-lg"
              style={{
                backgroundColor: color.hex,
                height: "50px",
              }}
            />

            {/* Color Name */}
            <div
              className={`p-2 rounded-b-lg text-center font-medium text-[12px] transition ${
                selectedColor.name === color.name
                  ? "text-black"
                  : "text-black bg-white"
              }`}
              style={{
                backgroundColor:
                  selectedColor.name === color.name ? color.hex : "white",
              }}
            >
              <div>{color.name}</div>
              <div className="text-[11px] text-gray-600">{color.code}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Section */}
    <div className="space-y-6 flex flex-col items-start" data-aos="fade-left"
          data-aos-duration="1500">
      <h1 className="gradient-text text-5xl font-semibold md:text-4xl sm:text-3xl">
        Popular Shades
      </h1>
      <p className="text-lg font-normal text-gray-700 leading-relaxed sm:text-base">
        From elegant neutrals to rich, vibrant hues, our popular shades
        collection offers the perfect palette to transform your space.
      </p>
      <a href="/InteriorWallPaint/Shades" className="inspired-by-button flex items-center">
        View All Shades <FaArrowRight className="icon" />
      </a>
    </div>
  </div>
</div>


<CalculatorForm /> 


    </div>
  );
};

export default InteriorColor;
