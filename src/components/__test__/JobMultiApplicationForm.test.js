import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import JobMultiApplicationForm from '../JobMultiApplicationForm.js';

describe('JobMultiApplicationForm', () => {
  test('renders the form with initial step and buttons', () => {
    render(<JobMultiApplicationForm />);
    
    // Ensure that the form renders with the initial step
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    
    // Ensure that the form renders the back button as disabled
    expect(screen.getByText('Back')).toBeDisabled();
    
    // Ensure that the form renders the next button
    expect(screen.getByText('Next')).toBeInTheDocument();

    // Ensure that input fields are rendered
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Languages')).toBeInTheDocument();
  });

  test('renders the next step when Next button is clicked', () => {
    render(<JobMultiApplicationForm />);
    const nextButton = screen.getByText('Next');
    
    fireEvent.click(nextButton);
    
    // Ensure that the next step is rendered
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  test('renders the previous step when Back button is clicked', () => {
    render(<JobMultiApplicationForm />);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    
    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);
    
    // Ensure that the previous step is rendered
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  // Additional test cases can be added for form submission, error handling, etc.
});
