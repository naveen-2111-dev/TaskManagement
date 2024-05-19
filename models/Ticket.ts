import mongoose, { Schema } from 'mongoose';

const MONGO_URI =
  'mongodb+srv://TicketingApp:Ticket@cluster0.v7u7ufz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
