// Popup.jsx
import React, { useState } from 'react';
import Signup from '../components/popups/SignUp';
import Login from '../components/popups/Login';


const Popup = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-35">
      <div className="rounded-lg p-6 shadow-lg max-w-md lg:w-full sm:w-full" style={{ background: 'rgb(211, 211, 211)' }}>
        {showLogin ? (
          <>
            <Login />
            <div className="text-center mt-2">
              <span>Don't have an account? </span>
              <button
                onClick={handleToggle}
                className="text-blue-500 font-semibold underline"
              >
                Sign up here
              </button>
            </div>
          </>
        ) : (
          <>
            <Signup />
            <div className="text-center mt-4">
              <span>Already have an account? </span>
              <button
                onClick={handleToggle}
                className="text-blue-500 font-semibold underline"
              >
                Login here
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
