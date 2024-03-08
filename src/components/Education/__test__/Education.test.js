import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Education from '../Education.js';

describe('Education', () => {
  test('renders input fields with correct placeholders', () => {
    const formData = {
      institutionName: '',
      institutionType: '',
      degree: '',
      date: '',
    };
    render(<Education formData={formData} />);
    
    expect(screen.getByPlaceholderText('Enter Your Institution Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Your Type of Institution')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Degree Obtained')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const formData = {
      institutionName: '',
      institutionType: '',
      degree: '',
      date: '',
    };
    render(<Education formData={formData} onChange={onChangeMock} />);
    
    const institutionNameInput = screen.getByPlaceholderText('Enter Your Institution Name');
    fireEvent.change(institutionNameInput, { target: { value: 'University of React' } });
    expect(onChangeMock).toHaveBeenCalledWith({ education: { ...formData, institutionName: 'University of React' } });
    
    const institutionTypeInput = screen.getByPlaceholderText('Enter Your Type of Institution');
    fireEvent.change(institutionTypeInput, { target: { value: 'Public' } });
    expect(onChangeMock).toHaveBeenCalledWith({ education: { ...formData, institutionType: 'Public' } });

    const degreeInput = screen.getByPlaceholderText('Degree Obtained');
    fireEvent.change(degreeInput, { target: { value: 'Test' } });
    expect(onChangeMock).toHaveBeenCalledWith({ education: { ...formData, degree: 'Test' } });

    const dateInput = screen.getByPlaceholderText('Date');
    fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
    expect(onChangeMock).toHaveBeenCalledWith({ education: { ...formData, date: '2025-01-01' } });
  });

});
