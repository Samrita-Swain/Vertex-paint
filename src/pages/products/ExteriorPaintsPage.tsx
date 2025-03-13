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
     
      <div
        className="relative Exteriore-banner p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../images/Exterior-banner.jpeg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center flex flex-col items-center">
        <h1 className="text-5xl text-white font-semibold mb-4 text-center">
          Exterior Wall Paints
        </h1>
        <p className="text-xl mb-8 text-white text-center">
          Explore the versatile range of exterior paint products for your home!
        </p>
        {/* <button className="exterior-button">
          View Deatils <FaArrowRight className="icon" />
        </button> */}
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
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[2rem]" data-aos="fade-up" data-aos-duration="1500">
                <div className="first-img relative">
                  <a href="/Exterior/FineSquare" className="cursor-pointer">
                  <img
                    src="/images/Fine Square.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  </a>

                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[30px] font-bold mb-5">Fine Square</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto{" "}
                      <span className="exterior-p text-[18px] font-extrabold">15</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px]">Performance Warranty</p>
                    {/* <a
                      href="../UltimaExterioremulsions"
                      className="exterior-second-band-button"
                    >
                      Explore
                      <FaArrowRight className="icon" />
                    </a> */}
                  </div>
                </div>

                <div className="second-img relative">
                  <a href="/Exterior/SilkShine" className="cursor-pointer">
                  <img
                    src="/images/Luxury Emulsion.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  </a>
                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[30px] font-bold mb-5">Silk Shine</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="exterior-p text-[18px] font-extrabold">6</span>{" "}
                      Years
                    </p>
                    <p className="text-[15px]">Performance Warranty</p>
                    {/* <a href="/ApexExterioremulsions" className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </a> */}
                  </div>
                </div>

                <div className="third-img relative">
                  <a href="/Exterior/TitaniumOne" className="cursor-pointer">
                  <img
                    src="/images/Titanium One.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  </a>
                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[30px] font-bold mb-5">Titanium One</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">4</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px]">Performance Warranty</p>
                    {/* <a href="/AcemExterioremulsions" className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </a> */}
                  </div>
                </div>

                <div className="fourth-img relative">
                  <a href="/Exterior/UltraWrp" className="cursor-pointer">
                  <img
                    src="/images/Ultra wrp.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  </a>
                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[30px] font-bold mb-5">Ultra WRP</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">4</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px]">Performance Warranty</p>
                    {/* <a href="/AcemExterioremulsions" className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </a> */}
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
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[35px] font-bold mb-5">Ultima</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto{" "}
                      <span className="text-[18px] font-extrabold">15</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px] mb-5">Performance Warranty</p>
                    {/* <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button> */}
                  </div>
                </div>

                <div className="second-img relative">
                  <img
                    src="/images/ACME.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[35px] font-bold mb-5">Apex</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">6</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px] mb-5">Performance Warranty</p>
                    {/* <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button> */}
                  </div>
                </div>

                <div className="third-img relative">
                  <img
                    src="/images/Metal Guard.png"
                    alt=""
                    className="rounded-[10px]"
                  />
                  {/* Centering Content */}
                  <div className="content w-full absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 rounded-[10px] flex flex-col items-center">
                    <h1 className="exterior-text text-[35px] font-bold mb-5">Acme</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">4</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px] mb-5">Performance Warranty</p>
                    {/* <button className="exterior-second-band-button">
                      Explore
                      <FaArrowRight className="icon" />
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="exterior-Ultima-band p-12 bg-[#fff] flex flex-col items-center">
        <h1 className="gradient-text text-[40px] font-bold text-center mb-[35px]">Exterior Emulsions
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          <a href="/Exterior/ACME-CementPrimer"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                ACME Water Thinable Cement Primer
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/ExteriorBaseCoat"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Exterior Base Coat
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/PremiumEmulsion"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/3.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Premium Emulsion
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/ACME"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/4.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                ACME
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/MattFinish"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/5.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Ext. /Int. Emulsion Matt Finish
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/EasyWash"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/7.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Easy Wash
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/PrimerSurfaceBrown"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/8.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Primer Surface Brown
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/MetalGuard"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/9.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Metal Guard
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/ACMEUltraWRP"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/10.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                ACME Ultra WRP
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/BDSeal"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/12.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                BD Seal
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
          <a href="/Exterior/CoolRoof"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div className="mb-5">
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/13.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px] text-center">
                Cool Roof
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a>
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