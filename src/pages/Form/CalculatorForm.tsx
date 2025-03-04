// import React, { useState } from "react";

// const RoomMakeoverForm: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState<number>(1);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [formData, setFormData] = useState({
//     rooms: {} as Record<string, number>, // Stores selected rooms and their count
//     personalInfo: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//     },
//     preferences: {
//       budget: "",
//       timeline: "",
//       style: "",
//       additionalNotes: "",
//     },
//   });

//   const availableRooms = [
//     "Living Room",
//     "Kitchen",
//     "Master Bedroom",
//     "Guest Bedroom",
//     "Bathroom",
//     "Kids Room",
//     "Pooja Room",
//     "Study Room",
//   ];

//   const timelineOptions = [
//     "As soon as possible",
//     "Within 1 month",
//     "Within 3 months",
//     "3-6 months",
//     "More than 6 months",
//   ];

//   const styleOptions = [
//     "Modern",
//     "Traditional",
//     "Contemporary",
//     "Minimalist",
//     "Industrial",
//     "Bohemian",
//     "Scandinavian",
//     "Other",
//   ];

//   // Handle room selection (add/remove from formData)
//   const handleRoomSelection = (roomName: string) => {
//     setFormData((prevState) => {
//       const newRooms = { ...prevState.rooms };
//       if (newRooms[roomName]) {
//         delete newRooms[roomName]; // Remove if already selected
//       } else {
//         newRooms[roomName] = 1; // Default count 1 when selected
//       }
//       return { ...prevState, rooms: newRooms };
//     });
//   };

//   // Handle room count changes
//   const handleRoomCount = (roomName: string, change: number) => {
//     setFormData((prevState) => {
//       const newRooms = { ...prevState.rooms };
//       const newCount = (newRooms[roomName] || 1) + change;
//       if (newCount > 0) {
//         newRooms[roomName] = newCount;
//       }
//       return { ...prevState, rooms: newRooms };
//     });
//   };

//   // Handle personal info changes
//   const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       personalInfo: {
//         ...formData.personalInfo,
//         [name]: value,
//       },
//     });
//   };

//   // Handle preferences changes
//   const handlePreferencesChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       preferences: {
//         ...formData.preferences,
//         [name]: value,
//       },
//     });
//   };

//   // Handle navigation
//   const handleNext = () => setCurrentStep((prev) => prev + 1);
//   const handlePrevious = () => setCurrentStep((prev) => prev - 1);

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const scriptURL = "https://script.google.com/macros/s/AKfycbzt1-3wtz3Mt5TV5Pk4kOM0jGV_lFjI0OspLU3b-8SpYX_YfMMaP_S3aCNxMu3NEObx2g/exec";

//     try {
//       // Format selected rooms data
//       const selectedRooms = Object.entries(formData.rooms)
//         .map(([room, count]) => `${room} (${count})`)
//         .join(", ");

//       // Create a URLSearchParams object instead of FormData
//       const params = new URLSearchParams();

//       // Add personal information
//       params.append("name", formData.personalInfo.name);
//       params.append("email", formData.personalInfo.email);
//       params.append("phone", formData.personalInfo.phone);
//       params.append("address", formData.personalInfo.address);

//       // Add preferences
//       params.append("budget", formData.preferences.budget);
//       params.append("timeline", formData.preferences.timeline);
//       params.append("style", formData.preferences.style);
//       params.append("additionalNotes", formData.preferences.additionalNotes);
//       params.append("selectedRooms", selectedRooms);

//       const response = await fetch(scriptURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: params.toString(),
//         mode: "no-cors", // Important for cross-origin requests to Google Scripts
//       });

//       // Since no-cors returns an opaque response, we can't check response.ok
//       // We'll assume success
//       alert("Thanks for contacting us! We will reach out soon.");
//       // Reset the form
//       setFormData({
//         rooms: {},
//         personalInfo: { name: "", email: "", phone: "", address: "" },
//         preferences: { budget: "", timeline: "", style: "", additionalNotes: "" },
//       });
//       setCurrentStep(1); // Reset to first step
//     } catch (error) {
//       console.error("Error!", error);
//       alert("Submission failed. Please check your internet connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="p-12">
//       <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow">
//         <div className="mb-8">
//           <div className="flex justify-between">
//             <span className="font-semibold">Step {currentStep}/3</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//             <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} id="room-makeover-form">
//           {currentStep === 1 && (
//             <div>
//               <h2 className="text-2xl font-bold text-center mb-8">Select which room(s) to makeover</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {availableRooms.map((room) => {
//                   const isSelected = formData.rooms.hasOwnProperty(room);
//                   const count = formData.rooms[room] || 0;

//                   return (
//                     <div key={room} className="border rounded p-4 flex items-center justify-between">
//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="h-5 w-5 text-green-500"
//                           checked={isSelected}
//                           onChange={() => handleRoomSelection(room)}
//                         />
//                         <label className="ml-2 text-lg">{room}</label>
//                       </div>
//                       {isSelected && (
//                         <div className="flex items-center bg-gray-100 rounded-full px-2">
//                           <button
//                             type="button"
//                             className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center"
//                             onClick={() => handleRoomCount(room, -1)}
//                             disabled={count <= 1}
//                           >
//                             -
//                           </button>
//                           <span className="mx-2">{count.toString().padStart(2, "0")}</span>
//                           <button
//                             type="button"
//                             className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center"
//                             onClick={() => handleRoomCount(room, 1)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="mt-8 flex justify-center">
//                 <button
//                   type="button"
//                   className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded"
//                   onClick={handleNext}
//                   disabled={Object.keys(formData.rooms).length === 0}
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}

//           {currentStep === 2 && (
//             <div>
//               <h2 className="text-2xl font-bold text-center mb-8">Personal Information</h2>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.personalInfo.name}
//                   placeholder="Full Name"
//                   className="w-full p-2 border rounded"
//                   onChange={handlePersonalInfoChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.personalInfo.email}
//                   placeholder="Email"
//                   className="w-full p-2 border rounded"
//                   onChange={handlePersonalInfoChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.personalInfo.phone}
//                   placeholder="Phone"
//                   className="w-full p-2 border rounded"
//                   onChange={handlePersonalInfoChange}
//                   required
//                 />
//                 <textarea
//                   name="address"
//                   value={formData.personalInfo.address}
//                   placeholder="Address"
//                   className="w-full p-2 border rounded"
//                   rows={3}
//                   onChange={handlePersonalInfoChange}
//                   required
//                 ></textarea>
//               </div>
//               <div className="mt-8 flex justify-between">
//                 <button
//                   type="button"
//                   className="bg-gray-300 hover:bg-gray-400 px-8 py-3 rounded"
//                   onClick={handlePrevious}
//                 >
//                   ← Previous
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded"
//                   onClick={handleNext}
//                   disabled={!formData.personalInfo.name || !formData.personalInfo.email || !formData.personalInfo.phone || !formData.personalInfo.address}
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}

//           {currentStep === 3 && (
//             <div>
//               <h2 className="text-2xl font-bold text-center mb-8">Preferences</h2>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block mb-1">Budget Range</label>
//                   <select
//                     name="budget"
//                     value={formData.preferences.budget}
//                     className="w-full p-2 border rounded"
//                     onChange={handlePreferencesChange as React.ChangeEventHandler<HTMLSelectElement>}
//                     required
//                   >
//                     <option value="">Select Budget Range</option>
//                     <option value="Under $5,000">Under $5,000</option>
//                     <option value="$5,000 - $10,000">$5,000 - $10,000</option>
//                     <option value="$10,000 - $20,000">$10,000 - $20,000</option>
//                     <option value="$20,000 - $50,000">$20,000 - $50,000</option>
//                     <option value="Over $50,000">Over $50,000</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Timeline</label>
//                   <select
//                     name="timeline"
//                     value={formData.preferences.timeline}
//                     className="w-full p-2 border rounded"
//                     onChange={handlePreferencesChange as React.ChangeEventHandler<HTMLSelectElement>}
//                     required
//                   >
//                     <option value="">Select Timeline</option>
//                     {timelineOptions.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Preferred Style</label>
//                   <select
//                     name="style"
//                     value={formData.preferences.style}
//                     className="w-full p-2 border rounded"
//                     onChange={handlePreferencesChange as React.ChangeEventHandler<HTMLSelectElement>}
//                     required
//                   >
//                     <option value="">Select Style</option>
//                     {styleOptions.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block mb-1">Additional Notes</label>
//                   <textarea
//                     name="additionalNotes"
//                     value={formData.preferences.additionalNotes}
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                     placeholder="Any specific requirements or preferences..."
//                     onChange={handlePreferencesChange}
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="mt-8 flex justify-between">
//                 <button
//                   type="button"
//                   className="bg-gray-300 hover:bg-gray-400 px-8 py-3 rounded"
//                   onClick={handlePrevious}
//                 >
//                   ← Previous
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded"
//                   disabled={isSubmitting || !formData.preferences.budget || !formData.preferences.timeline || !formData.preferences.style}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Request"}
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RoomMakeoverForm;

// const CalculatorForm = () => {

//   return (
//     <div className="p-12">
//       <div className="bg-[#2c3789] text-white p-12 rounded-[30px] w-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center">
//         <div className="content">
//         <h6 className="text-[20px] font-[400]">Paint budget Calculator</h6>
//         <h1 className="text-[40px] font-[500]">Get instant budget estimates</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CalculatorForm

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const productPrices: Record<string, number> = {
  "Wall Primer": 1.5,
  "Emulsion Paint": 2.5,
  "Ceiling Paint": 2.0,
  "Wood Polish": 3.0,
  "Exterior Primer": 1.8,
  "Weather Coat Paint": 3.2,
  "Exterior Emulsion": 2.8,
  Waterproofing: 4.0,
};

const interiorProducts = [
  "Wall Primer",
  "Emulsion Paint",
  "Ceiling Paint",
  "Wood Polish",
];
const exteriorProducts = [
  "Exterior Primer",
  "Weather Coat Paint",
  "Exterior Emulsion",
  "Waterproofing",
];

const PaintingCalculatorForm: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const [area, setArea] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0); // Default to 0

  const handleProjectSelect = (project: string) => setSelectedProject(project);
  const handleSpaceSelect = (space: string) => {
    setSelectedSpace(space);
    setSelectedProducts([]); // Reset selected products when space changes
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setArea(value);
  };

  const handleProductSelect = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  const handleSubmit = () => {
    if (
      !selectedProject ||
      !selectedSpace ||
      !area ||
      selectedProducts.length === 0
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const areaValue = parseFloat(area);
    let cost = 0;

    selectedProducts.forEach((product) => {
      cost += (productPrices[product] || 0) * areaValue;
    });

    setTotalCost(cost);
  };

  return (
    <div className="p-12">
      <div className="content mb-5 flex flex-col items-center">
        <h6 className=" text-gray-600 text-[20px]">Paint Budget Calculator</h6>
        <h1 className="gradient-text text-[40px] font-bold">
          Get Instant Budget Estimates
        </h1>
      </div>

      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6"
        data-aos="fade-up"
      >
        {/* Left Section: Form */}
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-xl">
          {/* Step 1: Select Project Type */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              1. Select your type of project{" "}
              <span className="text-red-500">*</span>
            </h3>
            <div className="flex gap-4">
              {["Fresh Painting", "Repainting"].map((project) => (
                <button
                  key={project}
                  className={`flex-1 p-4 border rounded-lg transition ${
                    selectedProject === project
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleProjectSelect(project)}
                >
                  {project}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Space */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              2. Select the space <span className="text-red-500">*</span>
            </h3>
            <div className="flex gap-4">
              {["Interior", "Exterior"].map((space) => (
                <button
                  key={space}
                  className={`flex-1 p-4 border rounded-lg transition ${
                    selectedSpace === space
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleSpaceSelect(space)}
                >
                  {space}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Enter Total Area */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              3. Enter total area in SQFT{" "}
              <span className="text-red-500">*</span>
            </h3>
            <input
              type="text"
              placeholder="Area in SQFT"
              value={area}
              onChange={handleAreaChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="total-part flex flex-col md:flex-row items-center justify-between mt-6 border-gray-300 pt-4 gap-4">
  {/* Submit Button */}
  <button
    className="w-full md:w-auto bg-yellow-500 border border-yellow-500 text-black p-3 rounded-[0.5rem] font-bold flex items-center justify-center space-x-2 hover:bg-transparent transition duration-300 !mb-0 !text-[20px] inspired-by-button"
    onClick={handleSubmit}
  >
    Calculate Now <FaArrowRight className="icon" />
  </button>

  {/* Display Total Cost */}
  <h2 className="text-xl font-bold bg-[#2c3789] text-white p-[10px] rounded-[10px] text-center w-full md:w-auto">
    Estimated Cost: Rs.{totalCost.toFixed(2)}
  </h2>
</div>

        </div>

        {/* Right Section: Product Selection and Total Cost */}
        <div className="w-full p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Available Products</h3>
          <div className="grid gap-2">
            {/* Show both lists if no space is selected */}
            {(selectedSpace === "Interior" || selectedSpace === null) &&
              interiorProducts.map((product) => (
                <button
                  key={product}
                  className={`p-3 border rounded-lg text-left transition ${
                    selectedProducts.includes(product)
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  {product} - Rs.{productPrices[product]} per SQFT
                </button>
              ))}

            {(selectedSpace === "Exterior" || selectedSpace === null) &&
              exteriorProducts.map((product) => (
                <button
                  key={product}
                  className={`p-3 border rounded-lg text-left transition ${
                    selectedProducts.includes(product)
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  {product} - Rs.{productPrices[product]} per SQFT
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCalculatorForm;
