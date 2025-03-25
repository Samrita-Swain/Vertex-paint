import { useState } from "react";

const EternalTemple = () => {
  const tabs = [
    {
      id: "A",
      color: "#f3ecde",
      title: "Eternal Temple - A",
      description:
        "Striking white spells classic style in this home, complemented gracefully with an elegant brown and accents of olive green",
      mainImage: { src: "/images/Eternal Temple-A.png" },
      contentBoxes: [
        {
          title: "VL140P",
          content: "Crushed Ice",
          boxColor: "#eee9da",
          textColor: "#000"
        },
        {
          title: "V8015P",
          content: "Grand Canyon",
          boxColor: "#cb8f71",
          textColor: "#000"
        },
        {
          title: "V7717P",
          content: "Vivid Green",
          boxColor: "#7b8549",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f4f0e5",
      title: "Eternal Temple - B",
      description:
        "Bright yellow accents blend into hues of striking white and brick red, to give this home a refreshing, sun-kissed vibe",
      mainImage: { src: "/images/Eternal Temple-B.png" },
      contentBoxes: [
        {
          title: "VL144P",
          content: "Love Song",
          boxColor: "#eeeedf",
          textColor: "#000"
        },
        {
          content: "Spl Flame Red",
          boxColor: "#b25849",
          textColor: "#000"
        },
        {
          title: "V7941P",
          content: "Turmeric",
          boxColor: "#f8ad00",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#ecedcb",
      title: "Eternal Temple - C",
      description:
        "Mellow white with tan and accents of deep grey, lend this home a sense of refined elegance.",
      mainImage: { src: "/images/Eternal Temple-C.png" },
      contentBoxes: [
        {
          title: "V7771P",
          content: "Hushed Hue",
          boxColor: "#e9e9c6",
          textColor: "#000"
        },
        {
          title: "V8455P",
          content: "Tropical Tan",
          boxColor: "#948a7b",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#4e4e53",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#e9edd3",
      title: "Eternal Temple - D",
      description:
        "Intense blue combined with ultra pale green, with accents of rich aqua green, lend this home a calming nautical feel.",
      mainImage: { src: "/images/Eternal Temple-D.png" },
      contentBoxes: [
        {
          title: "V7715P",
          content: "Luminous",
          boxColor: "#e4e9d0",
          textColor: "#000"
        },
        {
          title: "V7325P",
          content: "Twilight Zone",
          boxColor: "#21588f",
          textColor: "#000"
        },
        {
          title: "V7542P",
          content: "Emerald Valley",
          boxColor: "#448076",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#fce2a3",
      title: "Eternal Temple - E",
      description:
        "A pastel yellow, aptly complemented with dark brown and accents of blue, give this home an upbeat vibe.",
      mainImage: { src: "/images/Eternal Temple-E.png" },
      contentBoxes: [
        {
          title: "V7921P",
          content: "Summer Harves",
          boxColor: "#f8df9e",
          textColor: "#000"
        },
        {
          content: "Khakhi",
          boxColor: "#8f6249",
          textColor: "#000"
        },
        {
          title: "V7367P",
          content: "Storm Blue",
          boxColor: "#628aa3",
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
          <h1 className="text-5xl font-medium mb-4">Eternal Temple</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          This House Format exemplifies luxury. With interlocked
structures there is a unique appeal to this home. Flat
domes and mild slopes along with overlapping masses
also create a feel of contrast and visual interest.
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

export default EternalTemple;