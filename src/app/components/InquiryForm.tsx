'use client';

import React, { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    typeOfCoaching: '',
    location: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          typeOfCoaching: '',
          location: '',
          message: '',
        });
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
        console.log('Error submitting inquiry:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">Inquiry Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        required
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <select
        name="typeOfCoaching"
        required
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.typeOfCoaching}
        onChange={handleChange}
      >
        <option value="">Select Type of Coaching</option>
        <option value="Personal">Personal</option>
        <option value="Group">Group</option>
        <option value="Online">Online</option>
        {/* <option value="methodActing">Method Acting</option> */}
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        required
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.location}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        className="w-full p-3 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white"
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-black text-white py-3 px-6 rounded-md hover:bg-neutral-800 disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {status === 'success' && <p className="text-green-500">Inquiry submitted successfully!</p>}
      {status === 'error' && <p className="text-red-500">Something went wrong. Please try again.</p>}
    </form>
  );
}
