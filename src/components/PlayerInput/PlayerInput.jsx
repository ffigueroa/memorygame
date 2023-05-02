import { BsCheckLg } from 'react-icons/bs';
import styles from './PlayerInput.module.scss';

function PlayerInput(props) {
  const { inputValue, handleChange, handleSubmit } = props;

  return (
    <form className="gap-6" onSubmit={handleSubmit} data-testid="form">
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
            data-testid="inputName"
          />
          <button
            className={`${styles.submitButton} ${inputValue ? styles.submitButtonActive : ''}`}
            disabled={!inputValue}
            type="submit"
            data-testid="confirmButton">
            <BsCheckLg className={styles.icon} size={20} />{' '}
          </button>
        </div>
      </label>
    </form>
  );
}

export default PlayerInput;
