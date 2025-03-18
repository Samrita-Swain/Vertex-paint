import { useState } from "react";

const CountryStyle = () => {
  const tabs = [
    {
      id: "A",
      color: "#f4f2e8",
      title: "Country-style - A",
      description:
        "With its subtle charm, beige blends effortlessly with bold brick red, giving the home a cozy and inviting personality",
      mainImage: { src: "/images/Country-style-A.png" },
      contentBoxes: [
        {
          title: "VL155P",
          content: "Pale Sisal",
          boxColor: "#f4f2e8",
          textColor: "#000"
        },
        {
          title: "V0509P",
          content: "Geranium",
          boxColor: "#b34b42",
          textColor: "#000"
        },
        {
          title: "V8780P",
          content: "Southern Sand",
          boxColor: "#e6dcd1",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f2efdc",
      title: "Country-style - B",
      description:
        "The majestic white is perfectly paired with a lively yellow, creating a vibrant pop of color that stands out against the expanse of white.",
      mainImage: { src: "/images/Country-style-B.png" },
      contentBoxes: [
        {
          title: "V7836P",
          content: "Vanilla Ice",
          boxColor: "#f2efdc",
          textColor: "#000"
        },
        {
          title: "V9867P",
          content: "Mosambi Yellow - N",
          boxColor: "#f2d16f",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#d7d4cf",
      title: "Country-style - C",
      description:
        "Featuring an appealing blend of yellow and brown accents against a calming white base, this house exudes an exquisite and artistic charm.",
      mainImage: { src: "/images/Country-style-C.png" },
      contentBoxes: [
        {
          title: "V8299P",
          content: "Ice Age",
          boxColor: "#d7d4cf",
          textColor: "#000"
        },
        {
          title: "V8113P",
          content: "Bed of Roses",
          boxColor: "#e0abb4",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#dce49f",
      title: "Country-style - D",
      description:
        "The harmonious fusion of vibrant green and earthy red creates a refreshing atmosphere in this home, while a touch of soft pink adds a unique character to the space.",
      mainImage: { src: "/images/Country-style-D.png" },
      contentBoxes: [
        {
          title: "V7777P",
          content: "Fresh Sprout",
          boxColor: "#dce49f",
          textColor: "#000"
        },
        {
          title: "V8106P",
          content: "Daisy Bunch",
          boxColor: "#e5bec0",
          textColor: "#000"
        },
        {
          title: "V9983P",
          content: "Brick Dust - N",
          boxColor: "#b75e56",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#acb89e",
      title: "Country-style - E",
      description:
        "With pale yellow as the primary color and dark grey accents, this house exudes a warm and inviting atmosphere",
      mainImage: { src: "/images/Country-style-E.png" },
      contentBoxes: [
        {
          title: "V8417P",
          content: "Herb Bouquet",
          boxColor: "#acb89e",
          textColor: "#000"
        },
        {
          title: "V9405P",
          content: "Rich Tomato",
          boxColor: "#ab4e49",
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
          <h1 className="text-[50px] font-bold">Country Style</h1>
          <p className="text-[20px] text-[#ffffffb3]">
          This home exudes a compact and classy charm
through its balanced symmetry. Featuring sloping
roofs with weather sheds, along with a harmonious
mix of stone and tile elements, complemented by an
external wood façade, it captures the essence of rustic style.
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

        <div className="p-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center gap-8 w-full text-center">
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

export default CountryStyle;