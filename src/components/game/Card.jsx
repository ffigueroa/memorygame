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
      aria-hidden="true">
      <div className={styles.card__inner}>
        <div className={`${styles.card__side} ${styles.card__front}`}>
          <div className="h-full w-full">
            <Image
              src={card.image}
              alt={card.title}
              className="object-cover h-full w-full rounded-md"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${styles.card__side} ${styles.card__back}`}>
          <div className="h-full w-full flex items-center justify-center p-4">
            <Image src="/images/modyo_m.svg" width={40} height={40} alt="Modyo" />
          </div>
        </div>
      </div>
    </div>
  );
}
