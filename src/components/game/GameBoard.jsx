import { useState, useEffect } from 'react';
import Image from 'next/image';

import Card from './Card';

export default function GameBoard({ player, imagesData }) {
  const [cards, setCards] = useState([]);

  const MAX_CARDS = 12;

  const createDoubledCards = cardsData =>
    cardsData
      .concat(cardsData.map(card => ({ ...card, id: card.uuid })))
      .sort(() => Math.random() - 0.5);

  useEffect(() => {
    // doubled cards using imagesData from API
    if (imagesData && imagesData.entries.length > 0) {
      let cardsData = imagesData.entries.map((entry, index) => ({
        id: index,
        uuid: entry.fields.image.uuid,
        image: entry.fields.image.url,
        title: entry.fields.image.title,
        flipped: false,
      }));

      if (cardsData.length > MAX_CARDS / 2) {
        cardsData = cardsData.slice(0, MAX_CARDS / 2);
      } else if (cardsData.length % 2 !== 0) {
        cardsData.pop();
      }

      const doubledCards = createDoubledCards(cardsData);
      setCards(doubledCards);
    }
  }, [imagesData]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-row items-center justify-between bg-slate-100 rounded-lg my-4 px-4">
        <div className="">
          <Image src="/images/modyo.svg" width="100" height="100" alt="Modyo" />
          <h1 className="text-5xl font-bold text-slate-800">
            <span className="text-modyo font-medium">Memory</span>Game
          </h1>
        </div>
        <div>
          <Image src="/images/avatar.svg" width={60} height={60} alt="Avatar" />

          <p>{player.name}</p>
          <div className="score-board">
            <p>Errores: 0</p>
            <p>Aciertos: 0</p>
          </div>
        </div>
      </div>
      {cards.length > 0 ? (
        <div className="game-board bg-slate-100 rounded-lg py-10">
          <div className=" max-w-xl mx-auto grid grid-cols-4 gap-4 items-center">
            {cards.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      ) : (
        <p>No hay imágenes disponibles. Por favor, inténtalo más tarde.</p>
      )}
    </div>
  );
}
