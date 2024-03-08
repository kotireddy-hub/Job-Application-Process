import React from 'react';
import '../styles/styles.css';

const WorkExperience = ({ formData, onChange, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      workExperience: {
        ...formData,
        [name]: value,
      },
    });
  };

  return (
    <div className="section-info">
      <h2>Step 2 : Work Experience</h2>
      <div>
        <label>Company:</label>
        <input
          type="text"
          name="Company"
          value={formData.Company}
          placeholder="Enter your Company"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          placeholder="Start Date"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          placeholder="End Date"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          placeholder="Enter Role"
          onChange={handleInputChange}
        />
      </div>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default WorkExperience;
