import { useState } from "react";

const TwistingMaze = () => {
  const tabs = [
    {
      id: "A",
      color: "#f6f3dd",
      title: "Twisting Maze - A",
      description:
        "A nature inspired theme of green with a beige brown texture accompanies the subtle base colour perfectly and gels extremely well with the surroundings.",
      mainImage: { src: "/images/Twisting Maze-A.jpg" },
      contentBoxes: [
        {
          title: "V7868P",
          content: "Sun Screen",
          boxColor: "#f6f3dd",
          textColor: "#000"
        },
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#cdddad",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Granizia Coarse Beige Brown",
          boxColor: "#676860",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f7f2c6",
      title: "Twisting Maze - B",
      description:
        "The grey accents against a soft pale yellow base create a stunning visual effect, adding depth and elegance to the house. The grey also complements the floor tiles, tying the design together seamlessly.",
      mainImage: { src: "/images/Twisting Maze-B.jpg" },
      contentBoxes: [
        {
          title: "V7866P",
          content: "Butter Scotch",
          boxColor: "#f7f2c6",
          textColor: "#000"
        },
        {
          title: "V8295P",
          content: "Sleigh Bells",
          boxColor: "#858585",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#eee1cd",
      title: "Twisting Maze - C",
      description:
        "The rich, luxurious deep red contrasts beautifully with the off-white base, highlighting the complexity of the structure. Thoughtful use of wood further enhances the home's beauty and sophistication.",
      mainImage: { src: "/images/Twisting Maze-C.jpg" },
      contentBoxes: [
        {
          title: "V8532P",
          content: "Easter Lily",
          boxColor: "#eee1cd",
          textColor: "#000"
        },
        {
          title: "V8709P",
          content: "Vine Yard",
          boxColor: "#7a4f58",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#efe2c0",
      title: "Twisting Maze - D",
      description:
        "The rich blend of orange and brown enhances the calming beige tones, beautifully complementing the refined woodwork and adding a graceful warmth to the space.",
      mainImage: { src: "/images/Twisting Maze-D.jpg" },
      contentBoxes: [
        {
          title: "V7884P",
          content: "Soft Linen",
          boxColor: "#f7f2da",
          textColor: "#000"
        },
        {
          title: "V7981P",
          content: "Dusky Saffron",
          boxColor: "#c97c34",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#e8d18f",
      title: "Twisting Maze - E",
      description:
        "The calm greyish base, paired with vibrant rose accents, strikes a perfect aesthetic balance, giving the house a premium and sophisticated allure.",
      mainImage: { src: "/images/Twisting Maze-E.jpg" },
      contentBoxes: [
        {
          title: "V8298P",
          content: "Silver Trinket",
          boxColor: "#d7d3cd",
          textColor: "#000"
        },
        {
          title: "V8167P",
          content: "Muted Scarlet",
          boxColor: "#c698c0",
          textColor: "#000"
        },
        {
          title: "V9584P",
          content: "Fervent Fuchsia - N",
          boxColor: "#af5987",
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
          <h1 className="text-5xl font-medium mb-4">Twisting Maze</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          With interwoven yet linear structures, this house has a
complex design that draws attention and admiration.
Intersecting planes give it a contemporary appeal
adding to its aspirational quotient.
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

export default TwistingMaze;