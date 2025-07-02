"use client";

import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await fetch("/api/inquiry", {
          method: "GET",
        });
        const data = await response.json();
        if (data.success) {
          setInquiries(data.inquiries);
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Inquiries</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Type of Coaching</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{inquiry.name}</td>
              <td className="border border-gray-300 px-4 py-2">{inquiry.email}</td>
              <td className="border border-gray-300 px-4 py-2">{inquiry.phoneNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{inquiry.typeOfCoaching}</td>
              <td className="border border-gray-300 px-4 py-2">{inquiry.location}</td>
              <td className="border border-gray-300 px-4 py-2">{inquiry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
