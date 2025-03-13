import { Link } from 'react-router-dom';
import { products, Product } from '../../data/products';
import { FaArrowRight } from "react-icons/fa";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-5 flex flex-col items-center">
          <h2 className="text-[40px] font-bold gradient-text text-center">Exterior Emulsions</h2>
          <p className="mb-[35px] text-gray-600 text-[20px] text-center">
            Discover our premium range of paints designed to transform your space
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[2rem] px-12" data-aos="fade-up" data-aos-duration="1500">
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
                      <span className="text-[18px] font-extrabold">15</span>{" "}
                      Years
                    </p>
                    <p className="exterior-p text-[15px]">Performance Warranty</p>
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
                    <h1 className="exterior-text exterior-text text-[30px] font-bold mb-5">Silk Shine</h1>
                    <p className="exterior-p text-[14px] bg-[#ffffff33] mb-2 rounded-[8px] px-3 py-1">
                      Upto <span className="text-[18px] font-extrabold">6</span>{" "}
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
      </div>
    </section>
  );
};

export default FeaturedProducts; 