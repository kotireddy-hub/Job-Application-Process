import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import WorkExperience from '../WorkExperience.js';

describe('WorkExperience', () => {
  test('renders input fields with correct placeholders', () => {
    const formData = {
      Company: '',
      startDate: '',
      endDate: '',
      role: '',
    };
    render(<WorkExperience formData={formData} />);
    
    expect(screen.getByPlaceholderText('Enter your Company')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Start Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('End Date')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Role')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const formData = {
      Company: '',
      startDate: '',
      endDate: '',
      role: '',
    };
    render(<WorkExperience formData={formData} onChange={onChangeMock} />);
   
    const companyInput = screen.getByPlaceholderText('Enter your Company');
    fireEvent.change(companyInput, { target: { value: 'ACME Inc.' } });
    expect(onChangeMock).toHaveBeenCalledWith({ workExperience: { ...formData, Company: 'ACME Inc.' } });
    
    const startDateInput = screen.getByPlaceholderText('Start Date');
    fireEvent.change(startDateInput, { target: { value: '2024-03-10' } });
    expect(onChangeMock).toHaveBeenCalledWith({ workExperience: { ...formData, startDate: '2024-03-10' } });

    const endDateInput = screen.getByPlaceholderText('End Date');
    fireEvent.change(endDateInput, { target: { value: '2025-01-01' } });
    expect(onChangeMock).toHaveBeenCalledWith({ workExperience: { ...formData, endDate: '2025-01-01' } });

    const roleInput = screen.getByPlaceholderText('Enter Role');
    fireEvent.change(roleInput, { target: { value: 'Developer' } });
    expect(onChangeMock).toHaveBeenCalledWith({ workExperience: { ...formData, role: 'Developer' } });

  });
});
