import React, { useState, useEffect } from "react";
import { exteriorColor2 } from "../../data/content";
import { Link } from "react-router-dom";

// Define our interfaces for type safety
interface ColorBox {
  id: string;
  color: string;
  id_title: string;
  id_content: string;
  view: string;
  title: string;
  mainImage: { src: string };
  contentBoxes: Array<{
    title: string;
    content: string;
    boxColor: string;
    textColor: string;
  }>;
}

const TrendyStylish = () => {
  // State to track the active color ID
  const [activeColorId, setActiveColorId] = useState<string | null>(null);
  // Track screen size for responsive layout
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 640);

  // Add event listener for screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle view button click
  const handleViewClick = (colorId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation

    // Toggle the active color - if it's already active, close it
    setActiveColorId((prevId) => (prevId === colorId ? null : colorId));

    // Scroll to the content if needed
    if (activeColorId !== colorId) {
      setTimeout(() => {
        const detailsElement = document.getElementById(`details-${colorId}`);
        if (detailsElement) {
          detailsElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, 100);
    }
  };

  return (
    <div>
      <div
        className="relative UltimaExterioremulsions-banner p-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[50vh]"
        style={{ backgroundImage: "url(../images/product1.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-white text-center">
          <h1 className="text-5xl font-medium">Trendy & Stylish</h1>
        </div>
      </div>

      <div className="second-banner p-12 flex justify-center items-center">
        <div className="container">
          <div className="content flex justify-center items-center flex-col">
            <h2 className="gradient-text text-4xl font-semibold mb-2 text-center">Trendy & Stylish</h2>
            <p className="mb-[35px] text-center text-lg font-normal text-gray-600">
              Tap on any of the shades you like from below and see the magic
              unfold!
            </p>
          </div>

          <div className="relative">
            {/* Color grid with details */}
            <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2" data-aos="fade-up"
     data-aos-duration="1500">
              {exteriorColor2.map((color2, index) => {
                const isActive = activeColorId === color2.id;
                const colorData = color2 as ColorBox;

                // Calculate grid position information for larger screens
                const colsPerRow =
                  window.innerWidth >= 1024
                    ? 5
                    : window.innerWidth >= 768
                    ? 4
                    : window.innerWidth >= 640
                    ? 3
                    : 2;

                const rowIndex = Math.floor(index / colsPerRow);
                const colIndex = index % colsPerRow;

                return (
                  <React.Fragment key={color2.id}>
                    <div className="flex flex-col">
                      {/* Color box */}
                      <article className="bg-white rounded-lg overflow-hidden shadow-md group">
                        <div
                          className="box block p-8 h-[200px]"
                          style={{ backgroundColor: color2.color }}
                        ></div>

                        <div className="flex items-center justify-between p-4">
                        <div className="shades-info">
                        <h3 className="text-[16px] font-semibold">
                                {colorData.id_title}
                              </h3>
                              <p className="text-[14px] font-normal">
                                {colorData.id_content}
                              </p>
                        </div>
                          <button
                            onClick={(e) => handleViewClick(color2.id, e)}
                            className={`px-2 py-2 rounded-lg text-[17px] font-medium ${
                              isActive
                                ? "bg-transparent border border-[#fec940] text-black"
                                : "bg-[#fec940] border border-[#fec940] text-black hover:bg-transparent hover:border-[#fec940]"
                            } flex flex-row gap-2 items-center`}
                            style={{ transition: "0.5s" }}
                          >
                            {isActive ? "Close" : "View"}
                          </button>
                        </div>
                      </article>

                      {/* Details section for small screens - directly below this color box */}
                      {isActive && isSmallScreen && (
                        <div
                          id={`details-${color2.id}`}
                          className="mt-4 mb-8 bg-white p-4 rounded-lg shadow-md" 
                          data-aos="zoom-in"
                        >
                          <div className="flex flex-col gap-4">
                            <div>
                              <img
                                src={colorData.mainImage.src}
                                alt={colorData.title}
                                className="w-full rounded-lg shadow-sm mb-4"
                              />
                            </div>
                            <div>
                              <h3 className="text-[17px] font-semibold mb-3">
                                {colorData.title}
                              </h3>
                              <div className="grid grid-cols-2 gap-3">
                                {colorData.contentBoxes.map((box, idx) => (
                                  <div
                                    key={`${colorData.id}-box-${idx}`}
                                    className="flex flex-col items-center"
                                  >
                                    <div
                                      className="w-full max-w-[120px] h-[120px] rounded-md shadow-sm mb-2"
                                      style={{ backgroundColor: box.boxColor }}
                                    ></div>
                                    <div>
                                      <p className="text-[16px] font-medium">
                                        {box.title}
                                      </p>
                                      <p className="text-[14px] font-normal text-gray-600">
                                        {box.content}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Details section for larger screens - full width row */}
                    {isActive && !isSmallScreen && (
                      <div
                        id={`details-${color2.id}`}
                        className="mt-4 bg-white p-6 rounded-lg shadow-md" 
                        data-aos="zoom-in"
                        style={{
                          gridColumn: "1 / -1",
                          gridRow: `${rowIndex + 2}`,
                          order: rowIndex * colsPerRow + colsPerRow + 1,
                        }}
                      >
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8">
                          <div>
                            <img
                              src={colorData.mainImage.src}
                              alt={colorData.title}
                              className="w-[90%] rounded-lg shadow-sm mb-4"
                            />
                          </div>
                          <div>
                            <h3 className="text-[22px] font-semibold mb-3">
                              {colorData.title}
                            </h3>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                              {colorData.contentBoxes.map((box, idx) => (
                                <div
                                  key={`${colorData.id}-box-${idx}`}
                                  className="flex flex-col items-center sm:items-start"
                                >
                                  <div
                                    className="w-full max-w-[150px] h-[150px] rounded-md shadow-sm mb-3"
                                    style={{ backgroundColor: box.boxColor }}
                                  ></div>
                                  <div>
                                    <p className="text-[20px] font-[500]">
                                      {box.title}
                                    </p>
                                    <p className="text-[16px] text-gray-600">
                                      {box.content}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendyStylish;