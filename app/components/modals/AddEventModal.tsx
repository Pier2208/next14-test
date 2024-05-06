'use client';

import { useAddEventModal } from '@/app/hooks/useAddEventModal';
import Modal from '@/components/ui/modal';
import EventForm from '../forms/EventForm';

export default function AddEventModal() {
  const { isOpen, onClose } = useAddEventModal();

  return (
    <Modal title="Add an event" isOpen={isOpen} onClose={onClose}>
      <EventForm />
    </Modal>
  );
}
