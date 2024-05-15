'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
  const DataOfTicket = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'hardware problem',
  };

    const HandleChange = (event) => {
        const value = event.target.value;
        const name = e.target.name;

        setfrom((pre) => ({
            ...pre,
            [name]: value,
        }));
  }

  const [form, setfrom] = useState(DataOfTicket);

  return (
    <div className='flex justify-center'>
      <form>
        <h3>Create your ticket</h3>
        <lable>Title</lable>
        <input
          id='title'
          name='title'
          type='text'
          onChange={HandleChange}
          required={true}
          value={form.value}
        />
      </form>
    </div>
  );
};

export default TicketForm;
