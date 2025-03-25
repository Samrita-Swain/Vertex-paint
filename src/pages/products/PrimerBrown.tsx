import PaintingCalculatorForm from "../Form/CalculatorForm";
import React from 'react'

const PrimerBrown = () => {
  return (
    <div>
      <div
        className="relative UltimaExterioremulsions-banner p-12 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[50vh]"
        style={{ backgroundImage: "url(../images/product1.jpg)" }}
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-white text-center">
          <h1 className="text-5xl font-medium mb-7">Primer Surface Brown</h1>
        </div>

        {/* Centered Bouncing Image */}
        <div className="bounce-container flex justify-center items-center mt-6">
          <img
            src="/images/8.png"
            alt="Bouncing"
            className="bouncing-img w-[30%]"
          />
        </div>
      </div>
      <div className="second-banner p-12 flex justify-center items-center">
        <div className="container">
          <div className="content flex justify-center items-center flex-col">
            <h1 className="gradient-text text-4xl font-semibold mb-2 text-center">Benefits</h1>
            <p className="text-gray-600 text-lg font-normal mb-[35px] text-center">Here's why Primer Surface Brown is perfect for your home.</p>
          </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[2rem]">
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/STRUCTURAL-PROTECTION.png" alt=""/>
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-semibold mb-1">SHEEN</h1>
              <p className="text-[15px] font-normal">Comes with a comprehensive 3-year
              performance warranty.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-down" data-aos-duration="1500">
            <div className="image mb-5 w-[17%]">
              <img src="/images/CRACK-BRIDGING.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">ANTI-FUNGAL</h1>
              <p className="text-[15px] font-normal">Advanced anti-algal formula fights the
formation of algae and protects walls
from ugly black spots.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[17%]">
              <img src="/images/SUPERIOR-CLEANABILITY.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-semibold mb-1">SUPERIOR CLEANABILITY</h1>
              <p className="text-[15px] font-normal">Excellent dust resistance and ease of cleaning ensuring exteriors look fresh for long.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-down" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/LOW-VOC.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-semibold mb-1">LOW VOC</h1>
              <p className="text-[15px] font-normal">Meets the LEED VOC criteria as per Indian Green Building Council.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <PaintingCalculatorForm />

      <div className="exterior-Ultima-band p-12 bg-[#fff] flex flex-col items-center">
        <h1 className="gradient-text text-4xl font-semibold text-center mb-[35px]">Exterior Emulsions
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          <a href="/Exterior/EasyWash"
            className="ultima-box group relative p-4 cursor-pointer" data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
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
          
          <a href="/Exterior/MetalGuard"
            className="ultima-box group relative p-4 cursor-pointer"
          >
            <div>
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
            <div>
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
          >
            <div>
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
            className="ultima-box group relative p-4 cursor-pointer" data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
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
    </div>
  );
};

export default PrimerBrown;
