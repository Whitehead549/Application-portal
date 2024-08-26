import React from 'react';

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-center text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NoPage;



