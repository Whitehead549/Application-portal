import React from "react";

const BankDetails = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bank Details</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Account Holder:</span>
            <span className="text-gray-800">Finbar Ugwuemeric</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Bank Name:</span>
            <span className="text-gray-800">Wells Fargo</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Account Number:</span>
            <span className="text-gray-800">40630217212588169</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Account Type:</span>
            <span className="text-gray-800">Checking</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Routing Number:</span>
            <span className="text-gray-800">121000248</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Swift Code:</span>
            <span className="text-gray-800">WFBIUS6S</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Address:</span>
            <span className="text-gray-800">580 California Street, San Francisco, CA 94104, US</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
