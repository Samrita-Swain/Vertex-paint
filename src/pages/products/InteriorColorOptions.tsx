import React, { useState } from "react";

type RoomType = "livingRoom" | "diningRoom" | "bedroom" | "studyRoom";

interface ColorData {
  name: string;
  hex: string;
  code: string;
  image: string;
  roomImages: Record<RoomType, string>;
}

const colors: ColorData[] = [
  {
    name: "Ink Blue",
    hex: "#507BB2",
    code: "V7246",
    image: "/images/Ink Blue.jpg",
    roomImages: {
      livingRoom: "/images/IB-livingroom.jpg",
      diningRoom: "/images/ink-blue-dining-room.jpg",
      bedroom: "/images/IB-bedroom.jpg",
      studyRoom: "/images/IB-studyroom.jpg",
    }
  },
  {
    name: "Terrace Green",
    hex: "#77B98B",
    code: "V7607",
    image: "/images/Terrace Green.jpg",
    roomImages: {
      livingRoom: "/images/TR-livingroom.jpg",
      diningRoom: "/images/terrace-green-dining-room.jpg",
      bedroom: "/images/TR-bedroom.jpg",
      studyRoom: "/images/TR-studyroom.jpg",
    }
  },
  {
    name: "Touch of Fushia",
    hex: "#F6EDE9",
    code: "V8140",
    image: "/images/Touch of Fushia.jpg",
    roomImages: {
      livingRoom: "/images/TF-livingroom.jpg",
      diningRoom: "/images/touch-fushia-dining-room.jpg",
      bedroom: "/images/TF-bedroom.jpg",
      studyRoom: "/images/TF-studyroom.jpg",
    }
  },
  {
    name: "Twilight Pink",
    hex: "#E1A5CA",
    code: "V9416",
    image: "/images/Twilight Pink.jpg",
    roomImages: {
      livingRoom: "/images/TP-livingroom.jpg",
      diningRoom: "/images/twilight-pink-dining-room.jpg",
      bedroom: "/images/TP-bedroom.jpg",
      studyRoom: "/images/TP-studyroom.jpg",
    }
  },
];

const rooms = [
  { id: "livingRoom" as RoomType, name: "Living Room", icon: "🛋️" },
  { id: "diningRoom" as RoomType, name: "Dining Room", icon: "🍽️" },
  { id: "bedroom" as RoomType, name: "Bedroom", icon: "🛏️" },
  { id: "studyRoom" as RoomType, name: "Study Room", icon: "📚" },
];


const InteriorColorOptions = () => {
  const [selectedColor, setSelectedColor] = useState<ColorData>(colors[0]);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>("livingRoom");
  const [showMobileView, setShowMobileView] = useState(false);

  return (
    <div>
      <div
        className="relative InteriorColor-banner p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../images/color-options.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative content text-white text-center flex flex-col items-center">
          <h1 className="text-5xl text-white font-semibold mb-4">
            Interior Wall Paints
          </h1>
          <p className="text-lg font-normal">
            Explore the exclusive range of wall paint colors for every space.
          </p>
        </div>
      </div>
       {/* Main Content */}
       <div className="flex flex-col lg:flex-row p-8 lg:p-12 min-h-screen bg-gradient-to-br from-gray-50 to-white tabbuttom-interior">
        {/* Color Section */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Color</h2>
            <p className="text-gray-600">Select from our premium collection of interior wall paints</p>
          </div>

          {/* Display Colors */}
          <div className="grid grid-cols-2 lg:flex lg:justify-between gap-4 mb-8">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => {
                  setSelectedColor(color);
                  setShowMobileView(true);
                }}
                className={`cursor-pointer rounded-xl transition-all duration-300 transform ${
                  selectedColor.name === color.name
                    ? "shadow-2xl"
                    : "shadow-lg "
                }`}
                style={{ minWidth: "120px" }}
              >
                {/* Color Block */}
                <div
                  className={`rounded-t-xl h-24 lg:h-28 relative overflow-hidden ${
                    selectedColor.name === color.name ? "border-2" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor.name === color.name && (
                    <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Color Name and Code */}
                <div
                  className={`p-3 rounded-b-xl text-center transition-all duration-300 ${
                    selectedColor.name === color.name
                      ? "text-black shadow-inner border-2 border-t-0"
                      : "text-gray-800 bg-white"
                  }`}
                  style={{
                    backgroundColor:
                      selectedColor.name === color.name ? color.hex : "white",
                  }}
                >
                  <div className="text-sm font-bold">{color.name}</div>
                  <div className={`text-xs font-medium mt-1 ${
                    selectedColor.name === color.name ? "text-[#383b42] opacity-90" : "text-[#383b42]"
                  }`}>
                    {color.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Room Image */}
            <div className="relative">
              <img
                src={selectedColor.roomImages[selectedRoom]}
                alt={`${selectedColor.name} in ${rooms.find(r => r.id === selectedRoom)?.name}`}
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  // Fallback to default image if room-specific image doesn't exist
                  (e.target as HTMLImageElement).src = selectedColor.image;
                }}
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-sm font-semibold text-gray-800">
                  {rooms.find(r => r.id === selectedRoom)?.name}
                </span>
              </div>
            </div>

            {/* Room Selection Buttons */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                See this color in different rooms
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-all duration-300 transform ${
                      selectedRoom === room.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{room.icon}</span>
                    <span className="font-medium text-sm">{room.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen View */}
        {showMobileView && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
            {/* Header with back button */}
            <div className="sticky top-0 flex items-center justify-between p-4 bg-white shadow-sm border-b z-10">
              <button
                onClick={() => setShowMobileView(false)}
                className="flex items-center space-x-2 text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium">Back</span>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-bold text-gray-800">{selectedColor.name}</h2>
                <p className="text-sm text-gray-600">{selectedColor.code}</p>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>

            {/* Scrollable Content */}
            <div className="p-2">
              {/* Full Screen Image */}
              <div className="relative h-[50vh]">
                <img
                  src={selectedColor.roomImages[selectedRoom]}
                  alt={`${selectedColor.name} in ${rooms.find(r => r.id === selectedRoom)?.name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = selectedColor.image;
                  }}
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-gray-800">
                    {rooms.find(r => r.id === selectedRoom)?.name}
                  </span>
                </div>
              </div>

              {/* Room Selection Buttons - Mobile */}
              <div className="p-6 bg-white">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  See this color in different rooms
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`flex items-center justify-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                        selectedRoom === room.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-xl">{room.icon}</span>
                      <span className="font-medium text-lg">{room.name}</span>
                    </button>
                  ))}
                </div>
              </div>


            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InteriorColorOptions;
