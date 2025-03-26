import CalculatorForm from "../Form/CalculatorForm";
import { FaArrowRight } from "react-icons/fa";

const CalculateNow = () => {
  return (
    <div>
      <CalculatorForm />
      <div className="inspired-by grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-12 bg-[#f7f2e7] justify-center items-center">
              <div className="inspired-by-content-part" data-aos="fade-right" data-aos-duration="1500">
                <h6 className="text-4xl font-medium mb-3">Get inspired by our</h6>
                <h1 className="text-7xl font-semibold w-[89%] leading-[75px] gradient-text mb-3">
                  Exquisite Collections
                </h1>
                <p className="text-lg font-normal mb-5">
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
    </div>
  )
}

export default CalculateNow
