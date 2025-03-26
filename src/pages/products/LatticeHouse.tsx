import { useState } from "react";

const LatticeHouse = () => {
  const tabs = [
    {
      id: "A",
      color: "#f1e8d8",
      title: "Lattice House - A",
      description:
        "Subtle grey textures along with earthy brown and grey accents, team up against a beige backdrop, to create a home that’s warm and inviting.",
      mainImage: { src: "/images/Lattice House-A.png" },
      contentBoxes: [
        {
          title: "VL136P",
          content: "Pebble White",
          boxColor: "#f1e8d8",
          textColor: "#000"
        },
        {
          title: "V8558P",
          content: "African Desert",
          boxColor: "#ac7d5a",
          textColor: "#000"
        },
        {
          title: "Vertex Fine Square",
          content: "Lumiflakes Coarse White",
          boxColor: "#676860",
          textColor: "#000"
        }
      ]
    },
    {
      id: "B",
      color: "#f3eedd",
      title: "Lattice House - B",
      description:
        "Pastel purple and cool grey against a backdrop of creamy beige, render this home a serene appeal.",
      mainImage: { src: "/images/Lattice House-B.png" },
      contentBoxes: [
        {
          title: "VL124P",
          content: "Pure Ivory",
          boxColor: "#f3eedd",
          textColor: "#000"
        },
        {
          title: "V7208P",
          content: "Petal Soft",
          boxColor: "#a4aed6",
          textColor: "#000"
        },
        {
          title: "V8234P",
          content: "Fleecy Coat",
          boxColor: "#b8b4b5",
          textColor: "#000"
        }
      ]
    },
    {
      id: "C",
      color: "#f6ead2",
      title: "Lattice House - C",
      description:
        "Creamy beige with accents of a rich brownish-magenta and pale pink, usher into this home, a rooted yet cosy vibe.",
      mainImage: { src: "/images/Lattice House-C.png" },
      contentBoxes: [
        {
          title: "V7931P",
          content: "Shredded Wheat",
          boxColor: "#f6ead2",
          textColor: "#000"
        },
        {
          title: "V8103P",
          content: "Mauve Medley",
          boxColor: "#af7779",
          textColor: "#000"
        },
        {
          title: "V8098P",
          content: "Pink Dollop",
          boxColor: "#fad5db",
          textColor: "#000"
        }
      ]
    },
    {
      id: "D",
      color: "#f3efe1",
      title: "Lattice House - D",
      description:
        "Rich bottle green and cool grey create vivid accents against a creamy beige wall, and lend this home a verdant look.",
      mainImage: { src: "/images/Lattice House-D.png" },
      contentBoxes: [
        {
          title: "VL122P",
          content: "Skimmed Cream",
          boxColor: "#f3efe1",
          textColor: "#000"
        },
        {
          title: "V7527P",
          content: "Green Haven",
          boxColor: "#66aea5",
          textColor: "#000"
        },
        {
          title: "V7233P",
          content: "Ice Cube",
          boxColor: "#b0bac8",
          textColor: "#000"
        }
      ]
    },
    {
      id: "E",
      color: "#f0e5e5",
      title: "Lattice House - E",
      description:
        "A pale blush pink along with accents of earthy brown and sunshine yellow, enliven this home and lend it an alluring vibe.",
      mainImage: { src: "/images/Lattice House-E.png" },
      contentBoxes: [
        {
          title: "V9108P",
          content: "Iris Ice",
          boxColor: "#f0e5e5",
          textColor: "#000"
        },
        {
          title: "V0318P",
          content: "Light Biscuit - N",
          boxColor: "#ddad90",
          textColor: "#000"
        },
        {
          title: "V7944P",
          content: "Sunspot",
          boxColor: "#fee090",
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
          <h1 className="text-5xl font-medium mb-4">Lattice House</h1>
          <p className="text-lg font-normal text-[#ffffffb3]">
          With a boxed façade and a geometric look, this
House Format is minimally compact and elegant. It
has an earthy appeal with an irregular yet linear
design. We can also see a beautiful combination of
wood and metal.
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

export default LatticeHouse;