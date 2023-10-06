import { BookingContextProvider } from '@/contexts/bookingContext';

import { RoomProps } from '@/components/room';
import Rooms from '@/components/rooms';

const BookableRooms = async () => {
  const roomsData = await fetch('https://wetransfer.github.io/rooms.json').then(
    (data) => data.text()
  );

  if (!roomsData) return <>Error</>;

  const parsedRoomsData: RoomProps[] = JSON.parse(roomsData).rooms;

  if (!parsedRoomsData) return <h1>Error! No rooms found</h1>;

  return (
    <BookingContextProvider data={parsedRoomsData}>
      <Rooms />
    </BookingContextProvider>
  );
};

export default BookableRooms;
