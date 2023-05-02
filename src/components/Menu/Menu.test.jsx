/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './Menu';

describe('Menu', () => {
  test('renders the component with the correct buttons', () => {
    const resetGame = jest.fn();
    const exitGame = jest.fn();
    render(<Menu resetGame={resetGame} exitGame={exitGame} />);
    const restartButton = screen.getByText(/Reiniciar/i);
    const exitButton = screen.getByText(/Salir/i);
    expect(restartButton).toBeInTheDocument();
    expect(exitButton).toBeInTheDocument();
    fireEvent.click(restartButton);
    expect(resetGame).toHaveBeenCalled();
    fireEvent.click(exitButton);
    expect(exitGame).toHaveBeenCalled();
  });
});
