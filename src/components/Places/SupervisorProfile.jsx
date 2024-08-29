import React from 'react';
import supervisorImage from '../../assets/supervisorImage.jpg';


const SupervisorProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row border rounded-lg shadow-xl p-6 max-w-4xl mx-auto mt-1 bg-gray-100">
      <div className="flex-shrink-0 mb-4 lg:mb-0 ">
      <img
        src={supervisorImage}
        alt="Supervisor"
        className="w-32 h-32 rounded-full mx-auto lg:mx-0 lg:mr-6 "
      />
      </div>
      <div className="flex flex-col justify-center">
  <h2 className="text-2xl font-semibold mb-2">Dr. Finbar UC</h2>
  <p className="text-gray-700 text-sm">
    PhD in Educational Supervision & Leadership
  </p>
  <p className="text-gray-500 text-sm mt-2">
  Dr. Finbar UC specializes in educational supervision, leadership, and mentorship, guiding individuals to successful careers through skill development and coaching.
  </p>
  <div className="mt-4">
    <a href="mailto:dr.finbaruc@example.com" className="text-blue-500">
      dr.finbaruc@example.com
    </a>
  </div>
</div>

    </div>
  );
};

export default SupervisorProfile;
