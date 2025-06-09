import { useState } from "react";

const CuttingEdge = () => {
  const tabs = [
    {
      id: "A",
      color: "#eeece9",
      title: "Cutting-edge - A",
      description:
        "The blend of sophisticated grey with vibrant yellow accents gives this home a bold and rejuvenating appearance.",
      mainImage: { src: "/images/Cutting-edge - A.jpg" },
      contentBoxes: [
        {
          title: "V7220P",
          content: "Shy Iris",
          boxColor: "#eeece9",
          textColor: "#000",
        },
        {
          title: "V8439P",
          content: "Wrought Iron",
          boxColor: "#847d73",
          textColor: "#000",
        },
        {
          title: "V7888P",
          content: "Ginger Root",
          boxColor: "#d1b67b",
          textColor: "#000",
        },
      ],
    },
    {
      id: "B",
      color: "#f2e4b6",
      title: "Cutting-edge - B",
      description:
        "The combination of refreshing beige and vibrant maroon effortlessly blends to accentuate the architectural tones of the structure.",
      mainImage: { src: "/images/Cutting-edge - B.jpg" },
      contentBoxes: [
        {
          title: "V7882P",
          content: "Solemn Yellow",
          boxColor: "#f2e4b6",
          textColor: "#000",
        },
        {
          title: "V0R05P",
          content: "Mahogany",
          boxColor: "#714143",
          textColor: "#000",
        },
      ],
    },
    {
      id: "C",
      color: "#fedfa2",
      title: "Cutting-edge - C",
      description:
        "In this modern home, the warm buttery yellow paired with soft lilac-grey creates an energizing and vibrant atmosphere.",
      mainImage: { src: "/images/Cutting-edge - C.jpg" },
      contentBoxes: [
        {
          title: "V7961P",
          content: "Peaches and Cream",
          boxColor: "#fedfa2",
          textColor: "#000",
        },
        {
          title: "V9624P",
          content: "Lilac Dusk - N",
          boxColor: "#746f7f",
          textColor: "#000",
        }
      ],
    },
    {
      id: "D",
      color: "#bfadce",
      title: "Cutting-edge - D",
      description:
        "This home exudes a trendy vibe with the perfect fusion of warm orange accents and cool grey with lavender undertones.",
      mainImage: { src: "/images/Cutting-edge - D.jpg" },
      contentBoxes: [
        {
          title: "V7152P",
          content: "Mount Olympus",
          boxColor: "#bfadce",
          textColor: "#000",
        },
        {
          title: "V7147P",
          content: "Lavender Laugh",
          boxColor: "#e0d5dd",
          textColor: "#000",
        },
        {
          title: "V5103P",
          content: "Amber - N",
          boxColor: "#bb7755",
          textColor: "#000",
        },
      ],
    },
    {
      id: "E",
      color: "#9dc0a8",
      title: "Cutting-edge - E",
      description:
        "The soft green tones paired with calming grey accents create a vibrant and refreshing atmosphere in this home.",
      mainImage: { src: "/images/Cutting-edge - E.jpg" },
      contentBoxes: [
        {
          title: "V7624P",
          content: "Dry Sage",
          boxColor: "#9dc0a8",
          textColor: "#000",
        },
        {
          title: "V0615P",
          content: "Silver Grey",
          boxColor: "#b8b9b6",
          textColor: "#000",
        },
        {
          title: "V8304P",
          content: "Grey Matter",
          boxColor: "#838585",
          textColor: "#000",
        }
      ],
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
          <h1 className="text-5xl font-medium mb-4">Cutting Edge</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
            With a modern geometric flair, this home showcases the striking
            interplay of horizontal and vertical lines. Pergolas and a stepped
            floor design further enhance its contemporary appeal.
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

export default CuttingEdge;
