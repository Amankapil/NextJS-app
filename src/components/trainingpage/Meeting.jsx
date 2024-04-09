// components/MeetingForm.js

"use client";
// components/MeetingForm.js
import { useState } from 'react';

export default function Meeting() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [emails, setEmails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/scheduleMeeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time, emails: emails.split(',') }),
      });

      if (!response.ok) {
        throw new Error('Error scheduling meeting');
      }

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('An error occurred while scheduling the meeting.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Schedule a Meeting</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input type="date" id="date" className="w-full mt-1 p-2 border-gray-300 rounded-md" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700">Time:</label>
          <input type="time" id="time" className="w-full mt-1 p-2 border-gray-300 rounded-md" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="emails" className="block text-gray-700">Emails (comma-separated):</label>
          <input type="text" id="emails" className="w-full mt-1 p-2 border-gray-300 rounded-md" value={emails} onChange={(e) => setEmails(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Schedule Meeting</button>
      </form>
    </div>
  );
}

