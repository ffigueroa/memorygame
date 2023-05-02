/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerInfo from './PlayerInfo';

describe('PlayerInfo', () => {
  test('should render with correct props', () => {
    const player = { name: 'John Doe' };
    render(<PlayerInfo player={player} />);

    const playerName = screen.getByText(/john doe/i);

    expect(playerName).toBeInTheDocument();
  });
});
