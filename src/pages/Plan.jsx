import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { RiLock2Line } from "react-icons/ri";

export const Plan = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col items-center pt-12 px-4">
      <div className="text-center font-semibold">
      <h1 className="text-3xl md:text-4xl lg:text-5xl">
          <span className="text-blue-700 tracking-wide">Flexible </span>
          <span>Plans</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Choose a plan that works best for you and your team.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Basic Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
          <div className='text-center items-center'>
          <h2 className="text-2xl font-semibold text-black mb-4 text-center items-center">Basic</h2>
          <p className="text-xl font-bold mb-4">
            <span className="text-gray-400">$</span>
            <span className="text-blue-600">75</span>
            {/* <span className="text-gray-400">/ user</span> */}
          </p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="flex-grow space-y-4 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Free Training & Orientation: Guaranteed job placement after completion.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Workspace Access: Standard team workspace access.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Career Resources: Specialized resources and courses.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Email Support: Basic assistance.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={19} />
              <span className="text-gray-800">Career Coaching: One-on-one sessions.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={19} />
              <span className="text-gray-800">Priority Support: Faster email response.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={20} />
              <span className="text-gray-800">24/7 Support: Around-the-clock assistance.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={31} />
              <span className="text-gray-800">Post-Placement Support: Continued support after job placement.</span>
            </li>
          </ul>
          <a href="#" className="bg-blue-600 text-white py-3 rounded-3xl text-center font-medium hover:bg-blue-700 transition">
            Choose Plan
          </a>
        </div>

        {/* Standard Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col">
          <div className='text-center items-center'>
          <h2 className="text-2xl font-semibold text-black mb-4">Standard</h2>
          <p className="text-xl font-bold mb-4">
            <span className="text-gray-400">$</span>
            <span className="text-blue-600">100</span>
            {/* <span className="text-gray-400">/ user</span> */}
          </p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="flex-grow space-y-4 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Free Training & Orientation: Guaranteed job placement after completion.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Workspace Access: Standard team workspace access.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Career Resources: Specialized resources and courses.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Email Support: Basic assistance.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Career Coaching: One-on-one sessions.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Priority Support: Faster email response.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={20} />
              <span className="text-gray-800">24/7 Support: Around-the-clock assistance.</span>
            </li>
            <li className="flex items-start">
              <RiLock2Line className="text-gray-700 mr-2 mt-1" size={30.5} />
              <span className="text-gray-800">Post-Placement Support: Continued support after job placement.</span>
            </li>
          </ul>
          <a href="#" className="bg-blue-600 text-white py-3 rounded-3xl text-center font-medium hover:bg-blue-700 transition">
            Choose Plan
          </a>
        </div>

        {/* Premium Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col ">
        <div className='text-center items-center'>
          <h2 className="text-2xl font-semibold text-black mb-4">Premium</h2>      
            <p className="text-xl font-bold mb-4 ">
            <span className="text-gray-400 ">$</span>
            <span className="text-blue-600">125</span>
            {/* <span className="text-gray-400">/ user</span> */}
          </p>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="flex-grow space-y-4 mb-6">
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Free Training & Orientation: Guaranteed job placement after completion.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Workspace Access: Standard team workspace access.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Career Resources: Specialized resources and courses.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Email Support: Basic assistance.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Career Coaching: One-on-one sessions.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Priority Support: Faster email response.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">24/7 Support: Around-the-clock assistance.</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-blue-600 mr-2 mt-1" size={20} />
              <span className="text-gray-800">Post-Placement Support: Continued support after job placement.</span>
            </li>
          </ul>
          <a href="#" className="bg-blue-600 text-white py-3 rounded-3xl text-center font-medium hover:bg-blue-700 transition">
            Choose Plan
          </a>
        </div>
      </div>
    </div>
  );
};


