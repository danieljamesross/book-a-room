'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { RoomProps } from '@/components/room/index';

interface CurrentRoomProps {
  name?: RoomProps['name'];
  spots?: RoomProps['spots'];
  thumbnail?: RoomProps['thumbnail'];
}

type RoomMap = Map<RoomProps['name'], RoomProps>;

interface BookingProps {
  currentRoom: CurrentRoomProps;
  setCurrentRoom: Dispatch<SetStateAction<CurrentRoomProps>> | (() => void);
  updatedRooms: RoomMap;
  updateRooms: Dispatch<SetStateAction<RoomMap>> | (() => void);
}

export const BookingContext = createContext<BookingProps>({
  currentRoom: {},
  setCurrentRoom: () => null,
  updatedRooms: new Map(),
  updateRooms: () => null,
});

interface BookingContextProviderProps extends PropsWithChildren {
  data: RoomProps[];
}

export const BookingContextProvider = ({
  data,
  children,
}: BookingContextProviderProps) => {
  const rooms = new Map();
  Object.values(data).map((room) => rooms.set(room.name, room));

  const [updatedRooms, updateRooms] = useState<RoomMap>(rooms);
  const [currentRoom, setCurrentRoom] = useState<CurrentRoomProps>({});

  return (
    <BookingContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
        updatedRooms,
        updateRooms,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
