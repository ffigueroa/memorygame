/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { PlayerProvider } from '../contexts/PlayerContext';
import Home from './index';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home', () => {
  const routerPushMock = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push: routerPushMock,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Home component correctly', () => {
    render(
      <PlayerProvider>
        <Home />
      </PlayerProvider>
    );

    expect(
      screen.getByText((content, element) => content !== '' && element.textContent === 'MemoryGame')
    ).toBeInTheDocument();
  });

  it('allows the user to input their name and start the game', async () => {
    render(
      <PlayerProvider>
        <Home />
      </PlayerProvider>
    );

    const input = screen.getByTestId('inputName');
    expect(input).toBeInTheDocument();

    const button = screen.getByText('¡Jugar Ahora!');
    const confirmButton = screen.getByTestId('confirmButton');

    expect(button).toBeDisabled();
    expect(confirmButton).toBeDisabled();
  });
});
