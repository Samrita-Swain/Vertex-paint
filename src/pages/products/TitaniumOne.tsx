import PaintingCalculatorForm from "../Form/CalculatorForm";

const TitaniumOne = () => {
  const allProducts = [
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
    {
      name: "Fine Square Exterior Emulsion",
      image: "/images/finesquare.png",
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
];

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
          <h1 className="text-[50px] font-bold mb-7">Titanium One</h1>
        </div>

        {/* Centered Bouncing Image */}
        <div className="bounce-container flex justify-center items-center mt-6">
          <img
            src="/images/titanium-one.png"
            alt="Bouncing"
            className="bouncing-img w-[30%]"
          />
        </div>
      </div>
      <div className="second-banner p-12 flex justify-center items-center">
        <div className="container">
          <div className="content flex justify-center items-center flex-col">
            <h1 className="gradient-text text-[40px] font-bold text-center">Benefits</h1>
            <p className="mb-[35px] text-center">Here's why Titanium One is perfect for your home.</p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-[2rem]">
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[17%]">
              <img src="/images/CRACK-BRIDGING.png" alt=""/>
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">HIGHLY WATER RESISTANCE</h1>
              <p>Offers self-priming capabilities with
exceptional coverage of up to 220 square
feet per liter per coat.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-down" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/DUST-PICK-UP.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">DUST PICK-UP RESISTANCE</h1>
              <p>Displays superior resistance against dust
              and other elements.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-up" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
              <img src="/images/Super.png" alt="" />
            </div>
            <div className="content text-center">
              <h1 className="text-[17px] font-[600] mb-1">EXCELLENT OPACITY</h1>
              <p>Provides walls with a vibrant glow
              and a luxurious finish.</p>
            </div>
          </div>
          <div className="second-band-box flex flex-col justify-center items-center mb-[30px] p-5 rounded-[15px] border-l border-r border-red-500 transition-all shadow-lg h-[250px]" style={{boxShadow: "0 3px 15px rgba(0, 0, 0, .4)"}} data-aos="flip-down" data-aos-duration="1500">
            <div className="image mb-5 w-[20%]">
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
        <h1 className="gradient-text text-4xl font-semibold text-center mb-[35px]">
          Other Products
        </h1>
        <div className="ultimaproducts grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[2rem]">
          {allProducts.map((product, index) => (
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
                    className="w-[35%] transition-transform duration-300 group-hover:scale-110"
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

    </div>
  );
};

export default TitaniumOne;
