import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import HouseFormate from "./HouseFormate";
import ExteriorColor from "./ExteriorColor";
import Form from "../Form/Form";
import CalculatorForm from "../Form/CalculatorForm";
const ExteriorPaintsPage = () => {
  const [activeTab, setActiveTab] = useState("Wall Paints");
  const tabs = ["Wall Paints", "Textures"];


  const exteriorProducts = [
    {
      name: "Fine Square Exterior Emulsion",
      image: "/images/fine-square.png",
      href: "/ExteriorWallPaint/FineSquareExteriorEmulsion",
      animation: true,
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 0,
      unit: "per L",
    },
    {
      name: "Premium Emlusion",
      image: "/images/premium-eml.png",
      href: "/ExteriorWallPaint/PremiumEmlusion",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 233,
      unit: "per L",
    },
    {
      name: "Select Matt Finish",
      image: "/images/matt-finish.png",
      href: "/ExteriorWallPaint/SelectMattFinish",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      animation: true,
      price: 276,
      unit: "per L",
    },
    {
      name: "Select Sheen",
      image: "/images/Select-sheen.png",
      href: "/ExteriorWallPaint/SelectSheen",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 0,
      unit: "per L",
    },
    {
      name: "ACME Exterior Emulsion",
      image: "/images/acme-exterior-eml.png",
      href: "/ExteriorWallPaint/ACMEExteriorEmulsion",
      animation: true,
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 465,
      unit: "per L",
    },
    {
      name: "ACME WRP (Water Reppelent Paint)",
      image: "/images/acme-water-thinnable-primer.png",
      href: "/ExteriorWallPaint/ACMEWRP",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 0,
      unit: "per L",
    },
    {
      name: "Fine Square - HI SHEEN",
      image: "/images/9.png",
      href: "/ExteriorWallPaint/FineSquareHiSheen",
      animation: true,
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 0,
      unit: "per L",
    },
    {
      name: "Silk Shine - Super Gloss",
      image: "/images/Super-gloss.png",
      href: "/ExteriorWallPaint/SilkShine_SuperGloss",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 486,
      unit: "per L",
    },
    {
      name: "Titanium One",
      image: "/images/titanium-one.png",
      href: "/ExteriorWallPaint/TitaniumOne",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      animation: true,
      price: 579,
      unit: "per L",
    },
    {
      name: "Ultra WRP Exterior Emulsion",
      image: "/images/ultra-wrp-ext-eml.png",
      href: "/ExteriorWallPaint/UltraWRPExteriorEmulsion",
      features: [
      "WALLS of S.T.E.E.L",
      "15 years warranty*",
      "Advanced PUD Formula",
    ],
      price: 619,
      unit: "per L",
    },
  ];



  // Handle hash fragment scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);
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
          <h1 className="text-5xl font-medium text-white mb-4 text-center">
            Exterior Wall Paints
          </h1>
          <p className="text-lg font-normal mb-8 text-white text-center">
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
                className="flex-1 text-center text-2xl font-normal"
              >
                <span
                  className={`relative pb-1 ${activeTab === tab
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
                    <h1 className="exterior-text text-xl font-medium mb-3">Fine Square</h1>
                    <p className="exterior-p text-[12px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto{" "}
                      <span className="text-lg font-medium">15</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[13px] font-normal">Performance Warranty</p>
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
                    <h1 className="exterior-text text-xl font-medium mb-3">Silk Shine</h1>
                    <p className="exterior-p text-[12px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">6</span>{" "}
                      Years
                    </p>
                    <p className="text-[13px] font-normal">Performance Warranty</p>
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
                    <h1 className="exterior-text text-xl font-medium mb-3">Titanium One</h1>
                    <p className="exterior-p text-[12px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-lg font-medium">4</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[13px] font-normal">Performance Warranty</p>
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
                    <h1 className="exterior-text text-xl font-medium mb-3">Ultra WRP</h1>
                    <p className="exterior-p text-[12px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-lg font-medium">4</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[13px] font-normal">Performance Warranty</p>
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
        <h1 className="gradient-text text-4xl font-semibold text-center mb-[35px]">
          Exterior Emulsions
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          {exteriorProducts.map((product, index) => (
            <a
              key={index}
              href={product.href}
              className="ultima-box group relative p-4 cursor-pointer border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              {...(product.animation && {
                "data-aos": "zoom-in",
                "data-aos-duration": "1500",
              })}
            >
              <div className="mb-5">
                <div className="flex justify-center items-center h-[115px]">
                  <img
                    className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="ultima-content">
                <h6 className="text-[16px] font-semibold mb-[8px] text-center">
                  {product.name}
                </h6>
                <ul className="list-disc ml-4 text-md text-[14px] font-[400] mb-4">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
                <p className="text-center text-[15px] font-medium text-gray-700">
                  MRP <span className="font-bold text-black">₹ {product.price}.00</span>
                </p>
                <p className="text-center text-[12px] text-gray-500 italic">
                  (Inclusive of all taxes) {product.unit}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>



      <div className="inspired-by grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-12 bg-[#f7f2e7] justify-center items-center">
        <div className="inspired-by-content-part" data-aos="fade-right" data-aos-duration="1500">
          <h6 className="text-3xl font-medium mb-3">Get inspired by our</h6>
          <h1 className="text-6xl font-semibold w-[60%] leading-[65px] gradient-text mb-3">
            Exquisite Collections
          </h1>
          <p className="text-[17px] font-normal mb-5">
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
      <ExteriorColor />
      <CalculatorForm />
    </div>
  );
};

export default ExteriorPaintsPage;