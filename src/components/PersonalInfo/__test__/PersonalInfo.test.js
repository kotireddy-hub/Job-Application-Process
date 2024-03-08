import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import PersonalInfo from '../PersonalInfo.js';

describe('PersonalInfo', () => {
  test('renders input fields with correct placeholders', () => {
    const formData = {
      name: '',
      email: '',
      phone: '',
      language: '',
    };
    render(<PersonalInfo formData={formData} />);
    
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Languages')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const formData = {
      name: '',
      email: '',
      phone: '',
      language: '',
    };
    render(<PersonalInfo formData={formData} onChange={onChangeMock} />);
    
    const nameInput = screen.getByPlaceholderText('Enter your name');
    fireEvent.change(nameInput, { target: { value: 'kotireddy' } });
    expect(onChangeMock).toHaveBeenCalledWith({ personalInfo: { ...formData, name: 'kotireddy' } });
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(emailInput, { target: { value: 'kotireddy@example.com' } });
    expect(onChangeMock).toHaveBeenCalledWith({ personalInfo: { ...formData, email: 'kotireddy@example.com' } });

    const phoneInput = screen.getByPlaceholderText('Enter your phone number');
    fireEvent.change(phoneInput, { target: { value: '9999999' } });
    expect(onChangeMock).toHaveBeenCalledWith({ personalInfo: { ...formData, phone: '9999999' } });

    const languageInput = screen.getByPlaceholderText('Enter Languages');
    fireEvent.change(languageInput, { target: { value: 'English' } });
    expect(onChangeMock).toHaveBeenCalledWith({ personalInfo: { ...formData, language: 'English' } });
  });

});
