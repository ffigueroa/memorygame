import { useState, useEffect, useCallback } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import Card from './Card';

export default function GameBoard({ player, imagesData }) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [errors, setErrors] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const MAX_CARDS = 12;

  const createDoubledCards = cardsData =>
    cardsData
      .concat(cardsData.map(card => ({ ...card, id: card.uuid })))
      .sort(() => Math.random() - 0.5);

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

  const createCards = useCallback(() => {
    if (imagesData && imagesData.entries.length > 0) {
      let cardsData = imagesData.entries.map((entry, index) => ({
        id: index,
        uuid: entry.fields.image.uuid,
        image: entry.fields.image.url,
        title: entry.fields.image.title,
        flipped: false,
      }));

      // Ordenar aleatoriamente el array de cartas
      cardsData.sort(() => Math.random() - 0.5);

      if (cardsData.length > MAX_CARDS / 2) {
        cardsData = cardsData.slice(0, MAX_CARDS / 2);
      } else if (cardsData.length % 2 !== 0) {
        cardsData.pop();
      }

      const doubledCards = createDoubledCards(cardsData);
      setCards(doubledCards);
    }
  }, [imagesData]);

  useEffect(() => {
    createCards();
  }, [createCards]);

  const resetGame = () => {
    setSelectedCards([]);
    setMatchedCards([]);
    setErrors(0);
    createCards();
  };

  const handleGameCompletion = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (matchedCards.length === MAX_CARDS) {
      handleGameCompletion();
    }
  }, [matchedCards, errors]);

  const modal = (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  ¡Felicidades! 🎉
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Completaste el juego con {matchedCards.length / 2} aciertos y {errors} errores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-modyo text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowModal(false)}>
              Aceptar
            </button>
            <button
              className="border border-green-500 text-modyo font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
              onClick={() => {
                resetGame();
                setShowModal(false);
              }}
              type="button">
              <VscDebugRestart /> Jugar Otra Vez
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="flex flex-row items-center justify-between bg-slate-100 rounded-lg my-4 p-4">
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold text-slate-800">
            <span className="text-modyo font-medium">Memory</span>Game
          </h1>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="inline">
            Jugando <span className="font-bold text-modyo">{player.name}</span> 😎
          </div>
        </div>

        <div className="text-center">
          <button
            className="border border-green-500 text-modyo font-bold py-2 px-2 rounded flex flex-row items-center gap-2"
            onClick={resetGame}
            type="button">
            <VscDebugRestart /> <span className="hidden md:show">Reiniciar</span>
          </button>
        </div>
      </div>

      {cards.length > 0 ? (
        <div className="game-board relative bg-slate-100 rounded-lg py-10 px-2">
          <div className="absolute -top-3 -right-2 shadow-md bg-white rounded-lg p-2  flex flex-row gap-4">
            <p className="text-md text-slate-600 font-normal">
              Aciertos:{' '}
              <span className="text-xl text-modyo font-bold">{matchedCards.length / 2}</span>
            </p>

            <p className="text-md text-slate-600 font-normal">
              Errores: <span className="text-xl text-red-400 font-bold">{errors}</span>
            </p>
          </div>
          <div className=" max-w-xl mx-auto grid grid-cols-4 gap-4 items-center">
            {cards.map(card => (
              <Card
                key={card.id}
                card={card}
                handleClick={() => handleClick(card)}
                isSelected={selectedCards.some(selectedCard => selectedCard.id === card.id)}
                isMatched={matchedCards.some(matchedCard => matchedCard.id === card.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No hay imágenes disponibles. Por favor, inténtalo más tarde.</p>
      )}
      {modal}
    </div>
  );
}
