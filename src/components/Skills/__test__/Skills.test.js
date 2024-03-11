import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import Skills from '../Skills.js';


describe('Skills', () => {
  test('renders input fields with correct placeholders', () => {
    const formData = {
      skill: '',
      skillLevel: '',
    };
    render(<Skills formData={formData} />);
    
    expect(screen.getByPlaceholderText('Skill')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const formData = {
      skill: '',
      skillLevel: '',
    };
    render(<Skills formData={formData} onChange={onChangeMock} />);
    
    const skillInput = screen.getByPlaceholderText('Skill');
    fireEvent.change(skillInput, { target: { value: 'JavaScript' } });
    expect(onChangeMock).toHaveBeenCalledWith({ skills: { ...formData, skill: 'JavaScript' } });
  });

});
