import Rooms from '@/components/rooms';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rooms</h1>
        <h2 className={styles.subtitle}>
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </h2>
      </header>
      <Rooms />
    </main>
  );
}
