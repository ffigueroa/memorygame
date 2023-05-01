import Card from '../Card/Card';

function CardsGrid({ cards, handleClick, selectedCards, matchedCards }) {
  return (
    <div className="max-w-xl mx-auto grid grid-cols-3 sm:grid-cols-4 gap-4 items-center">
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
  );
}

export default CardsGrid;
