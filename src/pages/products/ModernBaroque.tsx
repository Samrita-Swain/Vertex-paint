import { useState } from "react";

const ModernBaroque = () => {
  const tabs = [
    {
      id: "A",
      color: "#e6dece",
      title: "Modern Baroque - A",
      description:
        "With a simple base colour and a vibrant dash of aquamarine as an accent, this house looks stately and royal",
      mainImage: { src: "/images/Modern Baroque-A.png" },
      contentBoxes: [
        {
          title: "V8499P",
          content: "Meadow Lark",
          boxColor: "#e6dece",
          textColor: "#000"
        },
        {
          title: "V7511P",
          content: "Valley Green",
          boxColor: "#2d9f96",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#e2dfd8",
      title: "Modern Baroque - B",
      description:
        "A subdued light pink colour comes together beautifully with deep blue accents to give this modern home a dignified look.",
      mainImage: { src: "/images/Modern Baroque-B.png" },
      contentBoxes: [
        {
          title: "V8643P",
          content: "Almond Kiss",
          boxColor: "#e8c8bd",
          textColor: "#000"
        },
        {
          title: "V7293P",
          content: "Mystic Dream",
          boxColor: "#3d4c60",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#fee3c9",
      title: "Modern Baroque - C",
      description:
        "This home looks flamboyant and stands out with a red border, combining really well with the base warm tint",
      mainImage: { src: "/images/Modern Baroque-C.png" },
      contentBoxes: [
        {
          title: "V7994P",
          content: "Peach Rose",
          boxColor: "#fee3c9",
          textColor: "#000"
        },
        {
          title: "VK004P",
          content: "Heady Wine -N",
          boxColor: "#a5464d",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#b5d1cd",
      title: "Modern Baroque - D",
      description:
        "A light blue hue works wonders with dark grey accents to give this home an elaborate, classy vibe.",
      mainImage: { src: "/images/Modern Baroque-D.png" },
      contentBoxes: [
        {
          title: "V7482P",
          content: "Sparkling Water",
          boxColor: "#b5d1cd",
          textColor: "#000"
        },
        {
          title: "V6129P",
          content: "Pilgrim",
          boxColor: "#a0a5ad",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#a2a3c6",
      title: "Modern Baroque - E",
      description:
        "This house has a suave look and feel. Its decorative structure is balanced with a mix of muted violet and a beautiful brown.",
      mainImage: { src: "/images/Modern Baroque-E.png" },
      contentBoxes: [
        {
          title: "V7168P",
          content: "Orchid Bloom",
          boxColor: "#a2a3c6",
          textColor: "#000"
        },
        {
          title: "V8528P",
          content: "Bush Land",
          boxColor: "#bfa080",
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
          <h1 className="text-5xl font-medium mb-4">Modern Baroque</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          This House Format blends classic and
contemporary. Roman columns and intricate,
detailed railings give it an ornate look. At the same
time, smart use of staggered terraces make it look
contemporary and cool.
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

export default ModernBaroque;