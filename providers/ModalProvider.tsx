'use client';

import { useEffect, useState } from 'react';
import AddEventModal from '../app/components/modals/AddEventModal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AddEventModal />
    </>
  );
};
