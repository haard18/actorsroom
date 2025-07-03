'use client';

import React, { useEffect, useState } from 'react';

type Inquiry = {
  name: string;
  email: string;
  phoneNumber: string;
  typeOfCoaching: string;
  location: string;
  message: string;
};

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "sohampawar123") {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  useEffect(() => {
    if (authenticated) {
      async function fetchInquiries() {
        try {
          const response = await fetch('/api/inquiry');
          const data = await response.json();
          if (data.success) {
            setInquiries(data.inquiries);
          }
        } catch (error) {
          console.error('Error fetching inquiries:', error);
        } finally {
          setLoading(false);
        }
      }

      fetchInquiries();
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
        Inquiries
      </h1>

      {loading ? (
        <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
      ) : inquiries.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">No inquiries yet.</p>
      ) : (
        <div className="overflow-x-auto border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
            <thead className="bg-neutral-100 dark:bg-neutral-800 sticky top-0 z-10">
              <tr>
                {['Name', 'Email', 'Phone', 'Coaching Type', 'Location', 'Message'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
              {inquiries.map((inquiry, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-neutral-900 dark:text-neutral-100">
                    {inquiry.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 dark:text-blue-400">
                    {inquiry.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {inquiry.phoneNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {inquiry.typeOfCoaching}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {inquiry.location}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap max-w-sm break-words">
                    {inquiry.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
