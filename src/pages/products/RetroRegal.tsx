import { useState } from "react";

const RetroRegal = () => {
  const tabs = [
    {
      id: "A",
      color: "#f6f3e0",
      title: "Retro Regal - A",
      description:
        "The warm, creamy beige paired with bold greyish-blue accents infuses the home with a vibrant and lively energy.",
      mainImage: { src: "/images/Retro Regal-A.png" },
      contentBoxes: [
        {
          title: "V7876P",
          content: "Soft Honey",
          boxColor: "#f3eeda",
          textColor: "#000"
        },
        {
          title: "V7304P",
          content: "Piece of Sky",
          boxColor: "#678aa3",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f2eee3",
      title: "Retro Regal - B",
      description:
        "The rich silken beige combined with rustic red accents creates a regal contrast, imbuing the home with an air of sophistication and nobility.",
      mainImage: { src: "/images/Retro Regal-B.png" },
      contentBoxes: [
        {
          title: "VL104P",
          content: "Cotton Wool",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V0533P",
          content: "Brick Red - N",
          boxColor: "#a36249",
          textColor: "#000"
        }
        ,
        {
          title: "V9514P",
          content: "Creamy Crust",
          boxColor: "#cbc1b2",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#e7ebbd",
      title: "Retro Regal - C",
      description:
        "The gentle pastel greens and pinks harmonize beautifully with soft grey-green and bold red accents, lending the home an air of regal elegance.",
      mainImage: { src: "/images/Retro Regal-C.png" },
      contentBoxes: [
        {
          title: "V7778P",
          content: "Limon",
          boxColor: "#e4e9b7",
          textColor: "#000"
        },
        {
          title: "VK137P",
          content: "Basilico - N",
          boxColor: "#5d6c62",
          textColor: "#000"
        },
        {
          title: "V8019P",
          content: "Coral Rocks",
          boxColor: "#f3dac6",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#f3d5ce",
      title: "Retro Regal - D",
      description:
        "The blend of pink and red infuses the home with warmth, enhancing its magnificence and creating a truly captivating atmosphere",
      mainImage: { src: "/images/Retro Regal-D.png" },
      contentBoxes: [
        {
          title: "VK232P",
          content: "Strawbella - N",
          boxColor: "#edcfca",
          textColor: "#000"
        },
        {
          title: "V0336P",
          content: "Buttercup - N",
          boxColor: "#dabc94",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#ddd29b",
      title: "Retro Regal - E",
      description:
        "The soft pale yellow, bold red, and a hint of grey unite to give this vintage-style home a refined touch of royal elegance.",
      mainImage: { src: "/images/Retro Regal-E.png" },
      contentBoxes: [
        {
          title: "V7840P",
          content: "Divine Wine",
          boxColor: "#dad099",
          textColor: "#000"
        },
        {
          title: "V8312P",
          content: "Gothic Grey",
          boxColor: "#7b8585",
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
          <h1 className="text-5xl font-medium mb-4">Retro Regal</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          Designed with symmetry and meticulous attention to
detail, this home exudes elegance, especially with its
standout porch. The blend of red wood, brick,
monotone tiles, and gables creates an ornate,
vintage charm.
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

export default RetroRegal;