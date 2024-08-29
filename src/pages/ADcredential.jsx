import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

export const ADcredential = () => {
  const navigate = useNavigate();

  const handleApplicationSubmit = () => {
    navigate('/'); // Navigates to the default home page
  };

  return (
    <>
    <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24 pt-24">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">AD Credentials Not Available</h2>
        <p className="text-lg text-gray-600 mb-4">
          We noticed that your AD credentials are not available.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          To move forward, please submit your application and proceed to make a one-time payment. You will be assigned to a team with other candidates for a 2-month orientation before job placement.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleApplicationSubmit}
            className="bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-yellow-700 transition duration-300"
          >
            Submit Application
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Stay connected for more updates and information.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


