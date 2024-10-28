/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const cardMock = {
  id: 1,
  image: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
  title: 'Dog',
};

const handleClick = jest.fn();

describe('Card', () => {
  beforeEach(() => {
    render(<Card card={cardMock} handleClick={handleClick} isSelected={false} isMatched={false} />);
  });

  test('renders the card component', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('renders the card image with correct src and alt', () => {
    const image = screen.getByAltText(cardMock.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  test('renders the brand logo', () => {
    const brandLogo = screen.getByAltText('UNO');
    expect(brandLogo).toBeInTheDocument();
  });
});
