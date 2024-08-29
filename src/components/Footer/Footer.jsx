import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-0">
      <div className="container mx-auto px-4 lg:px-12 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Company Info Section */}
          <div className="flex-1 mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold mb-2">Hitachivista</h1>
            <p className="text-sm mb-4">
            Empowering candidates with expert training and guaranteed job placement. Start your career journey with us today and secure your future!
            </p>
            <div className="flex items-center text-sm mb-2">
              <FaLocationArrow className="mr-2" />
              <p>Hitachivista</p>
            </div>
            <div className="flex items-center text-sm">
              <FaMobileAlt className="mr-2" />
              <p>hitachivista@gmail.com</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 mb-4 lg:mb-0 flex justify-center lg:justify-end">
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-2xl hover:text-gray-600">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="text-2xl hover:text-gray-600">
                <FaFacebook />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-gray-600">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white text-center py-2 mb-0">
        <p className="text-sm">
          © 2024 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

