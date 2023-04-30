import Image from 'next/image';
import { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card__container} ${isFlipped ? styles['card--is-flipped'] : ''}`}
      onClick={handleClick}
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
            <p>?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
