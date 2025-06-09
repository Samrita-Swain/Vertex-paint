import { useState } from "react";

const GroovedDesign = () => {
  const tabs = [
    {
      id: "A",
      color: "#e8ebeb",
      title: "Grooved Design - A",
      description:
        "An aqua accent theme works wonders with a fresh white to give this home a cool summery look and feel.",
      mainImage: { src: "/images/Grooved Design-A.jpg" },
      contentBoxes: [
        {
          title: "VL180P",
          content: "Innocent White",
          boxColor: "#e8ebeb",
          textColor: "#000"
        },
        {
          title: "V7303P",
          content: "Stormy Sea",
          boxColor: "#5b7e98",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f0eada",
      title: "Grooved Design - B",
      description:
        "Sombre purple accents work beautifully with a calm white base colour to give this home a breezy vibe.",
      mainImage: { src: "/images/Grooved Design-B.jpg" },
      contentBoxes: [
        {
          title: "VL134P",
          content: "Double Cream",
          boxColor: "#f0eada",
          textColor: "#000"
        },
        {
          title: "V7166P",
          content: "Intense Purple",
          boxColor: "#7d7cab",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#f7f0dd",
      title: "Grooved Design - C",
      description:
        "This home has a classy combination of a warm white and dark grey accents that add to the spacious character of this house.",
      mainImage: { src: "/images/Grooved Design-C.jpg" },
      contentBoxes: [
        {
          title: "V7948P",
          content: "Crescent",
          boxColor: "#f7f0dd",
          textColor: "#000"
        },
        {
          title: "V8261P",
          content: "Thunder Cloud",
          boxColor: "#535456",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#f9efc8",
      title: "Grooved Design - D",
      description:
        "With a light green hue as the base and a fresh olive as the accent, this home has a warm and airy look and feel.",
      mainImage: { src: "/images/Grooved Design-D.jpg" },
      contentBoxes: [
        {
          title: "V7834P",
          content: "Gold Gleam",
          boxColor: "#f9efc8",
          textColor: "#000"
        },
        {
          title: "V7767P",
          content: "Harvest Season",
          boxColor: "#ccc97d",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#fdd6ab",
      title: "Grooved Design - E",
      description:
        "A bright and vibrant theme makes this home stand out. Light orange works really well with a subtle ochre to create a warmly welcoming personality.",
      mainImage: { src: "/images/Grooved Design-E.jpg" },
      contentBoxes: [
        {
          title: "V7969P",
          content: "Coral Beach",
          boxColor: "#fdd6ab",
          textColor: "#000"
        },
        {
          title: "V7809P",
          content: "Chinese Tea",
          boxColor: "#d0c38f",
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
          <h1 className="text-5xl font-medium mb-4">Grooved Design</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          The spaced-out, ladder-like design adds an airy feel
to this house format, giving it a contemporary edge.
The wooden window frames offer a pleasing
structural contrast, enhancing the overall aesthetic.
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

export default GroovedDesign;