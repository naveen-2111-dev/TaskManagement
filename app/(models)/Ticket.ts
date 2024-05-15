import mongoose, { Schema } from 'mongoose';
import { ProcessEnv } from '@/types';

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error('MONGO_URI is not defined.');
}

mongoose.connect(MONGO_URI);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model('Ticket', TicketSchema);
export default Ticket;
