import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";


const productPrices: Record<string, number> = {
  "FINE SQUARE EXTERIOR EMULSION": 1.5,
  "PREMIUM EMLUSION": 1.94,
  "SELECT MATT FINISH": 1.8,
  "ACME EXTERIOR EMULSION": 2.92,
  "ACME WRP ( WATER REPPELENT PAINT)": 3.2,
  "SELECT SHEEN": 3.0,
  "FINE SQUARE - HI SHEEN": 2.8,
  "SILK SHINE - SUPER GLOSS": 3.59,
  "TITANIUM ONE": 4.27,
  "ULTRA WRP EXT EMULSION": 5.2,
  "FINE SQUARE INTERIOR EMULSION": 2.8,
  "SILK SHINE - PEARL GLOSS": 2.91,
  "CEILING WHITE": 3.62,
  "EASY WASH LUXURY EMULSION": 4.03,
  "Silk Shine Special Effect paints": 2.8,
  "ACME WATER THINNABLE PRIMER": 1.08,
  "VERTEX WATER THINNABLE PRIMER": 1.2,
  "BASE COAT": 1.41,
  "ULTRA WALL SEALER 3IN1": 0.99,

};

const productImages: Record<string, string> = {
  "FINE SQUARE EXTERIOR EMULSION": "/images/fine-square.png",
  "PREMIUM EMLUSION": "/images/premium-eml.png",
  "SELECT MATT FINISH": "/images/matt-finish.png",
  "ACME EXTERIOR EMULSION": "/images/acme-exterior-eml.png",
  "ACME WRP ( WATER REPPELENT PAINT)": "/images/acme-water-thinnable-primer.png",
  "SELECT SHEEN": "/images/Select-sheen.png",
  "FINE SQUARE - HI SHEEN": "/images/1.png",
  "SILK SHINE - SUPER GLOSS": "/images/Super-gloss.png",
  "TITANIUM ONE": "/images/titanium-one.png",
  "ULTRA WRP EXT EMULSION": "/images/ultra-wrp-ext-eml.png",
  "FINE SQUARE INTERIOR EMULSION": "/images/fine-square.png",
  "SILK SHINE - PEARL GLOSS": "/images/Pearl-gloss.png",
  "CEILING WHITE": "/images/ceiling-white.png",
  "EASY WASH LUXURY EMULSION": "/images/easy-wash-luxury-eml.png",
  "Silk Shine Special Effect paints": "/images/1.png",
  "ACME WATER THINNABLE PRIMER": "/images/acme-water-thinnable-primer.png",
  "VERTEX WATER THINNABLE PRIMER": "/images/1.png",
  "BASE COAT": "/images/exterior-base-coat.png",
  "ULTRA WALL SEALER 3IN1": "/images/ULTRA-WALL-SEALER.png",
};

const interiorProducts = [
  "FINE SQUARE INTERIOR EMULSION",
  "SILK SHINE - PEARL GLOSS",
  "CEILING WHITE",
  "EASY WASH LUXURY EMULSION",
  "Silk Shine Special Effect paints",
];
const exteriorProducts = [
  "FINE SQUARE EXTERIOR EMULSION",
  "PREMIUM EMLUSION",
  "SELECT MATT FINISH",
  "SELECT SHEEN",
  "ACME EXTERIOR EMULSION",
  "ACME WRP ( WATER REPPELENT PAINT)",
  "FINE SQUARE - HI SHEEN",
  "SILK SHINE - SUPER GLOSS",
  "TITANIUM ONE",
  "ULTRA WRP EXT EMULSION",
  "ACME WATER THINNABLE PRIMER",
  "VERTEX WATER THINNABLE PRIMER",
  "BASE COAT",
  "ULTRA WALL SEALER 3IN1",
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
    if (!selectedProject || !selectedSpace || !area || selectedProducts.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Information",
        text: "Please fill out all fields before calculating.",
        confirmButtonColor: "#fbbf24", // Yellow color
      });
      return;
    }
  
    const areaValue = parseFloat(area);
    let cost = selectedProducts.reduce(
      (sum, product) => sum + (productPrices[product] || 0) * areaValue,
      0
    );
  
    setTotalCost(cost);

  };
  

  return (
    <div className="calculator-banner p-10">
      <div className="content mb-5 flex flex-col items-center">
        <h6 className=" text-gray-600 text-lg font-normal mb-2 text-center">
          Paint Budget Calculator
        </h6>
        <h1 className="mb-[35px] gradient-text text-4xl font-semibold text-center">
          Get Instant Budget Estimates
        </h1>
      </div>

      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Left Section: Form */}
        <div className="w-full mx-auto p-6 shadow-lg rounded-xl bg-[#f3f3f3e0]">
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
              className="w-full md:w-auto bg-yellow-500 border border-yellow-500 text-black p-3 rounded-[0.5rem] font-medium flex items-center justify-center space-x-2 hover:bg-transparent transition duration-300 !mb-0 inspired-by-button"
              onClick={handleSubmit}
            >
              Calculate Now <FaArrowRight className="icon" />
            </button>

            {/* Display Total Cost */}
            <h2 className="text-md font-medium bg-[#2c3789] text-white p-[10px] rounded-[10px] text-center w-full md:w-auto">
              Estimated Cost: Rs.{totalCost.toFixed(2)}
            </h2>
          </div>
        </div>

        {/* Right Section: Product Selection and Total Cost */}
        <div className="w-full p-6 shadow-lg rounded-xl bg-[#f3f3f3e0]">
          <h3 className="text-lg font-semibold mb-4">
            Available Products <span className="text-red-500">*</span>
          </h3>

          {/* Scrollable Product List */}
          <div className="grid gap-2 max-h-80 overflow-y-auto custom-scrollbar coloroptions">
            {(selectedSpace === "Interior" || selectedSpace === null) &&
              interiorProducts.map((product) => (
                <button
                  key={product}
                  className={`p-3 border rounded-lg flex justify-between items-center text-left transition ${
                    selectedProducts.includes(product)
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  {product} - Rs.{productPrices[product]} per SQFT
                  <img
                    src={productImages[product]}
                    alt={product}
                    className="w-12 h-12 rounded"
                  />
                </button>
              ))}

            {(selectedSpace === "Exterior" || selectedSpace === null) &&
              exteriorProducts.map((product) => (
                <button
                  key={product}
                  className={`p-3 border rounded-lg flex justify-between items-center text-left transition ${
                    selectedProducts.includes(product)
                      ? "border-black bg-gray-100 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  {product} - Rs.{productPrices[product]} per SQFT
                  <img
                    src={productImages[product]}
                    alt={product}
                    className="w-12 h-12 rounded"
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCalculatorForm;
