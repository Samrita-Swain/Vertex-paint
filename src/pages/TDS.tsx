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
        <h1 className="gradient-text text-[40px] font-bold mb-14 text-center">
          Technical Data Sheets
        </h1>
        <div className="tds-product-part grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 p-12">
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/10.png" className="rounded-[10px]" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">ACME ULTRA-WRP</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/ACME%20-%20WRP.pdf" target="_blank">View</a>
            </div>
          </div>

          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/11.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">ULTRA-WRP</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/ACME-%20ULTRA%20WRP.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/1.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Acme Water Thinnable Cement Primer
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Acme%20Water%20Thinnable%20Cement%20Primer.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/4.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Acme Exterior Emulsion
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/ACME_EXT%20.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/12.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">BD Seal</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/BD%20SEAL.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/13.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">Cool Roof</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Cool%20Roof.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/7.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Easy Wash Luxury Emulsion
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Easy%20wash%20luxury%20emulsion.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/exterior-base-coat.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Exterior Base coat
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/EXTbasecoat.pdf.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/9.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Metal Guard Red Oxide Primer
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Metal%20Guard%20Red%20Oxide%20Primer.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/3.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">Premium Emulsion</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Premium%20Emulsion.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/5.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Select Mat Finish Emulsion
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/SELECT%20MAT%20FINISH.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/Silk-Shine.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">
                Silk Shine Luxury Emulsion
              </h1>
              <a href="https://www.vertexpaint.in/assets/TDS/Silk%20Shine%20Luxury%20Emulsion.pdf" target="_blank">View</a>
            </div>
          </div>
          <div
            className="product-box relative flex flex-col items-center p-5 rounded-[10px] mb-12 bg-[#ffffff82] border-l border-r border-[#efefef] hover:border-red-500 transition-all shadow-lg"
            style={{
              padding: "70px 20px 20px 20px",
              transform: "translateY(0px)",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <div className="product-img w-[50%]">
              <img src="/images/6.png" alt="" />
            </div>
            <div className="product-content flex flex-col items-center">
              <h1 className="mb-3 text-[16px] text-center">Titanium One</h1>
              <a href="https://www.vertexpaint.in/assets/TDS/TITANIUM%20ONE.pdf" target="_blank">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TDS;
