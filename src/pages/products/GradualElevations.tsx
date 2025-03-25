import { useState } from "react";

const GradualElevations = () => {
  const tabs = [
    {
      id: "A",
      color: "#f8e8be",
      title: "Gradual Elevations - A",
      description:
        "A vivid red with an earthy beige together lend a vibrant yet approachable look and feel to this house.",
      mainImage: { src: "/images/Gradual Elevations-A.png" },
      contentBoxes: [
        {
          title: "V7930P",
          content: "Hearth",
          boxColor: "#f8e8be",
          textColor: "#000"
        },
        {
          title: "V8085P",
          content: "Scarlet",
          boxColor: "#b13944",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Granizia Coarse Off White",
          boxColor: "#676860",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#824b4f",
      title: "Gradual Elevations - B",
      description:
        "A deep maroon accentuates the subtle beige beautifully to give this home a becoming feel.",
      mainImage: { src: "/images/Gradual Elevations-B.png" },
      contentBoxes: [
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#824b4f",
          textColor: "#000"
        },
        {
          title: "V7860P",
          content: "Thick Cream",
          boxColor: "#f4eed9",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#ccc585",
      title: "Gradual Elevations - C",
      description:
        "A unique shade of yellow with a pleasant white make for a combination that lends warmth and a distinctive appeal.",
      mainImage: { src: "/images/Gradual Elevations-C.png" },
      contentBoxes: [
        {
          title: "V7832P",
          content: "Golden Apple",
          boxColor: "#ccc585",
          textColor: "#000"
        },
        {
          title: "VL152P",
          content: "Cream Pie",
          boxColor: "#f6f3e8",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#918b72",
      title: "Gradual Elevations - D",
      description:
        "Blue and greenish-grey create a great harmony to elevate this House Format and give it a contemporary,stylish appeal.",
      mainImage: { src: "/images/Gradual Elevations-D.png" },
      contentBoxes: [
        {
          title: "V8479P",
          content: "Turtle Shell",
          boxColor: "#918b72",
          textColor: "#000"
        },
        {
          title: "V7386P",
          content: "Blank Slate",
          boxColor: "#b5ced3",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#fbe3d8",
      title: "Gradual Elevations - E",
      description:
        "A dash of a pale blue along with a blush pink make this house look fashionable and still retain its homely character.",
      mainImage: { src: "/images/Gradual Elevations-E.png" },
      contentBoxes: [
        {
          title: "V8035P",
          content: "Rose Bud",
          boxColor: "#fbe3d8",
          textColor: "#000"
        },
        {
          title: "V0U42P",
          content: "Wedgewood",
          boxColor: "#7796a0",
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
          <h1 className="text-5xl font-medium mb-4">Gradual Elevations</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          This home has a lot of projections and layering giving
it a distinctive appeal. An extruded design makes it
look edgy. This multi-level House Format is spread
out giving it a cosy yet spacious character and look.
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

export default GradualElevations;