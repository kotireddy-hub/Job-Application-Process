import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentStep, steps,handleClickStep }) => {
  const stepWidth = (100 / steps.length) + '%';

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
          style={{ width: stepWidth }}
          onClick={() => handleClickStep(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;