import React, { useState } from 'react';

const PlacesCard = ({ singleProduct, addToCart }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        addToCart(singleProduct);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // Pop-up will disappear after 2 seconds
    };

    return (
        <div className="relative shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer rounded-lg overflow-hidden bg-white">
            {/* Product Image */}
            <div className="w-full h-40 sm:h-56 overflow-hidden">
                <img
                    src={singleProduct.url}
                    alt="product-img"
                    className="object-cover w-full h-full transform transition duration-700 hover:scale-110"
                />
            </div>

            {/* Product Details */}
            <div className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                <h1 className="font-bold text-base sm:text-lg line-clamp-1 text-gray-900">{singleProduct.title}</h1>

                {/* Product Location */}
                <div className="flex items-center gap-1 text-gray-600 opacity-70">
                    <span className="text-red-500"></span>
                    {singleProduct.location}
                </div>

                {/* Product Price and Description */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="font-bold text-sm sm:text-base text-gray-900">${singleProduct.price}</p>
                    <p className="line-clamp-2 sm:ml-2 text-gray-700 text-xs sm:text-sm">{singleProduct.description}</p>
                </div>

                {/* Add to Cart Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleAddToCart}
                        className="py-1 px-3 rounded-lg text-white font-bold transition duration-300 ease-in-out 
                                    bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>

            {/* Pop-up Notification */}
            {showPopup && (
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2">
                    Added to Cart
                </div>
            )}
        </div>
    );
};

export default PlacesCard;


