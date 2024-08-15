import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Admin",
    link: "/Admin",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="py-2 bg-gray-200 relative overflow-hidden">
        <div className="grid md:grid-cols-3 py-1 backdrop-blur-sm rounded-t-xl">
          <div className="py-2 px-4">
            <h1 className="flex items-center gap-2 text-lg sm:text-2xl font-bold text-justify sm:text-left">
              TripleA wears
            </h1>
            <p className="text-sm mt-2">
              Discover the latest trends, top brands, and unbeatable prices.
              Shop now and elevate your style with the perfect pair!
            </p>
            <div className="flex items-center gap-2 mt-2">
              <FaLocationArrow />
              <p>TripleA</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <FaMobileAlt />
              <p>+234 8052875298</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <a href="#">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
         
        </div>
        <div className="text-center py-1 border-t-2 border-gray-300/50 bg-gray-800 text-white text-sm">
          © 2024 All rights reserved || Made with ❤️ by CodeMutation
        </div>
      </div>
    </>
  );
};

export default Footer;
