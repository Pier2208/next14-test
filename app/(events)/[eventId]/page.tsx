import { getEvent } from '@/actions/eventActions';

export default async function EventPage({ params }: { params: { eventId: string } }) {
  //fetch event
  const event = await getEvent(params.eventId);

  return (
    <div className="grid">
      <section className="container">
        <h1 className="text-3xl">EventId: {params.eventId}</h1>
        <p>Name: {event?.name}</p>
        <p>Location: {event?.location}</p>
        <p>Date: {event?.date}</p>
      </section>
    </div>
  );
}
