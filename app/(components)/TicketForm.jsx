'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
  const router = useRouter();

  const DataOfTicket = {
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'hardware problem',
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Ticket created successfully', data);
        router.reload();
        router.push('/');
      } else {
        console.error('Failed to create ticket', res);
      }
    } catch (err) {
      console.error('Error in creating ticket', err);
    }
  };

  const HandleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;

    setfrom((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const [form, setfrom] = useState(DataOfTicket);

  return (
    <div className='flex justify-center'>
      <form
        className='flex flex-col gap-3 w-1/2'
        method='post'
        onSubmit={HandleSubmit}
      >
        <h3>Create your ticket</h3>
        <lable>Title</lable>
        <input
          id='title'
          name='title'
          type='text'
          onChange={HandleChange}
          required={true}
          value={form.title}
        />
        <lable>Description</lable>
        <textarea
          id='Description'
          name='description'
          onChange={HandleChange}
          required={true}
          value={form.description}
          rows='5'
        />
        <lable>Category</lable>
        <select name='category' value={form.category} onChange={HandleChange}>
          <option value='hardware problem'>Hardware Problem</option>
          <option value='software problem'>software Problem</option>
          <option value='project problem'>project</option>
        </select>

        <lable>priority</lable>
        <div>
          <input
            id='priority-1'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={1}
            checked={form.priority == 1}
          />
          <lable>1</lable>
          <input
            id='priority-2'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={2}
            checked={form.priority == 2}
          />
          <lable>2</lable>
          <input
            id='priority-3'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={3}
            checked={form.priority == 3}
          />
          <lable>3</lable>
          <input
            id='priority-4'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={4}
            checked={form.priority == 4}
          />
          <lable>4</lable>
          <input
            id='priority-5'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={5}
            checked={form.priority == 5}
          />
          <lable>5</lable>
        </div>
        <lable>Progress</lable>
        <input
          type='range'
          id='progress'
          name='progress'
          value={form.progress}
          min='0'
          max='100'
          onChange={HandleChange}
        />
        <lable>status</lable>
        <select name='status' value={form.status} onChange={HandleChange}>
          <option value='not started'>Not Started</option>
          <option value='started'>Started</option>
          <option value='done'>Done</option>
        </select>
        <input
          type='submit'
          className='hover:nounderline bg-blue-accent hover:bg-blue-accent-hover tracking-wider w-full text-center text-nav fontbold cursor-pointer uppercase px-4 py2 rounded-md transition-colors block'
          value='create ticket'
        />
      </form>
    </div>
  );
};

export default TicketForm;
