import ModalButton from '../components/Buttons/ModalButton';
import { DataTable } from './_components/DataTable';
import { columns } from './_components/columns';
import { getEvents } from '@/actions/eventActions';

export default async function Home() {
  const events = await getEvents();

  return (
    <div className="grid">
      <div className="flex justify-self-end p-4">
        <ModalButton />
      </div>
      <section className="container">
        <DataTable columns={columns} data={events} />
      </section>
    </div>
  );
}
