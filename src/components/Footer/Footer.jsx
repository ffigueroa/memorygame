import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/images/modyo.svg" width={100} height={100} alt="Modyo" />
      <p className={styles.text}>
        Crafted by <span className={styles.bold}>Fernando Figueroa</span>
      </p>
    </footer>
  );
}
