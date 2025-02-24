import { FaArrowRight } from "react-icons/fa";
const ColorOptions = () => {
  return (
    <div>
      <div className="coloroptions-band bg-[#fff5eb]">
        <div className="flex flex-col items-center">
          <div className="content">
          <h2 className="gradient-text">Discover our world of paint and decor</h2>
          <p>One stop solution for all you need to keep your living space intact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Interior-Paints.webp" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Interior Paints</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Interior Paints</h5>
                <p className="text-[#ffffffa6] text-[17px]">Discover a diverse selection of interior paints catering to luxury, premium and economy along with designer Royale collection.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Exterior-Paints.jpg" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Exterior Paints</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Exterior Paints</h5>
                <p className="text-[#ffffffa6] text-[17px]">Enhance your outdoor spaces with our range of exterior paints and textures tailored for you, from high-end to budget-friendly.</p>
                <a href="../products/exterior">View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Wall-Textures.webp" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Wall Textures</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Wall Textures</h5>
                <p className="text-[#ffffffa6] text-[17px]">Transform your interiors with special texture finishes- Royale Play, inspired by themes around the world, for a personalized.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Wallpapers.webp" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Wallpapers</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Wallpapers</h5>
                <p className="text-[#ffffffa6] text-[17px]">Discover our extensive wallpaper collections, offering a range of designs from Artisanal to exclusive Sabyasachi collection.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Water-Proofing.webp" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Water Proofing</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Water- Proofing</h5>
                <p className="text-[#ffffffa6] text-[17px]">Explore our waterproofing solutions, designed to shield all areas from terrace or bathroom, guaranteeing a leak-proof space.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Wood-Paints.webp" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Wood Paints</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Wood Paints</h5>
                <p className="text-[#ffffffa6] text-[17px]">Delve into our wood finishing options, offering a spectrum of finishes from Clear to Coloured, suitable for all wood types.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="coloroptions-band-box">
              <div className="overlay"></div>
                <div className="coloroptions-image">
                  <img src="/images/Metal-Paints.jpg" alt="" />
                </div>
                <div className="coloroptions-box-content">
                  <h5>Metal Paints</h5>
                </div>
                <div className="overlay-content">
                <h5 className="text-[20px]">Metal Paints</h5>
                <p className="text-[#ffffffa6] text-[17px]">Explore our range of enamel paints for specially formulated paints that protect and beautify surfaces, and are easy-to-clean.</p>
                <a>View Deatils <FaArrowRight className="icon"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorOptions
