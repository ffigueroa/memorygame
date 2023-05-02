/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScoreBoard from './ScoreBoard';

describe('ScoreBoard', () => {
  test('should render the score correctly', () => {
    const matchedCards = 6;
    const errors = 2;

    render(<ScoreBoard matchedCards={matchedCards} errors={errors} />);

    const matchesCount = screen.getByText(
      (content, element) =>
        content !== '' && element.textContent === `Aciertos: ${matchedCards / 2}`
    );
    expect(matchesCount).toBeInTheDocument();

    const errorsCount = screen.getByText(
      (content, element) => content !== '' && element.textContent === `Errores: ${errors}`
    );
    expect(errorsCount).toBeInTheDocument();
  });
});
