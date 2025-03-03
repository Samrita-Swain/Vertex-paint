import { useState } from "react";

const CraftedCube = () => {
  const tabs = [
    {
      id: "A",
      color: "#f7f0e3",
      title: "Crafted Cube - A",
      description:
        "A subtle grey texture combined with earthy red accents creates a charming contrast against the white base, giving this house a look that is both graceful and inviting.",
      mainImage: { src: "/images/crafted-cube-A.png" },
      contentBoxes: [
        {
          title: "V8004P",
          content: "Mellow Orange",
          boxColor: "#c3cfaa",
          textColor: "#000"
        },
        {
          title: "V9983P",
          content: "Brick Dust - N",
          boxColor: "#904c3f",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Glazia Greiges",
          boxColor: "#59614e",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#e2dfd8",
      title: "Crafted Cube - B",
      description:
        "A gentle brown paired with off-white gives this house a refined, artistic, and distinguished appeal.",
      mainImage: { src: "/images/crafted-cube-B.png" },
      contentBoxes: [
        {
          title: "V8300P",
          content: "Confetti",
          boxColor: "#b4bda2",
          textColor: "#000"
        },
        {
          title: "V8639P",
          content: "Brick Tone",
          boxColor: "#7d5d4a",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#e2e8e5",
      title: "Crafted Cube - C",
      description:
        "Featuring an appealing blend of yellow and brown accents against a calming white base, this house exudes an exquisite and artistic charm.",
      mainImage: { src: "/images/crafted-cube-C.png" },
      contentBoxes: [
        {
          title: "V7300P",
          content: "Jet Stream",
          boxColor: "#b4c6aa",
          textColor: "#000"
        },
        {
          title: "V7927P",
          content: "Casablanca",
          boxColor: "#baa755",
          textColor: "#000"
        },
        {
          title: "V8581P",
          content: "Antique Brass",
          boxColor: "#614b33",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#efe2c0",
      title: "Crafted Cube - D",
      description:
        "A touch of subdued blue against the warm off-white creates a delightful and stylish combination,while the subtle addition of brown brings an extra layer of sophistication to the structure",
      mainImage: { src: "/images/crafted-cube-D.png" },
      contentBoxes: [
        {
          title: "V7891P",
          content: "Wheat Sprig",
          boxColor: "#bbc290",
          textColor: "#000"
        },
        {
          title: "V7304P",
          content: "Piece of Sky",
          boxColor: "#517579",
          textColor: "#000"
        },
        {
          title: "V8566P",
          content: "Tree Bark",
          boxColor: "#786541",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#e8d18f",
      title: "Crafted Cube - E",
      description:
        "With pale yellow as the primary color and dark grey accents, this house exudes a warm and inviting atmosphere",
      mainImage: { src: "/images/crafted-cube-E.png" },
      contentBoxes: [
        {
          title: "V7880P",
          content: "Honey Mustard",
          boxColor: "#b8b169",
          textColor: "#000"
        },
        {
          title: "V8288P",
          content: "Stone Age",
          boxColor: "#5c675e",
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
          <h1 className="text-[50px] font-bold">Crafted Cube</h1>
          <p className="text-[20px] text-[#ffffffb3]">
            This home boasts an artistic, monolithic style with a contemporary
            flair. The mix of external claddings and textures enhances its
            modern appeal, while a uniquely designed, 5-shaped weather shed adds
            a striking, unconventional touch.
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

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center gap-8 mt-6 w-full text-center">
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
          <div className="tab-content">
            {/* Content Section */}
          <h2 className="text-2xl font-bold text-left gradient-text">{activeTab.title}</h2>
          <p className="text-lg mt-2 text-gray-700 text-left">{activeTab.description}</p>

          {/* Color Swatch Boxes Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  <p className="font-medium text-black">{box.title}</p>
                  <p className="text-gray-700">{box.content}</p>
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

export default CraftedCube;