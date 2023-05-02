/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerName from './PlayerName';

describe('PlayerName', () => {
  test('should render player name and change player name on click', () => {
    const player = { name: 'Juan' };
    const handleChangePlayer = jest.fn();

    render(<PlayerName player={player} handleChangePlayer={handleChangePlayer} />);

    const playerName = screen.getByText(`${player.name}`);
    expect(playerName).toBeInTheDocument();

    const changeNameButton = screen.getByText('Cambiar Nombre');
    fireEvent.click(changeNameButton);
    expect(handleChangePlayer).toHaveBeenCalledTimes(1);
  });
});
