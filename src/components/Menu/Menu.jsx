import { VscDebugRestart } from 'react-icons/vsc';
import { MdExitToApp } from 'react-icons/md';
import styles from './Menu.module.scss';

export default function Menu({ resetGame, exitGame }) {
  return (
    <div className={styles.menu}>
      <h1>
        <span className={styles.menu__title}>Memory</span>Game
      </h1>
      <div className="flex flex-row gap-2">
        <button
          className={`${styles.menu__button} ${styles['menu__button--primary']}`}
          onClick={resetGame}
          type="button">
          <VscDebugRestart />
          <span className="hidden md:block">Reiniciar</span>
        </button>
        <button
          className={`${styles.menu__button} ${styles['menu__button--secondary']}`}
          onClick={exitGame}
          type="button">
          <MdExitToApp />
          <span className="hidden md:block">Salir</span>
        </button>
      </div>
    </div>
  );
}
