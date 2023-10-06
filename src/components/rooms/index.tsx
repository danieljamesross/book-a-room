import Room, { RoomProps } from '@/components/room';
import RoomPopup from '@/components/room-popup';

import styles from './rooms.module.css';

const Rooms = async () => {
  const roomsData = await fetch('https://wetransfer.github.io/rooms.json').then(
    (data) => data.text()
  );

  if (!roomsData) return <>Error</>;

  const parsedRoomsData: RoomProps[] = JSON.parse(roomsData).rooms;

  if (!parsedRoomsData) return <>Error</>;

  return (
    <menu className={styles.cards}>
      {parsedRoomsData.map(({ name, spots, thumbnail }) => (
        <Room name={name} spots={spots} thumbnail={thumbnail} key={name} />
      ))}
      <RoomPopup
        name={parsedRoomsData[0].name}
        spots={parsedRoomsData[0].spots}
        thumbnail={parsedRoomsData[0].thumbnail}
      />
    </menu>
  );
};

export default Rooms;
