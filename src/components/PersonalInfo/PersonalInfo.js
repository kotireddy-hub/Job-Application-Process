import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
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
      <Form>
        <FormGroup className="section-from-group">
          <FormLabel>Name:</FormLabel>
          <FormControl
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Email:</FormLabel>
          <FormControl
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Phone:</FormLabel>
          <FormControl
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Languages:</FormLabel>
          <FormControl
            type="text"
            name="language"
            value={formData.language}
            placeholder="Enter Languages"
            onChange={handleInputChange}
          />
        </FormGroup>
      </Form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default PersonalInfo;
