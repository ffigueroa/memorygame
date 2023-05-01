import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import styles from './PlayerInput.module.scss';

function PlayerInput(props) {
  const { inputValue, handleChange, handleSubmit } = props;

  return (
    <form className="gap-6" onSubmit={handleSubmit}>
      <label htmlFor="name" className="flex flex-col items-center gap-2">
        Ingresa nombre del jugador
        <div className="flex flex-row gap-2">
          <input
            id="name"
            type="text"
            className={styles.input}
            placeholder="Ej: Karina"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            className={`${styles.submitButton} ${inputValue ? styles.submitButtonActive : ''}`}
            type="submit">
            <BsCheckLg className={styles.icon} size={20} />{' '}
          </button>
        </div>
      </label>
    </form>
  );
}

export default PlayerInput;
