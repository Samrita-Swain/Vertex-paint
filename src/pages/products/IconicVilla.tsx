import { useState } from "react";

const IconicVilla = () => {
  const tabs = [
    {
      id: "A",
      color: "#ebd9ad",
      title: "Iconic Villa - A",
      description:
        "A beautiful blend of earthy colours, brown and beige invigorate this house and lends it a warm sun-kissed aura.",
      mainImage: { src: "/images/Iconic Villa - A.jpg" },
      contentBoxes: [
        {
          title: "V7890P",
          content: "Sisal Mat",
          boxColor: "#ebd9ad",
          textColor: "#000"
        },
        {
          title: "V7877P",
          content: "Ripe Olive",
          boxColor: "#ba9c40",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Aristone Yellow",
          boxColor: "#676860",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f3eee2",
      title: "Iconic Villa - B",
      description:
        "Accents of lively yellow and blue blend in beautifully with the base white in this home enlivening and elevating it effortlessly.",
      mainImage: { src: "/images/Iconic Villa - B.jpg" },
      contentBoxes: [
        {
          title: "VL103P",
          content: "Pearl Star",
          boxColor: "#f3eee2",
          textColor: "#000"
        },
        {
          title: "V7415P",
          content: "Steel Mesh",
          boxColor: "#709ca7",
          textColor: "#000"
        },
        {
          title: "V9876P",
          content: "Happy Canary - N",
          boxColor: "#fedc74",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#f0e6d2",
      title: "Iconic Villa - C",
      description:
        "A contrasting colour combination of fresh beige and accents of dark blue and orange add a refreshing and formal perspective to this modern structure.",
      mainImage: { src: "/images/Iconic Villa - C.jpg" },
      contentBoxes: [
        {
          title: "V0942P",
          content: "Daybreak",
          boxColor: "#f0e6d2",
          textColor: "#000"
        },
        {
          title: "V9643P",
          content: "Sailor’s Stripes - N",
          boxColor: "#415273",
          textColor: "#000"
        },
        {
          title: "V7959P",
          content: "Orange Crush",
          boxColor: "#fec169",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#fae7bc",
      title: "Iconic Villa - D",
      description:
        "A lively main colour beige complemented by subtle undertones of purple, highlights the elegant woodwork in this house and makes it look classy.",
      mainImage: { src: "/images/Iconic Villa-D.png" },
      contentBoxes: [
        {
          title: "V7954P",
          content: "Dreamsicle",
          boxColor: "#fae7bc",
          textColor: "#000"
        },
        {
          title: "V8206P",
          content: "Cardinal",
          boxColor: "#82717c",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#e5ebcd",
      title: "Iconic Villa - E",
      description:
        "A regal colour combination of a formal maroon and a subtle green lends this house a modern and trendy aesthetic.",
      mainImage: { src: "/images/Iconic Villa-E.png" },
      contentBoxes: [
        {
          title: "V2353P",
          content: "Alto - N",
          boxColor: "#e5ebcd",
          textColor: "#000"
        },
        {
          title: "V8101P",
          content: "Milan Red",
          boxColor: "#824b4f",
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
          <h1 className="text-5xl font-medium mb-4">Iconic Villa</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          This architectural style, with its emphasis on
horizontal planes, gives the house a spacious
feel. The open façade design, smart wood
accents, and elegantly spaced structures
contribute to its modern and stylish appearance.
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

export default IconicVilla;