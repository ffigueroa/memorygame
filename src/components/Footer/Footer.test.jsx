/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer', () => {
  test('renders the Modyo logo and author name', () => {
    render(<Footer />);
    expect(screen.getByAltText('Modyo')).toBeInTheDocument();
    expect(screen.getByText('Fernando Figueroa')).toBeInTheDocument();
  });
});
