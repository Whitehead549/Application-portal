import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaIdBadge } from "react-icons/fa";

const Stepper = ({ user, lastName }) => {
  const steps = ["Customer Info", "Shipping Info", "Membership"];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white ${
                  i < currentStep - 1 ||
                  (i === 0 && user) ||
                  (i === 1 && lastName !== null)
                    ? "bg-green-600"
                    : i === currentStep - 1
                    ? "bg-sky-600"
                    : "bg-gray-300"
                }`}
              >
                {i < currentStep - 1 ||
                (i === 0 && user) ||
                (i === 1 && lastName !== null) ? (
                  <TiTick size={20} />
                ) : i === 2 ? (
                  <FaIdBadge size={20} />
                ) : (
                  i + 1
                )}
              </div>
              {/* Step Label */}
              <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
                {step}
              </p>
            </div>
            {/* Line Connecting Steps */}
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] sm:h-[3px] ${
                  i < currentStep - 1 ||
                  (i === 0 && user) ||
                  (i === 1 && lastName !== null)
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
