import Image from 'next/image';
import styles from './Card.module.scss';

export default function Card({ card, handleClick, isSelected, isMatched }) {
  const onCardClick = () => {
    if (!isSelected && !isMatched) {
      handleClick(card);
    }
  };

  return (
    <div
      className={`${styles.card__container} ${
        isSelected || isMatched ? '' : styles['card--is-flipped']
      }`}
      onClick={onCardClick}
      aria-hidden="true"
      data-testid="card">
      <div className={styles.card__inner}>
        <div className={`${styles.card__side} ${styles.card__front}`}>
          <div className={`${styles.card__image}`}>
            <Image
              src={card.image}
              alt={card.title}
              className="object-cover h-full w-full rounded-md"
              fill
            />
          </div>
        </div>
        <div className={`${styles.card__side} ${styles.card__back}`}>
          <div className={`${styles.card__image} ${styles.card__brand}`}>
            <Image src="/images/uno_m.svg" width={60} height={60} alt="UNO" />
          </div>
        </div>
      </div>
    </div>
  );
}
