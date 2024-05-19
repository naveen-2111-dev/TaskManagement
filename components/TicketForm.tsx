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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Ticket created successfully', data);
        router.refresh();
        router.push('/');
      } else {
        console.error('Failed to create ticket', res.statusText);
      }
    } catch (err) {
      console.error('Error in creating ticket', err);
    }
  };

  const HandleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [form, setForm] = useState(DataOfTicket);
  console.log(form);

  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2'>
        <h3>Create your ticket</h3>
        <label>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={HandleChange}
          required={true}
          value={form.title}
        />
        <label>Description</label>
        <textarea
          id='description'
          name='description'
          onChange={HandleChange}
          required={true}
          value={form.description}
          rows={5}
        />
        <label>Category</label>
        <select name='category' value={form.category} onChange={HandleChange}>
          <option value='hardware problem'>Hardware Problem</option>
          <option value='software problem'>Software Problem</option>
          <option value='project problem'>Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id='priority-1'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={1}
            checked={form.priority === 1}
          />
          <label>1</label>
          <input
            id='priority-2'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={2}
            checked={form.priority === 2}
          />
          <label>2</label>
          <input
            id='priority-3'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={3}
            checked={form.priority === 3}
          />
          <label>3</label>
          <input
            id='priority-4'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={4}
            checked={form.priority === 4}
          />
          <label>4</label>
          <input
            id='priority-5'
            name='priority'
            type='radio'
            onChange={HandleChange}
            value={5}
            checked={form.priority === 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type='range'
          id='progress'
          name='progress'
          value={form.progress}
          min='0'
          max='100'
          onChange={HandleChange}
        />
        <label>Status</label>
        <select name='status' value={form.status} onChange={HandleChange}>
          <option value='not started'>Not Started</option>
          <option value='started'>Started</option>
          <option value='done'>Done</option>
        </select>
        <button
          className='hover:nounderline bg-blue-accent hover:bg-blue-accent-hover tracking-wider w-full text-center text-nav fontbold cursor-pointer uppercase px-4 py2 rounded-md transition-colors block'
          onClick={handleSubmit}
        >
          Add Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
