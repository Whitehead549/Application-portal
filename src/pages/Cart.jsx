import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Adjust the path based on your file structure
import bannerImage2 from '../assets/banner2.png'; // Adjust the path based on your file structure

const Cart = () => {
  return (
    <div className="relative w-full max-w-full p-0 pb-0 mt-20 pt-0 sm:pb-0 md:mt-0 md:pt-24 lg:pt-16 container">
      {/* Image for large and medium screens */}
      <img 
        src={bannerImage2} 
        alt="Banner" 
        className="hidden md:block  object-cover w-full h-auto lg:h-[300px] md:h-[200px]"
 // Image for medium and large screens
      />
      {/* Image for mobile screens */}
      <img 
        src={bannerImage} 
        alt="Banner" 
        className="block md:hidden rounded-lg object-cover w-full h-auto" // Image for mobile screens
      />
      <div className="absolute inset-0 flex items-center pl-32 mr-5 sm:pl-[8rem] md:pl-[16rem] lg:pt-16 lg:pl-[24rem] md:pt-16">
        <p className="text-white text-xs sm:text-sm md:text-sm lg:text-2xl font-bold text-left">
          Your Random Text Here.
          Your Random Text Here.
          Your Random Text Here.
        </p>
      </div>
    </div>
  );
};

export default Cart;
