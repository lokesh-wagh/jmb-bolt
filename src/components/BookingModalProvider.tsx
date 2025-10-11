import React, { createContext, useContext, useState } from 'react';
import BookingModal from './BookingModal';

type BookingContextValue = {
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export const BookingModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openState, setOpenState] = useState(false);

  return (
    <BookingContext.Provider value={{ open: () => setOpenState(true), close: () => setOpenState(false) }}>
      {children}
      <BookingModal open={openState} onClose={() => setOpenState(false)} />
    </BookingContext.Provider>
  );
};

export const useBookingModal = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBookingModal must be used within BookingModalProvider');
  return ctx;
};

export default BookingModalProvider;
