import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Adjust the path based on your file structure

const Cart = () => {
  return (
    <div className="w-full max-w-full justify-center items-center md:mt-0 p-4 md:pt-24 lg:pt-24 mt-20 ">
      <img 
        src={bannerImage} 
        alt="Banner" 
        className="rounded-lg object-contain w-full h-auto lg:h-[300px]" // Adjust the height (e.g., 300px) for large screens
      />
    </div>
  );
};

export default Cart;
