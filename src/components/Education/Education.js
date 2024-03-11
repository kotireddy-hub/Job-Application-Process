import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
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
      <Form>
        <FormGroup className="section-from-group">
          <FormLabel>Institution Name:</FormLabel>
          <FormControl
            type="text"
            name="institutionName"
            value={formData.institutionName}
            placeholder="Enter Your Institution Name"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Type of Institution:</FormLabel>
          <FormControl
            type="text"
            name="institutionType"
            value={formData.institutionType}
            placeholder="Enter Your Type of Institution"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Degree Obtained:</FormLabel>
          <FormControl
            type="text"
            name="degree"
            value={formData.degree}
            placeholder="Degree Obtained"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Date:</FormLabel>
          <FormControl
            type="date"
            name="date"
            value={formData.date}
            placeholder="Date"
            onChange={handleInputChange}
          />
        </FormGroup>
      </Form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default Education;
