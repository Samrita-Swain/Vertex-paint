import { FaArrowRight } from "react-icons/fa";
const TDS = () => {
  return (
    <div>
      <div className="relative tds-banner p-12 bg-cover bg-center bg-no-repeat">
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative content text-white text-center">
          <h1 className="text-[50px] font-bold">Technical Data Sheets</h1>
        </div>
      </div>

      <div className="p-12 flex flex-col items-center bg-[#fff5eb]">
        <h1 className="gradient-text text-3xl font-bold mb-14">
          Technical Data Sheets
        </h1>
        <div className="tds-product-part grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-8 p-12">
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/4.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">ACME ULTRA- WRP</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/11.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">ULTRA-WRP</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/1.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Acme Water Thinnable
              Cement Primer</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/4.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">ACME Exterior Emulsion</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/12.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">BD SEAL</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/13.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">COOL ROOF</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/7.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Easy Wash Luxury Emulsion</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/7.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Exterior Base coat</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/9.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Metal Guard Red Oxide Primer</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/3.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Premium Emulsion</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/5.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Select Mat Finish Emulsion</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/7.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">Silk Shine Luxury Emulsion</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82]"
            style={{
              boxShadow: "1px 6px 25px -4px rgba(16, 24, 40, .16)",
              border: "1px solid #efefef",padding: "70px 20px 20px 20px",
              transform:"translateY(0px)",transition:"0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          >
            <div className="product-img w-[50%]">
              <img src="/images/6.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[17px] text-center">TITANIUM ONE</h1>
              <a href="">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDS;
