import Ticket from '../(models)/Ticket';
import { NextResponse } from 'next/server';
import { props } from '@/types';

export async function POST({ req }: props) {
  try {
    const body = await req.json();
    const ticketdata = body.formdata;
    await Ticket.create(ticketdata);

    return NextResponse.json({ message: 'ticket created!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 });
  }
}
