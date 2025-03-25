import { useState } from "react";

const BeachHouse = () => {
  const tabs = [
    {
      id: "A",
      color: "#f5f0e7",
      title: "Beach House - A",
      description:
        "A tasteful blue blends well with an earthy brown roof to give this house a pleasant, summery feel",
      mainImage: { src: "/images/Beach House-A.png" },
      contentBoxes: [
        {
          title: "VL143P",
          content: "Rain Drop",
          boxColor: "#f5f0e7",
          textColor: "#000"
        },
        {
          title: "V7342P",
          content: "Waikiki",
          boxColor: "#4386a8",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#e6dcd1",
      title: "Beach House - B",
      description:
        "Shades of red beautifully accentuate a base of beige in this coastal home and give it a warm, welcoming look and feel",
      mainImage: { src: "/images/Beach House-B.png" },
      contentBoxes: [
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e6dcd1",
          textColor: "#000"
        },
        {
          title: "VK262P",
          content: "Rosewood Rouge - N",
          boxColor: "#8a4d4a",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#fae1bc",
      title: "Beach House - C",
      description:
        "Cosy just got a new definition with this stately and classy contrasting colour combination of powder blue and a creamy hue.",
      mainImage: { src: "/images/Beach House-C.png" },
      contentBoxes: [
        {
          title: "V7970P",
          content: "Nacho Cheese",
          boxColor: "#fae1bc",
          textColor: "#000"
        },
        {
          title: "V7232P",
          content: "Thunder",
          boxColor: "#9fa7ba",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#fee0b1",
      title: "Beach House - D",
      description:
        "A mellow orange with a sober yellow adds to this home’s appeal, making it welcoming and cosy in a unique way.",
      mainImage: { src: "/images/Beach House-D.png" },
      contentBoxes: [
        {
          title: "V7977P",
          content: "Mango Duet",
          boxColor: "#fee0b1",
          textColor: "#000"
        },
        {
          title: "V8023P",
          content: "Carrot Punch",
          boxColor: "#e3915f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#dbdaab",
      title: "Beach House - E",
      description:
        "A nature inspired colour combination of subdued green and royal brown does justice to the coastal vibe of this house.",
      mainImage: { src: "/images/Beach House-E.png" },
      contentBoxes: [
        {
          title: "V7810P",
          content: "Dry Moss",
          boxColor: "#dbdaab",
          textColor: "#000"
        },
        {
          title: "V8693P",
          content: "Cheerful Cherry",
          boxColor: "#774a4c",
          textColor: "#000"
        }
      ]
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative UltimaExterioremulsions-banner p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../images/color-options-banner.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center">
          <h1 className="text-5xl font-medium mb-4">Beach House</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          With a breakthrough style, this house is quaintly
charming. An arrow like central mass and an extruded
porch give the home a cosy, relaxed feel. Sloping
roofs lend a distinctive coastal vibe to the home.
          </p>
        </div>
      </div>

      {/* Tab Section */}
      <div className="w-full flex flex-col items-center p-6 bg-white">
        {/* Tabs Container - Scrollable on Small Screens */}
        <div className="w-full max-w-3xl overflow-x-auto whitespace-nowrap scrollbar-hide mb-5">
          <div className="flex justify-center gap-4 min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-300 flex items-center justify-center w-[100px] h-[100px]
                  ${
                    activeTab.id === tab.id
                      ? "text-black font-bold"
                      : "text-gray-700"
                  }`}
                style={{ backgroundColor: tab.color }}
                onClick={() => setActiveTab(tab)}
              >
                {activeTab.id === tab.id ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                ) : (
                  tab.id
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="px-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center gap-8 w-full text-center">
          {/* Main Image */}
          {activeTab.mainImage && (
            <div className="mt-4">
              <img
                src={activeTab.mainImage.src}
                alt={activeTab.title}
                className="mx-auto w-[100%] rounded-lg shadow-md mb-8"
              />
              
            </div>
          )}
          <div className="tab-content flex flex-col items-start">
            {/* Content Section */}
          <h2 className="text-3xl font-semibold text-left gradient-text">{activeTab.title}</h2>
          <p className="text-[17px] font-normal mt-2 text-gray-700 text-left">{activeTab.description}</p>

          {/* Color Swatch Boxes Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {activeTab.contentBoxes && activeTab.contentBoxes.map((box, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Color swatch with rounded corners and shadow effect */}
                <div className="w-full h-[170px] aspect-square max-w-xs rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md relative">
                  {/* Background and shadow effect */}
                  <div className="absolute -right-2 -bottom-2 w-full h-full bg-gray-400 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl -z-10"></div>
                  
                  {/* Main color box */}
                  <div 
                    className="w-full h-full bg-gray-100 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl overflow-hidden"
                  >
                    {/* Inner color square that acts as the main swatch */}
                    <div 
                      className="absolute top-6 left-6 right-6 bottom-6"
                      style={{ backgroundColor: box.boxColor }}
                    ></div>
                  </div>
                </div>
                
                {/* Color information below the swatch */}
                <div className="mt-3 text-center">
                  <p className="text-[16px] font-semibold  text-black">{box.title}</p>
                  <p className="text-[14px] font-normal text-gray-700">{box.content}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeachHouse;