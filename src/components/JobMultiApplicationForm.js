import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Education from './Education/Education';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import WorkExperience from './WorkExperience/WorkExperience';
import Skills from './Skills/Skills';
import ProgressBar from './ProgressBar/ProgressBar';
import './styles/styles.css';

const steps = [
  'Personal Information',
  'Work Experience',
  'Education',
  'Skills',
];

const JobMultiApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      language: '',
    },
    workExperience: {
      company: '',
      startDate: '',
      endDate: '',
      role: '',
    },
    education: {
      institutionName: '',
      institutionType: '',
      degree: '',
      date: '',
    },
    skills: {
      skill: '',
      skillLevel: ''
    },
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleClickStep = (currentStep) => {
    setCurrentStep(currentStep);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfo
            formData={formData.personalInfo}
            onChange={handleFormDataChange}
            errors={errors.personalInfo}
          />
        );
      case 1:
        return (
          <WorkExperience
            formData={formData.workExperience}
            onChange={handleFormDataChange}
            errors={errors.workExperience}
          />
        );
      case 2:
        return (
          <Education
            formData={formData.education}
            onChange={handleFormDataChange}
            errors={errors.education}
          />
        );
      case 3:
        return (
          <Skills
            formData={formData.skills}
            onChange={handleFormDataChange}
            errors={errors.skills}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <ProgressBar currentStep={currentStep} steps={steps} handleClickStep={handleClickStep} />
      {renderStep()}
      <div className='btnInfo'>
        <Button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </Button>
        {currentStep === steps.length - 1 ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </Container>
  );
};

export default JobMultiApplicationForm;
