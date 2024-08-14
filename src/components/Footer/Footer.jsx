import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Crafted by <span className={styles.bold}>Fernando Figueroa</span>
      </p>
    </footer>
  );
}
