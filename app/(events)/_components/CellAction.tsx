'use client';

import { deleteEvent } from '@/actions/eventActions';
import AlertModal from '@/app/components/modals/AlertModal';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Event } from '@/types/Event';
import { MoreHorizontal, Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: Event;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  async function onConfirm() {
    try {
      await deleteEvent(data.id);
      router.refresh();
    } catch (err) {
      console.log(err);
    } finally {
      setConfirmModalOpen(false);
      setLoading(false);
    }
  }

  return (
    <>
      <AlertModal isOpen={confirmModalOpen} onClose={() => setConfirmModalOpen(false)} onConfirm={onConfirm} isLoading={loading} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-4 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/${data.id}`}>
            <DropdownMenuItem>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => setConfirmModalOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
