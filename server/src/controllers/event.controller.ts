import { Request, Response } from 'express';
import { Event } from '../models/event.model';

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).send(events);
  } catch (err) {
    err instanceof Error ? res.status(500).send({ errorMessage: err.message })
      :  res.status(500).send({ uknownError: err });
  }
};

export const addEvents = async (req: Request, res: Response) => {
  try {
   
    const events = await Event.insertMany(req.body);
    res.status(200).send(events);
  } catch (err) {
    err instanceof Error ? res.status(500).send({ errorMessage: err.message })
      :  res.status(500).send({ uknownError: err });
  }
};