import React, { useState } from 'react';
import Cart from './Cart';
import { Plan } from './Plan';

const Subscribe = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    // Placeholder for actual file upload logic
    const formData = new FormData();
    formData.append('paymentProof', file);

    setUploadStatus('Uploading...');
    setTimeout(() => {
      setUploadStatus('File uploaded successfully!');
      setFile(null);
      document.getElementById('fileInput').value = null;
    }, 2000);
  };

  return (
    <>
      <Cart />
      <Plan />
      <div className=" bg-gray-100 flex flex-col items-center justify-start py-14 px-6 lg:px-8">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">

          {/* Upload Proof of Payment Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex-grow">
            <h3 className="text-xl font-semibold text-gray-900">Upload Proof of Payment</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-600 transition duration-150">
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <svg
                    className="h-16 w-16 mx-auto text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-700">Drag and drop or click to upload</p>
                </label>
              </div>
              {uploadStatus && (
                <p
                  className={`text-sm mt-2 ${
                    uploadStatus.includes('success') ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {uploadStatus}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 rounded-md hover:bg-blue-900 transition duration-150"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
