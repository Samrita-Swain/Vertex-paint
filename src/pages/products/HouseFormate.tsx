const HouseFormate = () => {
  return (
    <div className="flex flex-col justify-center items-center p-12">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-semibold text-center  mb-2">
          House Formates
        </h1>
        <p className="mb-[35px] text-gray-600 text-lg font-normal text-center">Tap the ‘House Formats’ button to choose a house
        that looks just like yours!</p>

        <div className="houses grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 p-6">
          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5 
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/CraftedCube" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Crafted-Cube.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
              Crafted Cube
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/RomanHeritage" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Roman-Heritage.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Roman Heritage
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/CuttingEdge" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Cutting-edge.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Cutting Edge
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/CountryStyle" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Country-style.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Country Style
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/ElegantSimplicity" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Elegant-Simplicity.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Elegant Simplicity
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/RetroRegal" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Retro-Regal.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Retro Regal
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/EternalTemple" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Eternal-Temple.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Eternal Temple
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/ModernGeometry" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Modern-Geometry.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Modern Geometry
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/GradualElevations" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Gradual-Elevations.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Gradual Elevations
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/RetroModern" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Retro-Modern.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Retro Modern
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/BeachHouse" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Beach-House.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Beach House
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/LatticeHouse" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Lattice-House.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Lattice House
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/ModernBaroque" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Modern-Baroque.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Modern Baroque
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/CountryHouse" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Country-House.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Country House
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/GroovedDesign" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Grooved-Design.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Grooved Design
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/IconicVilla" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Iconic-Villa.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Iconic Villa
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/TwistingMaze" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Twisting-Maze.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Twisting Maze
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out mb-5
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500" data-aos="zoom-in"
              data-aos-duration="1500"
          >
            <a href="/Exterior/ArchedResidence" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Arched-Residence.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[20px] font-semibold text-black text-center">
            Arched Residence
            </h6>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HouseFormate;
