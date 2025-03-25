import { useState } from "react";

const RetroModern = () => {
  const tabs = [
    {
      id: "A",
      color: "#f7efd7",
      title: "Retro Modern - A",
      description:
        "A dash of vivid yellow combined with an earthy brown texture give this home a flourish. The calm off-white also provides a solid contrast to give it flair.",
      mainImage: { src: "/images/Retro Modern-A.png" },
      contentBoxes: [
        {
          title: "V7956P",
          content: "Honey Dew",
          boxColor: "#f7efd7",
          textColor: "#000"
        },
        {
          title: "V7950P",
          content: "Fire Globe",
          boxColor: "#feb747",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Aeris Rust",
          boxColor: "#676860",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#fee2aa",
      title: "Retro Modern - B",
      description:
        "With various shades of yellow, this house has a unique character that makes it eye-catching.",
      mainImage: { src: "/images/Retro Modern-B.png" },
      contentBoxes: [
        {
          title: "V7953P",
          content: "Fairy Glitter",
          boxColor: "#fee2aa",
          textColor: "#000"
        },
        {
          title: "V7975P",
          content: "Roasted Sesame",
          boxColor: "#feb46d",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#f7dec8",
      title: "Retro Modern - C",
      description:
        "A contrasting and appealing colour combination of different shades of green and a light pink gives this house an opulent and novel look.",
      mainImage: { src: "/images/Retro Modern-C.png" },
      contentBoxes: [
        {
          title: "V8019P",
          content: "Coral Rocks",
          boxColor: "#f7dec8",
          textColor: "#000"
        },
        {
          title: "V7778P",
          content: "Limon",
          boxColor: "#e7ebbd",
          textColor: "#000"
        },
        {
          title: "K137",
          content: "Basilico - N",
          boxColor: "#637165",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#efdfce",
      title: "Retro Modern - D",
      description:
        "A unique blend of a cool blue and a chocolate brown lends this home a contemporary and classy finish. These accents combine really well with a pale pink base.",
      mainImage: { src: "/images/Retro Modern-D.png" },
      contentBoxes: [
        {
          title: "V8580P",
          content: "Memories",
          boxColor: "#efdfce",
          textColor: "#000"
        },
        {
          title: "V7369P",
          content: "Harbor Fog",
          boxColor: "#96bdcc",
          textColor: "#000"
        },
        {
          title: "V8574P",
          content: "Burnished Caramel",
          boxColor: "#99745c",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#d7e8b5",
      title: "Retro Modern - E",
      description:
        "A pastel green mixes really well with a classic brown to give this home a refreshing look and an inviting appeal.",
      mainImage: { src: "/images/Retro Modern-E.png" },
      contentBoxes: [
        {
          title: "V7713P",
          content: "Lime Squash",
          boxColor: "#d7e8b5",
          textColor: "#000"
        },
        {
          title: "V8565P",
          content: "Cairo Bazaar",
          boxColor: "#86624a",
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
          <h1 className="text-5xl font-medium mb-4">Retro Modern</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          With rising multi-level terraces this house looks
layered. The architectural style provides scope for
colour schemes that amplify the nature of the
structure. This home has a distinct personality with
use of local materials like laterite.
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

export default RetroModern;