import React from 'react';
import bannerImage from '../assets/banner.png'; // Adjust the path based on your file structure

const Cart = () => {
  return (
    <div className="h-auto w-full max-w-full justify-center items-center md:mt-0 p-4 md:pt-24 lg:pt-24 mt-20">
      <img 
        src={bannerImage} 
        alt="Banner" 
        className="rounded-lg object-fit" 
      />
    </div>
  );
};

export default Cart;
