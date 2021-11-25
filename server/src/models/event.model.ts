import mongoose, { Schema } from 'mongoose';
import { IEvent } from '../interfaces/event.interface';

const eventSchema: Schema = new Schema ({
  event: { type: String, required: true }
});

export const Event =  mongoose.model<IEvent>('Event', eventSchema);