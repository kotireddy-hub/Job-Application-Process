import React from 'react';
import '../styles/styles.css';

const PersonalInfo = ({ formData, onChange, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      personalInfo: {
        ...formData,
        [name]: value,
      },
    });
  };

  return (
    <div className="section-info">
      <h2>Step 1 : Personal Information</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Enter your phone number"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Languages</label>
        <input
          type="text"
          name="language"
          value={formData.language}
          placeholder="Enter Languages"
          onChange={handleInputChange}
        />
      </div>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default PersonalInfo;
