'use client';

import { useAddEventModal } from '@/app/hooks/useAddEventModal';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function ModalButton() {
  const { onOpen } = useAddEventModal();

  return (
    <Button onClick={onOpen}>
      <PlusCircle className="mr-2" />
      <span>Add an event</span>
    </Button>
  );
}
