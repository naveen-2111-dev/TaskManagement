import { NextApiRequest, NextApiResponse } from 'next';
import Ticket from '../../models/Ticket';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const ticketdata = req.body;
    await Ticket.create(ticketdata);
    return res.status(201).json({ message: 'Ticket created!' });
  } catch (error) {
    console.error('Error creating ticket:', error);
  }
}
