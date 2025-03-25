import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2c3789] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Logo & Socials */}
        <div className="flex justify-between items-center border-b border-gray-400 pb-6 mb-6">
          <div className="flex flex-row justify-center items-center">
          <a href="/">
            <img
              src="/images/Vertex Paint logo.png"
              alt="Vertex Paints"
              className="h-20"
            />
          </a>
          <h1 className="text-xl font-medium">Vertex <span className="text-[#e71429]">Paints</span></h1>
          </div>
          <div className="flex space-x-6">
            {["facebook-f", "twitter", "instagram"].map((icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-[#e51126] transition duration-300"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-medium mb-2">About Us</h3>
            <p className="text-gray-300 text-[14px] font-normal leading-6">
              Vertex Paints is India's leading paint company with a rich
              heritage of technology and innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Products</h3>
            <ul className="footer-li space-y-2 text-gray-300 text-[14px]  font-normal">
              <li>
                <Link
                  to="/products/InteriorPaintsPage"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Interior Paints
                </Link>
              </li>
              <li>
                <Link
                  to="/ExteriorWallPaint"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Exterior Paints
                </Link>
              </li>
              <li>
                <Link
                  to="/products/Waterproofing"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link
                  to="/products/WoodFinish"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Wood Finishes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Services</h3>
            <ul className="footer-li space-y-2 text-gray-300 text-[14px] font-normal">
            <li>
                <Link
                  to="SafePainting"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Safe Painting
                </Link>
              </li>
              <li>
                <Link
                  to="/ColourConsultancy"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Colour Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/DealerLocator"
                  className="hover:text-[#e51126] transition duration-300"
                >
                  Dealer Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[20px] font-semibold mb-2">Contact Us</h3>
            <ul className="text-gray-300 text-[14px]  font-normal">
              <li className="mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Toll Free: <span className="font-semibold">1800-209-5678</span>
              </li>
              <li>
                📧 Email:{" "}
                <span className="font-medium">support@vertexpaint.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#010a4d] p-4 text-gray-400 flex justify-center">
        <div className="container flex flex-wrap justify-between">
          <div className="space-x-4 last-footer text-[14px]">
            <Link
              to="/privacy-policy"
              className="hover:text-[#e51126] transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="hover:text-[#e51126] transition duration-300"
            >
              Terms of Use
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-[#e51126] transition duration-300"
            >
              Sitemap
            </Link>
          </div>
          <div className="text-[14px]">
            © 2025 Vertex Paints Ltd. All rights reserved by{" "}
            <a
              className="font-extrabold hover:text-[#e51126] transition duration-300"
              href="https://wipstertechnologies.com/"
              target="_blank"
            >
              Wipster Technologies Private Limited
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
