import React, { useState } from "react";

const colors = [
  {
    name: "Ink Blue",
    hex: "#507BB2",
    code: "V7246",
    image: "/images/Ink Blue.jpg",
    description:
      "Add new life to your walls by splashing some bright colours and vibrant shades. Paint your imagination and impress everyone!",
  },
  {
    name: "Terrace Green",
    hex: "#77B98B",
    code: "V7607",
    image: "/images/Terrace Green.jpg",
  },
  {
    name: "Touch of Fushia",
    hex: "#F6EDE9",
    code: "V8140",
    image: "/images/Touch of Fushia.jpg",
  },
  {
    name: "Twilight Pink",
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
        className="relative InteriorColor-banner p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../images/color-options.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center flex flex-col items-center">
          <h1 className="text-5xl text-white font-semibold mb-4 text-center">
            Interior Wall Paints
          </h1>
          <p className="text-xl mb-8 text-white text-center">
            Explore the exclusive range of wall paints colours for every space.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-12 h-screen bg-white">
        {/* Color Section */}
        <div className="w-1/2 p-6">
          {/* Display Colors */}
          <div className="flex justify-between gap-4">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`cursor-pointer rounded-lg transition transform ${
                  selectedColor.name === color.name
                    ? "shadow-2xl" // Active color with shadow
                    : "shadow-lg"
                }`}
                style={{ width: "22%" }}
              >
                {/* Color Block */}
                <div
                  className="rounded-t-lg"
                  style={{ backgroundColor: color.hex, height: "100px" }}
                />

                {/* Color Name and Code */}
                <div
                  className={`p-3 rounded-b-lg text-center font-bold text-[15px] transition`}
                  style={{
                    backgroundColor:
                      selectedColor.name === color.name ? color.hex : "white",
                  }}
                >
                  <div>{color.name}</div>
                  <div className="text-sm text-[#0e0e0ed6] mt-1">
                    {color.code}
                  </div>{" "}
                  {/* Code directly under the name */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 p-6 bg-gray-100">
          <div>
            <img
              src={selectedColor.image}
              alt={`${selectedColor.name} image`}
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          <div className="content">
            <div className="w-1/2 p-6">
            <div>
              <h1 className="text-2xl mb-1">{selectedColor.name}</h1>
            </div>
            <div className="text-lg mb-1">{selectedColor.code}</div>
            <div className="text-lg leading-6 text-[#414141]">{selectedColor.description}</div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorColor;
