import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Menu from '../Menu/Menu';
import CardsGrid from '../CardsGrid/CardsGrid';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Modal from '../Modal/Modal';

export default function GameBoard({ player, imagesData }) {
  const router = useRouter();

  // State variables
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [errors, setErrors] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Constants
  const MAX_CARDS = 12;

  // Helper function to create doubled cards
  const createDoubledCards = cardsData =>
    cardsData
      .concat(cardsData.map(card => ({ ...card, id: card.uuid })))
      .sort(() => Math.random() - 0.5);

  // Create cards and sort them randomly
  const createCards = useCallback(() => {
    if (imagesData && imagesData.entries.length > 0) {
      let cardsData = imagesData.entries.map((entry, index) => ({
        id: index,
        uuid: entry.fields.image.uuid,
        image: entry.fields.image.url,
        title: entry.fields.image.title,
        flipped: false,
      }));

      // Randomly sort cards
      cardsData.sort(() => Math.random() - 0.5);

      // Limit cards to half of the max cards
      if (cardsData.length > MAX_CARDS / 2) {
        cardsData = cardsData.slice(0, MAX_CARDS / 2);
      } else if (cardsData.length % 2 !== 0) {
        cardsData.pop();
      }

      const doubledCards = createDoubledCards(cardsData);
      setCards(doubledCards);
    }
  }, [imagesData]);

  // Initialize and sort cards
  useEffect(() => {
    createCards();
  }, [createCards]);

  // Handle card click
  const handleClick = card => {
    if (selectedCards.length === 0) {
      setSelectedCards([card]);
    } else if (selectedCards.length === 1) {
      const firstCard = selectedCards[0];

      if (firstCard.uuid === card.uuid && firstCard.id !== card.id) {
        setMatchedCards([...matchedCards, firstCard, card]);
      } else {
        setErrors(errors + 1);
      }

      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);

      setSelectedCards([...selectedCards, card]);
    }
  };

  // Check for game completion
  useEffect(() => {
    // Show game completion modal
    const handleGameCompletion = () => {
      setShowModal(true);
    };
    if (matchedCards.length === MAX_CARDS) {
      handleGameCompletion();
    }
  }, [matchedCards, errors]);

  // Reset game state
  const resetGame = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setErrors(0);
    createCards();
  };

  // Exit game and return to main page
  const exitGame = () => {
    router.push('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-2">
      <Menu player={player} resetGame={resetGame} exitGame={exitGame} />
      {cards.length > 0 ? (
        <div className="game-board relative bg-slate-100 rounded-lg py-10 px-2">
          <ScoreBoard matchedCards={matchedCards.length} errors={errors} />
          <CardsGrid
            cards={cards}
            handleClick={handleClick}
            selectedCards={selectedCards}
            matchedCards={matchedCards}
          />
        </div>
      ) : (
        <p>No hay imágenes disponibles. Por favor, inténtalo más tarde.</p>
      )}
      <Modal
        showModal={showModal}
        matchedCards={matchedCards.length}
        errors={errors}
        setShowModal={setShowModal}
        resetGame={resetGame}
      />
    </div>
  );
}
