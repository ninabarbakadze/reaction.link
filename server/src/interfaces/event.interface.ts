import { Document } from 'mongoose';

export interface IEvent extends Document {
  event: string
}