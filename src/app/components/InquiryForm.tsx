'use client';

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    typeOfCoaching: '',
    location: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/inquiry', formData);
      toast.success('Inquiry submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        typeOfCoaching: '',
        location: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-neutral-900 rounded-xl shadow-lg space-y-4 my-10 w-[90%]"
    >
      <h2 className="text-2xl font-bold text-white">Inquiry Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        required
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <select
        name="typeOfCoaching"
        required
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.typeOfCoaching}
        onChange={handleChange}
      >
        <option value="">Select Type of Coaching</option>
        <option value="Personal">Personal</option>
        <option value="Group">Group</option>
        <option value="Online">Online</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        required
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.location}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your message..."
        rows={5}
        className="w-full p-3 rounded-md bg-neutral-800 text-white"
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-black text-white py-3 px-6 rounded-md hover:bg-neutral-800 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
