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
    <div className="calculator-banner p-12">
      <div className="content mb-5 flex flex-col items-center">
        <h6 className=" text-gray-600 text-lg font-normal mb-2 text-center">Paint Budget Calculator</h6>
        <h1 className="mb-[35px] gradient-text text-4xl font-semibold text-center">
          Get Instant Budget Estimates
        </h1>
      </div>

      <div
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6"
        data-aos="fade-up" data-aos-duration="1500"
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
    className="w-full md:w-auto bg-yellow-500 border border-yellow-500 text-black p-3 rounded-[0.5rem] font-medium flex items-center justify-center space-x-2 hover:bg-transparent transition duration-300 !mb-0 inspired-by-button !text-lg"
    onClick={handleSubmit}
  >
    Calculate Now <FaArrowRight className="icon" />
  </button>

  {/* Display Total Cost */}
  <h2 className="text-lg font-medium bg-[#2c3789] text-white p-[10px] rounded-[10px] text-center w-full md:w-auto">
    Estimated Cost: Rs.{totalCost.toFixed(2)}
  </h2>
</div>

        </div>

        {/* Right Section: Product Selection and Total Cost */}
        <div className="w-full p-6 shadow-lg rounded-xl bg-[#f3f3f3e0]">
          <h3 className="text-lg font-semibold mb-4">Available Products{" "}
          <span className="text-red-500">*</span>
          </h3>
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
