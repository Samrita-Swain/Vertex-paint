import { useState } from "react";

const ElegantSimplicity = () => {
  const tabs = [
    {
      id: "A",
      color: "#f1ece2",
      title: "Elegant Simplicity - A",
      description:
        "The rich brick red paired with a gentle pink and softened by off-white creates a refined and sophisticated charm in this home.",
      mainImage: { src: "/images/Elegant Simplicity-A.png" },
      contentBoxes: [
        {
          title: "V0765P",
          content: "Morning Glory",
          boxColor: "#eee9df",
          textColor: "#000"
        },
        {
          title: "V8066P",
          content: "Tinge of Pink",
          boxColor: "#f8d5d0",
          textColor: "#000"
        },
        {
          title: "V8615P",
          content: "Copper Coast",
          boxColor: "#ad7162",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#dfd5cd",
      title: "Elegant Simplicity - B",
      description:
        "The soft creams accented with deep red create a striking contrast, giving the home a modern and stylish ambiance.",
      mainImage: { src: "/images/Elegant Simplicity-B.png" },
      contentBoxes: [
        {
          title: "V8756P",
          content: "Sound of Music",
          boxColor: "#dad0cb",
          textColor: "#000"
        },
        {
          title: "V8649P",
          content: "Hidden Vale",
          boxColor: "#b79e94",
          textColor: "#000"
        },
        {
          title: "V0509P",
          content: "Geranium",
          boxColor: "#ad493f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#d1e3e3",
      title: "Elegant Simplicity - C",
      description:
        "The calming white pairs effortlessly with cool blues, creating a bold yet serene fusion of seaside-inspired hues.",
      mainImage: { src: "/images/Elegant Simplicity-C.png" },
      contentBoxes: [
        {
          title: "V9228P",
          content: "Solitude",
          boxColor: "#cbdfdf",
          textColor: "#000"
        },
        {
          title: "V7411P",
          content: "Nautilus",
          boxColor: "#c1dfe4",
          textColor: "#000"
        },
        {
          title: "V6134P",
          content: "Smoke Grey",
          boxColor: "#6c808f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#f8eecb",
      title: "Elegant Simplicity - D",
      description:
        "The combination of brick red and soft pink, blended with a serene off-white, imparts a timeless and classic charm to this home.",
      mainImage: { src: "/images/Elegant Simplicity-D.png" },
      contentBoxes: [
        {
          title: "V7947P",
          content: "Corn Cob",
          boxColor: "#f3e9c6",
          textColor: "#000"
        },
        {
          title: "V8034P",
          content: "Pink Bib",
          boxColor: "#f8d0c6",
          textColor: "#000"
        },
        {
          title: "V9988P",
          content: "Rich Maple - N",
          boxColor: "#c66253",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#d4c3b4",
      title: "Elegant Simplicity - E",
      description:
        "With a beautiful interplay of colors and their shades, this home brings out the warmth of brown and beige, perfectly complemented by refreshing blue accents.",
      mainImage: { src: "/images/Elegant Simplicity-E.png" },
      contentBoxes: [
        {
          title: "V8778P",
          content: "Walnut Cream",
          boxColor: "#d0c1b2",
          textColor: "#000"
        },
        {
          title: "V8568P",
          content: "Indian Spice",
          boxColor: "#b7947b",
          textColor: "#000"
        },
        {
          title: "V8270P",
          content: "Ink Grey",
          boxColor: "#4e626c",
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
          <h1 className="text-[50px] font-bold">Elegant Simplicity</h1>
          <p className="text-[20px] text-[#ffffffb3]">
          This sleek and sophisticated home fits together
effortlessly, much like a jigsaw puzzle. The
combination of box windows, sloping, and flat roofs
gives it a sharp, contemporary edge
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

        <div className="p-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center gap-8 mt-6 w-full text-center">
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
          <h2 className="text-2xl font-bold text-left gradient-text">{activeTab.title}</h2>
          <p className="text-lg mt-2 text-gray-700 text-left">{activeTab.description}</p>

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

export default ElegantSimplicity;