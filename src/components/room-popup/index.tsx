'use client';

import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { useBookingContext } from '@/contexts/bookingContext';

import Button from '@/components/ui/button';

import styles from './room-popup.module.css';

const NUM_SEATS = 'num-seats';
export const POPUP_ID = 'room-popup';

const RoomPopup = () => {
  const { currentRoom, updatedRooms, updateRooms, setCurrentRoom } =
    useBookingContext();
  const { name, spots, thumbnail } = currentRoom;
  const [booked, setBooked] = useState<false | number>(false);

  const handleClose = () => {
    const dialog = document.querySelector<HTMLDialogElement>(`#${POPUP_ID}`);
    if (!dialog) return;

    dialog.close();
    setCurrentRoom({});
    setBooked(false);
  };

  const handleBook = () => {
    const input = document.querySelector<HTMLInputElement>(`#${NUM_SEATS}`);
    if (!input || !name || !thumbnail || !spots) return;

    const numSpots = Number(input.value);
    updateRooms(
      updatedRooms.set(name, { name, thumbnail, spots: spots - numSpots })
    );
    setBooked(numSpots);
  };

  return (
    <dialog className={styles.dialog} id={POPUP_ID}>
      <div className={styles.container}>
        <header className={styles.header}>
          <button onClick={handleClose} className={styles.close}>
            <CloseIcon />
          </button>
        </header>
        <div className={styles.inner}>
          <div
            className={styles.dialogImage}
            style={{ backgroundImage: `url(${thumbnail})` }}
            title={name}
          ></div>
          {booked ? (
            <>
              <h3 className={styles.dialogTitle}>Congratulations!</h3>
              <p className={styles.dialogDescription}>
                {`You have booked ${booked} spots in ${name}.`}
              </p>
              <p className={styles.dialogDescription}>
                {`There are ${spots - booked} spots left`}
              </p>
              <Button onClick={handleClose}>Close</Button>
            </>
          ) : (
            <>
              <h3 className={styles.dialogTitle}>{name}</h3>
              <p className={styles.dialogDescription}>Spots left: {spots}</p>
              <div className={styles.details}>
                <label htmlFor={NUM_SEATS}>Number of seats to book</label>
                <input
                  type="number"
                  name={NUM_SEATS}
                  id={NUM_SEATS}
                  min="1"
                  max={spots}
                  step="1"
                  defaultValue="1"
                />
              </div>
              <Button onClick={handleBook}>Book!</Button>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default RoomPopup;
