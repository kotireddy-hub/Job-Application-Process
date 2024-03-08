import React from 'react';

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
      <div>
        <label>Skill Name</label>
        <input
          type="text"
          name="skill"
          value={formData.skill}
          placeholder="Skill"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="skillLevel">Skill Level</label>
        <select name="skillLevel" id='skillLevel' value={formData.skillLevel} onChange={handleInputChange}>
          <option value="">Select Skill Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      {errors && <div className="error">{errors}</div>}
    </div>

  );
};

export default Skills;
