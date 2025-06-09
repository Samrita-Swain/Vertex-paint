import { useState } from "react";

const RomanHeritage = () => {
  const tabs = [
    {
      id: "A",
      color: "#dccee4",
      title: "Roman Heritage - A",
      description:
        "Soft shades of lilac and earthy brown, paired with white and grey accents, give this home a gentle, dreamy ambiance that's pleasing to the eye",
      mainImage: { src: "/images/Roman Heritage-A.jpg" },
      contentBoxes: [
        {
          title: "V7162P",
          content: "Quartz Illusion",
          boxColor: "#dccee4",
          textColor: "#000"
        },
        {
          title: "V8527P",
          content: "Antelope",
          boxColor: "#b39671",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Lumiflakes Coarse Maroon",
          boxColor: "#a39c96",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#ede7db",
      title: "Roman Heritage - B",
      description:
        "The combination of pale yellow and charcoal grey, highlighted with white accents, creates a sense of calm and balance, giving this home a warm and inviting appeal.",
      mainImage: { src: "/images/Roman Heritage-B.jpg" },
      contentBoxes: [
        {
          title: "VL157P",
          content: "White Canvas",
          boxColor: "#ede7db",
          textColor: "#000"
        },
        {
          title: "V7887P",
          content: "Pine Cone",
          boxColor: "#c4a666",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#dfeae8",
      title: "Roman Heritage - C",
      description:
        "A breezy hue paired with crisp white and touches of rich wine brings style and grace to this home",
      mainImage: { src: "/images/Roman Heritage-C.jpg" },
      contentBoxes: [
        {
          title: "V7412P",
          content: "Whispering Breeze",
          boxColor: "#dfeae8",
          textColor: "#000"
        },
        {
          title: "V8304P",
          content: "Grey Matter",
          boxColor: "#838585",
          textColor: "#000"
        },
        {
          title: "V8109P",
          content: "Fine Wine",
          boxColor: "#81454f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#fcdabf",
      title: "Roman Heritage - D",
      description:
        "The home exudes elegance with its soft peach tones paired with slate grey, enhanced by crisp white accents",
      mainImage: { src: "/images/Roman Heritage-D.jpg" },
      contentBoxes: [
        {
          title: "V8002P",
          content: "Bashful Beige",
          boxColor: "#fcdabf",
          textColor: "#000"
        },
        {
          title: "V8325P",
          content: "Eclipse",
          boxColor: "#55564f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#abd7eb",
      title: "Roman Heritage - E",
      description:
        "Inspired by the serene Mediterranean coast, this home features soothing shades of blue and grey, complemented by refreshing white accents.",
      mainImage: { src: "/images/Roman Heritage-E.jpg" },
      contentBoxes: [
        {
          title: "V9210P",
          content: "Soft Blue",
          boxColor: "#abd7eb",
          textColor: "#000"
        },
        {
          title: "V8258P",
          content: "Winter Moon",
          boxColor: "#c7cacb",
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
        className="relative UltimaExterioremulsions-banner px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../images/color-options-banner.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center">
          <h1 className="text-5xl font-medium mb-4">Roman Heritage</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          This elegant house design employs the appealing
aesthetic of repetition, featuring a columned façade
and tall openings that lend a sense of grandeur. The
accent walls add a unique character, making the
home truly distinctive.
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

export default RomanHeritage;