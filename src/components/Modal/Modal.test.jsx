/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';

describe('Modal', () => {
  test('should render with correct props', () => {
    const setShowModal = jest.fn();
    const resetGame = jest.fn();

    render(<Modal showModal errors={5} setShowModal={setShowModal} resetGame={resetGame} />);

    const modalTitle = screen.getByText(/¡Felicidades!/i);
    const modalContent = screen.getByText(/Completaste el juego con/i);
    const closeButton = screen.getByRole('button', { name: /aceptar/i });
    const restartButton = screen.getByRole('button', { name: /volver a jugar/i });

    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toHaveTextContent('Completaste el juego con 5 errores.');
    expect(closeButton).toBeInTheDocument();
    expect(restartButton).toBeInTheDocument();
  });

  test('should call setShowModal on close button click', () => {
    const setShowModal = jest.fn();
    const resetGame = jest.fn();

    render(<Modal showModal errors={5} setShowModal={setShowModal} resetGame={resetGame} />);

    const closeButton = screen.getByRole('button', { name: /aceptar/i });
    fireEvent.click(closeButton);

    expect(setShowModal).toHaveBeenCalledWith(false);
  });

  test('should call resetGame and setShowModal on restart button click', () => {
    const setShowModal = jest.fn();
    const resetGame = jest.fn();

    render(<Modal showModal errors={5} setShowModal={setShowModal} resetGame={resetGame} />);

    const restartButton = screen.getByRole('button', { name: /volver a jugar/i });
    fireEvent.click(restartButton);

    expect(resetGame).toHaveBeenCalled();
    expect(setShowModal).toHaveBeenCalledWith(false);
  });
});
