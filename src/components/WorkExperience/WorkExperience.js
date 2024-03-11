import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
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
      <Form>
        <FormGroup className="section-from-group">
          <FormLabel>Company:</FormLabel>
          <FormControl
            type="text"
            name="company"
            value={formData.company}
            placeholder="Enter your Company"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Start Date:</FormLabel>
          <FormControl
            type="date"
            name="startDate"
            value={formData.startDate}
            placeholder="Start Date"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>End Date:</FormLabel>
          <FormControl
            type="date"
            name="endDate"
            value={formData.endDate}
            placeholder="End Date"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel>Role:</FormLabel>
          <FormControl
            type="text"
            name="role"
            value={formData.role}
            placeholder="Enter Role"
            onChange={handleInputChange}
          />
        </FormGroup>
      </Form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default WorkExperience;
