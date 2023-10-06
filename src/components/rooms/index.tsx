'use client';

import { useBookingContext } from '@/contexts/bookingContext';

import Room from '@/components/room';
import RoomPopup from '@/components/room-popup';

import styles from './rooms.module.css';

const Rooms = () => {
  const { updatedRooms } = useBookingContext();

  const mapableRooms = Array.from(updatedRooms);

  return (
    <menu className={styles.cards}>
      {mapableRooms.map(([key, { name, spots, thumbnail }]) => (
        <Room name={name} spots={spots} thumbnail={thumbnail} key={key} />
      ))}
      <RoomPopup />
    </menu>
  );
};

export default Rooms;
