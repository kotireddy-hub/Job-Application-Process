import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const Skills = ({ formData, onChange, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      skills: {
        ...formData,
        [name]: value,
      },
    });
  };

  return (
    <div className="section-info">
      <h2>Step 4 : Skill Information</h2>
      <Form>
        <FormGroup className="section-from-group">
          <FormLabel>Skill Name:</FormLabel>
          <FormControl
            type="text"
            name="skill"
            value={formData.skill}
            placeholder="Skill"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="section-from-group">
          <FormLabel htmlFor="Skill Level" aria-labelledby="Skill Level">Skill Level</FormLabel>
          <FormControl
            as="select"
            name="skillLevel"
            id='skillLevel'
            value={formData.skillLevel}
            onChange={handleInputChange}
            placeholder="Skill Level"
          >
            <option value="">Select Skill Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </FormControl>
        </FormGroup>
      </Form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default Skills;
