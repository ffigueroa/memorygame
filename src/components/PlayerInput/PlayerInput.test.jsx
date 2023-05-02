/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerInput from './PlayerInput';

describe('PlayerInput', () => {
  test('should render with correct props', () => {
    const inputValue = 'Karina';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    render(
      <PlayerInput
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const inputElement = screen.getByPlaceholderText(/ej: karina/i);
    const submitButton = screen.getByRole('button');

    expect(inputElement).toHaveValue(inputValue);
    expect(submitButton).toBeInTheDocument();
  });

  test('should call handleChange on input change', () => {
    const inputValue = 'Karina';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    render(
      <PlayerInput
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const inputElement = screen.getByPlaceholderText(/ej: karina/i);
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });

    expect(handleChange).toHaveBeenCalled();
  });

  test('should call handleSubmit on form submission', () => {
    const inputValue = 'Karina';
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();

    render(
      <PlayerInput
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const formElement = screen.getByTestId('form');
    fireEvent.submit(formElement);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
