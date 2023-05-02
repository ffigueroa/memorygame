/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/router';

import GameBoard from './GameBoard';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const player = { name: 'Player' };
const imagesData = {
  entries: [
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6571',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6572',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6573',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6574',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6575',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6576',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6577',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6578',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6579',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6510',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6511',
          title: 'Dog',
        },
      },
    },
    {
      fields: {
        image: {
          url: 'https://cloud.modyocdn.com/uploads/92f02ec1-c85d-4718-9cd0-2618872d657d/original/dog.jpg',
          uuid: '92f02ec1-c85d-4718-9cd0-2618872d6512',
          title: 'Dog',
        },
      },
    },
  ],
};

describe('GameBoard', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }));

    render(<GameBoard player={player} imagesData={imagesData} />);
  });

  test('renders player info and score board', () => {
    expect(screen.getByText(player.name)).toBeInTheDocument();
    expect(screen.getByText(/Aciertos:/i)).toBeInTheDocument();
    expect(screen.getByText(/Errores:/i)).toBeInTheDocument();
  });

  test('renders the cards grid', () => {
    expect(screen.getByTestId('grid')).toBeInTheDocument();
  });

  test('renders the correct number of cards with their images loaded', () => {
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(12);

    cards.forEach(card => {
      const cardImage = card.querySelector('img');
      expect(cardImage).toHaveAttribute('src');
    });
  });
});
