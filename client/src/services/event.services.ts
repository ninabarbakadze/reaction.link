import { Iinput } from '../interfaces/event.interface';
const baseUrl = 'http://localhost:3001/';
const headers = new Headers({ 'Content-Type': 'application/json' });

export const getEvents = async () => {
  try {
    const events = await fetch(`${baseUrl}events`, {
      method: 'GET',
      headers,
    });
    return events.json();
  } catch (err) {
    console.error(err);
  }
};

export const addEvents = async (events: Iinput[]) => {
  console.log(events);
  try {
    const rawResponse = await fetch(`${baseUrl}add/events`, {
      method: 'POST',
      headers,
      body: JSON.stringify(events), 
    });
    const content = await rawResponse.json();
    return content;
  } catch (err) {
    console.error(err);
  }
};