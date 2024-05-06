'use client';

import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { Event } from '@/types/Event';
import { MouseEventHandler } from 'react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
}

export default function AlertModal({ isOpen, isLoading, onClose, onConfirm }: AlertModalProps) {
  return (
    <Modal title="Are you sure?" description="This action cannot be undone." isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isLoading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
}
