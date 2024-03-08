import React from 'react';
import '../styles/styles.css';

const Education = ({ formData, onChange, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      education: {
        ...formData,
        [name]: value,
      },
    });
  };

  return (
    <div className="section-info">
      <h2>Step 3 : Education Information</h2>
      <div>
        <label>Institution Name</label>
        <input
          type="text"
          name="institutionName"
          value={formData.institutionName}
          placeholder="Enter Your Institution Name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Type of Institution</label>
        <input
          type="text"
          name="institutionType"
          value={formData.institutionType}
          placeholder="Enter Your Type of Institution"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Degree Obtained</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          placeholder="Degree Obtained"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          placeholder="Date"
          onChange={handleInputChange}
        />
      </div>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default Education;
