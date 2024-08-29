import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/AAA-01.png"; 
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaRegWindowClose } from "react-icons/fa";
import { Icon } from 'react-icons-kit';
import { lock } from 'react-icons-kit/feather/lock';
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ usee, totalQty }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-blue shadow-md z-[99999] font-sans antialiased'>
       

        {/* Main Navbar */}
        <div className="container py-3 sm:py-0 bg-white">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-4">
  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    <img 
      src={LogoImg} 
      alt='' 
      className='h-7 sm:h-16 md:h-12 lg:h-12' 
    />
  </Link>
</div>


            {/* Desktop Navlinks */}
            <div className="hidden md:flex items-center gap-6">
              <ul className='flex items-center gap-8'>
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                      `relative py-2 px-4 font-medium text-gray-800 ${
                        isActive
                          ? 'text-primary border-b-2 border-primary'
                          : 'hover:text-primary transition-colors duration-300'
                      }`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Application Portal
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to="/credentials"
                    className={({ isActive }) =>
                      `relative py-2 px-4 font-medium text-gray-800 ${
                        isActive
                          ? 'text-primary border-b-2 border-primary'
                          : 'hover:text-primary transition-colors duration-300'
                      }`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    AD Credentials
                  </NavLink>
                </li>
          
                <li>
                  <NavLink 
                    to="/contact"
                    className={({ isActive }) =>
                      `relative py-2 px-4 font-medium text-gray-800 ${
                        isActive
                          ? 'text-primary border-b-2 border-primary'
                          : 'hover:text-primary transition-colors duration-300'
                      }`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/faq"
                    className={({ isActive }) =>
                      `relative py-2 px-4 font-medium text-gray-800 ${
                        isActive
                          ? 'text-primary border-b-2 border-primary'
                          : 'hover:text-primary transition-colors duration-300'
                      }`
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                   FAQ
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Cart and Menu Icons */}
            <div className='flex items-center gap-6'>
              <div>
                <NavLink  
                  to="/cart" 
                  onClick={() => window.scrollTo(0, 0)} 
                  className="text-[#404040] transform transition-transform duration-300 hover:scale-110"
                >
                  <Icon icon={lock} size={30}/>
                </NavLink>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden block">
                {showMenu ? (
                  <FaRegWindowClose 
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all text-white"
                    size={30}
                    color='black'
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all text-white"
                    size={30}
                    color='black'
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} usee={usee} />
      </div>
    </>
  );
};

export default Navbar;

