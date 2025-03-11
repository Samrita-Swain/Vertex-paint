import PaintingCalculatorForm from "../Form/CalculatorForm";

const SilkShine = () => {
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
          <h1 className="text-[50px] font-bold mb-7">Silk Shine</h1>
        </div>

        {/* Centered Bouncing Image */}
        <div className="bounce-container flex justify-center items-center mt-6">
          <img
            src="/images//Silk-Shine.png"
            alt="Bouncing"
            className="bouncing-img w-[30%]"
          />
        </div>
      </div>
      <div className="second-banner p-12 flex justify-center items-center">
        <div className="container">
          <div className="content flex justify-center items-center flex-col">
            <h1 className="gradient-text text-[40px] font-bold text-center">Benefits</h1>
            <p className="mb-[35px] text-center">Here's why Silk Shine is perfect for your home.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[2rem]">
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/STRUCTURAL-PROTECTION.png" alt=""/>
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">WATER RESISTANCE</h1>
              <p>Dust Pick-up Resistance (DPUR) property
              helps fight dust from settling on walls.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-down" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/Super.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">SUPER GLOSS</h1>
              <p>Provides walls with a vibrant glow
              and a luxurious finish.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[17%]">
              <img src="/images/ANTI-ALGAL.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">ANTI-ALGAL</h1>
              <p>Advanced anti-algal formula fights the
formation of algae and protects walls
from ugly black spots.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <PaintingCalculatorForm />

      <div className="exterior-Ultima-band p-12 bg-[#fff] flex flex-col items-center">
        <h1 className="gradient-text text-[40px] font-bold text-center mb-[35px]">Exterior Emulsions
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          {/* <a href="/Product1"
            className="ultima-box group relative p-4 cursor-pointer"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </a> */}
          <div
            className="ultima-box group relative p-4"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </div>
          <div
            className="ultima-box group relative p-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/3.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </div>
          <div
            className="ultima-box group relative p-4"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/4.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </div>
          <div
            className="ultima-box group relative p-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/5.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </div>
          <div
            className="ultima-box group relative p-4"
          >
            <div>
              <div className="flex justify-center items-center h-[150px]">
                <img
                  className="w-[50%] transition-transform duration-300 group-hover:scale-110"
                  src="/images/2.png"
                  alt=""
                />
              </div>
            </div>

            <div className="ultima-content">
              <h6 className="text-[17px] font-bold mb-[8px]">
                Apex Ultima Protek Duralife
              </h6>
              <ul className="list-disc ml-4 text-md text-[15px] font-[400]">
                <li>WALLS of S.T.E.E.L</li>
                <li>15 years warranty*</li>
                <li>Advanced PUD Formula</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SilkShine;
