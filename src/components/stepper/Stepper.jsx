import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Stepper = () => {
  const steps = ["Customer Info", "Shipping Info", "Payment", "Review"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white ${
                  i < currentStep - 1
                    ? "bg-green-600"
                    : i === currentStep - 1
                    ? "bg-sky-600"
                    : "bg-gray-300"
                }`}
              >
                {i < currentStep - 1 ? <TiTick size={20} /> : i + 1}
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
                  i < currentStep - 1 ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {!complete && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg shadow hover:bg-sky-700 transition-colors duration-300"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Proceed"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Stepper;
