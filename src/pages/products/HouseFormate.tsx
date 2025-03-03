const HouseFormate = () => {
  return (
    <div className="flex flex-col justify-center items-center p-12">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="gradient-text text-[40px] font-bold text-center">
          House Formates
        </h1>
        <p className="mb-[35px] text-gray-600 text-[20px]">Tap the ‘House Formats’ button to choose a house
        that looks just like yours!</p>

        <div className="houses grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 p-6">
          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out 
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500"
          >
            <a href="/Exterior/CraftedCube.tsx" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Crafted-Cube.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[25px] font-[500] text-black">
              Crafted Cube
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out 
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500"
          >
            <a href="#" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Roman-Heritage.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[25px] font-[500] text-black">
            Roman Heritage
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out 
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500"
          >
            <a href="#" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Cutting-edge.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[25px] font-[500] text-black">
            Cutting Edge
            </h6>
          </div>

          <div
            className="house-box group flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-4 transition-all duration-700 ease-out 
      hover:shadow-2xl relative overflow-hidden border-t border-l border-r border-[#efefef] border-opacity-100 hover:border-red-500"
          >
            <a href="#" className="flex justify-center w-full relative z-10">
              <img
                src="/images/Crafted-Cube.png"
                alt="Crafted Cube"
                className="w-[80%] mb-4 rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </a>

            {/* Title with Smooth Color Transition */}
            <h6 className="text-[25px] font-[500] text-black">
              Crafted Cube
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseFormate;
