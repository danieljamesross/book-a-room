'use client';

import Button from '@/components/ui/button';

import styles from './room.module.css';

export interface RoomProps {
  name: string;
  spots: number;
  thumbnail: string;
}

const Room = ({ name, spots, thumbnail }: RoomProps) => {
  const handleClick = () => null;

  return (
    <li className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${thumbnail})` }}
        title={name}
      ></div>
      <div className={styles.details}>
        <div>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardDescription}>{spots}</p>
        </div>
        <Button onClick={handleClick}>Book!</Button>
      </div>
    </li>
  );
};

export default Room;
