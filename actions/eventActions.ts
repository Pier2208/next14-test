'use server';

import { Event } from "@/types/Event";
import { revalidateTag } from "next/cache";

export const getEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch('http://localhost:8000/events', {
      next: { tags: ['events'] }
    });
    const events: Event[] = await res.json()
    return events;
  }
  catch (err) {
    console.log('[GET_EVENTS', err);
    return []
  }
}

export const getEvent = async (eventId: string): Promise<Event | null> => {
  try {
    const res = await fetch(`http://localhost:8000/events/${eventId}`);
    const event = await res.json();
    return event;
  } catch (err) {
    console.log('[GET_EVENT]', err);
    return null;
  }
}

export const addEvent = async (event: Omit<Event, 'id'>): Promise<Event | null> => {
  try {
    const res = await fetch(`http://localhost:8000/events`, {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const newEvent = await res.json();
    revalidateTag('events');
    return newEvent;
  }
  catch (err) {
    console.log('[ADD_EVENT', err);
    return null;
  }
}

export const deleteEvent = async (eventId: string): Promise<Event | null> => {
  try {
    const res = await fetch(`http://localhost:8000/events/${eventId}`, {
      method: 'DELETE'
    });
    const deletedEvent = await res.json();
    revalidateTag('events');
    return deletedEvent
  }
  catch (err) {
    console.log('[DELETE_EVENT', err)
    return null;
  }
}