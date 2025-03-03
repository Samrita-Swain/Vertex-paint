import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import HouseFormate from "./HouseFormate";
import ExteriorColor from "./ExteriorColor";
import Form from "../Form/Form";
import CalculatorForm from "../Form/CalculatorForm";
const ExteriorPaintsPage = () => {
  const [activeTab, setActiveTab] = useState("Wall Paints");
  const tabs = ["Wall Paints", "Textures"];
  return (
    <div>
      <div className="exteriorbanner p-12">
        <div className="container flex flex-col items-center">
        <h1 className="text-5xl text-white font-semibold mb-4 text-center">
          Exterior Wall Paints
        </h1>
        <p className="text-xl mb-8 text-white text-center">
          Explore the versatile range of exterior paint products for your home!
        </p>
        <button>
          View Deatils <FaArrowRight className="icon" />
        </button>
        </div>
      </div>
      <div className="exterior-second-band bg-[#fff5eb] p-12">
        <div className="w-full max-w-[70rem] mx-auto mt-10">
          {/* Tab Buttons */}
          <div className="flex border-b mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 text-center text-3xl"
              >
                <span
                  className={`relative pb-1 ${
                    activeTab === tab
                      ? "after:content-[''] after:block after:w-[40%] after:h-[2px] after:bg-black after:mx-auto"
                      : "text-gray-500 w-[40%]"
                  }`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 text-center">
            {activeTab === "Wall Paints" && (
              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]" data-aos="fade-up" data-aos-duration="1500">
                <div className="first-img relative">
                  <img
                    src="/images/Metal Guard.png"
                    alt=""
                    className="rounded-[10px]"
                  />

                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Ultima</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto{" "}
                      <span className="text-[18px] font-extrabold">15</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <a
                      href="../UltimaExterioremulsions"
                      className="exterior-second-band-button"
                    >
                      Explore
                      <FaArrowRight className="icon" />
                    </a>
                  </div>
                </div>

                <div className="second-img relative">
                  <img
                    src="/images/Luxury Emulsion.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Apex</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">6</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <a href="/ApexExterioremulsions" className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </a>
                  </div>
                </div>

                <div className="third-img relative">
                  <img
                    src="/images/ACME.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Acme</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">4</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <a href="/AcemExterioremulsions" className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Textures" && (
              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-1  gap-[2rem]" data-aos="fade-up" data-aos-duration="1500">
                <div className="first-img relative">
                  <img
                    src="/images/Luxury Emulsion.png"
                    alt=""
                    className="rounded-[10px]"
                  />

                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Ultima</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto{" "}
                      <span className="text-[18px] font-extrabold">15</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>

                <div className="second-img relative">
                  <img
                    src="/images/ACME.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Apex</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">6</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>

                <div className="third-img relative">
                  <img
                    src="/images/Metal Guard.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="text-[35px] font-bold mb-5">Acme</h1>
                    <p className="text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">4</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px] mb-5">Performance Warranty</p>
                    <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="inspired-by grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-12 bg-[#f7f2e7] justify-center items-center">
        <div className="inspired-by-content-part" data-aos="fade-right" data-aos-duration="1500">
          <h6 className="text-[40px] font-[500] mb-3">Get inspired by our</h6>
          <h1 className="text-[70px] font-[600] w-[89%] leading-[75px] gradient-text mb-3">
            Exquisite Collections
          </h1>
          <p className="text-[22px] font-[500] mb-5">
            Elevate your style and imagination with the range of Texture
            Collections
          </p>
          <button className="inspired-by-button flex items-center">
            Get Inspired <FaArrowRight className="icon" />
          </button>
        </div>

        <div className="inspired-by-image-part grid grid-cols-3 gap-3 w-full">
          <div className="first-img flex flex-col gap-3">
            <img
              src="/images/first-image.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-3.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="third-img">
            <img
              src="/images/image-5.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div className="second-img flex flex-col gap-3">
            <img
              src="/images/image-1.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in"
              data-aos-duration="1500"
            />
            <img
              src="/images/image-2.webp"
              alt=""
              className="w-full h-auto object-cover" data-aos="zoom-in" data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
      <Form /> 
      <HouseFormate />
      <ExteriorColor/>
      <CalculatorForm />   
    </div>
  );
};

export default ExteriorPaintsPage;
