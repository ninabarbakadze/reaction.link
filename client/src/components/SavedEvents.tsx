import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/event.services';
import { Iinput } from '../interfaces/event.interface';
import '../App.css';

export default function Events() {
  const [events, setEvents ] = useState<Iinput[]>();

  useEffect(() => {
    ( async () => {
      const events = await getEvents();
      if (events) setEvents(events);
    })();
  }, []);

  return (
    <div >
      {events?.map((event, index) => (
        <ul key={index} className="event-parent">
          <li className="saved-event" key={index}>{event.event}</li>
        </ul>
      ))}
    </div>
  );
}