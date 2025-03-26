import { useState } from "react";

const ArchedResidence = () => {
  const tabs = [
    {
      id: "A",
      color: "#ded6dc",
      title: "Arched Residence - A",
      description:
        "The lively pairing of soft lavender and bright orange gives this house a unique and memorable charm, ensuring it leaves a lasting impression.",
      mainImage: { src: "/images/Arched Residence-A.png" },
      contentBoxes: [
        {
          title: "V9139P",
          content: "Berry Shake",
          boxColor: "#ded6dc",
          textColor: "#000"
        },
        {
          title: "V7957P",
          content: "Orange Peel",
          boxColor: "#fe9b29",
          textColor: "#000"
        },
        {
          title: "V7161P",
          content: "Potpourri",
          boxColor: "#cac0df",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#c6d4b6",
      title: "Arched Residence - B",
      description:
        "The earthy combination of muted green and grey fills the house with a fresh, natural vibe, adding a touch of dignified elegance to its character.",
      mainImage: { src: "/images/Arched Residence-B.png" },
      contentBoxes: [
        {
          title: "V7690P",
          content: "Forest Foliage",
          boxColor: "#c6d4b6",
          textColor: "#000"
        },
        {
          title: "V8255P",
          content: "Stone Path",
          boxColor: "#6f757e",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#f2e0a3",
      title: "Arched Residence - C",
      description:
        "The refined mix of pale yellow and green, along with sophisticated woodwork, brings a lively energy to this house, creating a smooth and expansive atmosphere.",
      mainImage: { src: "/images/Arched Residence-C.png" },
      contentBoxes: [
        {
          title: "V0399P",
          content: "Pineapple - N",
          boxColor: "#f2e0a3",
          textColor: "#000"
        },
        {
          title: "V7526P",
          content: "Jade Impact",
          boxColor: "#439186",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#d4ba9d",
      title: "Arched Residence - D",
      description:
        "A touch of subdued blue against the warm off-white creates a delightful and stylish combination,while the subtle addition of brown brings an extra layer of sophistication to the structure",
      mainImage: { src: "/images/Arched Residence-D.png" },
      contentBoxes: [
        {
          title: "V4215P",
          content: "Swiss Coffee",
          boxColor: "#d4ba9d",
          textColor: "#000"
        },
        {
          title: "V8535P",
          content: "Brown Tan",
          boxColor: "#af8c6b",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#9fb1bb",
      title: "Arched Residence - E",
      description:
        "The harmonious blend of blue hues, complemented by elegant woodwork, gives this home a regal and luxurious ambiance.",
      mainImage: { src: "/images/Arched Residence-E.png" },
      contentBoxes: [
        {
          title: "V8266P",
          content: "Bali Blue",
          boxColor: "#9fb1bb",
          textColor: "#000"
        },
        {
          title: "V7366P",
          content: "Ashberry",
          boxColor: "#486e81",
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
          <h1 className="text-5xl font-medium mb-4">Arched Residence</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          Radiating opulence, this home’s mirrored, arched
windows evoke a palatial aura. The soaring double height foyer and beautifully tended garden further
enhance the villa, capturing luxury in every detail.
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

export default ArchedResidence;