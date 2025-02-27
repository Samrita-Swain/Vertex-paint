import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000eb] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Logo & Socials */}
        <div className="flex justify-between items-center border-b border-gray-400 pb-6 mb-6">
          <a href="#">
          <img
            src="https://vertexpaint.in/img/logo.png"
            alt="Vertex Paints"
            className="h-20"
          />
          </a>
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
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Vertex Paints is India's leading paint company with a rich
              heritage of technology and innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="footer-li space-y-2 text-gray-300">
              {["Interior Paints", "Exterior Paints", "Waterproofing", "Wood Finishes"].map((product, index) => (
                <li key={index}>
                  <Link to={`/products/${product.toLowerCase().replace(/\s/g, "-")}`}>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="footer-li space-y-2 text-gray-300">
              {["Safe Painting", "Colour Consultancy", "Dealer Locator", "Paint Calculator"].map((service, index) => (
                <li key={index}>
                  <Link to={`/services/${service.toLowerCase().replace(/\s/g, "-")}`}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300">
              <li className="mb-2">📞 Toll Free: <span className="font-semibold">1800-209-5678</span></li>
              <li>📧 Email: <span className="font-semibold">support@vertexpaint.com</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-4 text-gray-400 text-sm flex justify-center">
        <div className="container flex flex-wrap justify-between">
          <div className="space-x-4">
            <Link to="/privacy-policy" className="hover:text-[#e51126] transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-[#e51126] transition duration-300">
              Terms of Use
            </Link>
            <Link to="/sitemap" className="hover:text-[#e51126] transition duration-300">
              Sitemap
            </Link>
          </div>
          <div>
            © 2025 Vertex Paints Ltd. All rights reserved by{" "}
            <a className="hover:text-[#e51126] transition duration-300" href="#">
              Wipster Technologies Private Limited
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
