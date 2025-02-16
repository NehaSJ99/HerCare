import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

/**
 * periodDataList: Array of user period records
 *   e.g., [{ start_date: "YYYY-MM-DD", end_date: "YYYY-MM-DD" }]
 *
 * predictions: {
 *   nextPeriodStart: "YYYY-MM-DD",
 *   ovulationDay: "YYYY-MM-DD",
 *   fertileWindowStart: "YYYY-MM-DD",
 *   fertileWindowEnd: "YYYY-MM-DD"
 * }
 */

const PeriodCalendar = ({ periodDataList = [], predictions }) => {
  const [value, setValue] = useState(new Date());

  // Utility: Convert "YYYY-MM-DD" to a Date object
  const toDate = (dateString) => new Date(dateString + 'T00:00:00');

  // Collect historical period days (red dot)
  const periodDays = new Set();
  periodDataList.forEach((period) => {
    let current = toDate(period.start_date);
    const end = toDate(period.end_date);
    while (current <= end) {
      periodDays.add(current.toISOString().split('T')[0]);
      current = new Date(current.getTime() + 86400000); // +1 day
    }
  });

  // Collect predicted days
  const nextPeriodStart = predictions?.nextPeriodStart || null; // Red "X"
  const fertileWindowDays = new Set(); // Green dots

  if (predictions) {
    let fwStart = toDate(predictions.fertileWindowStart);
    const fwEnd = toDate(predictions.fertileWindowEnd);
    while (fwStart <= fwEnd) {
      fertileWindowDays.add(fwStart.toISOString().split('T')[0]);
      fwStart = new Date(fwStart.getTime() + 86400000);
    }
  }

  // Use tileContent to display markings
  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;
    const dateStr = date.toISOString().split('T')[0];

    // Red dot for past periods
    if (periodDays.has(dateStr)) {
      return (
        <div
          style={{
            marginTop: '2px',
            height: '12px',
            width: '12px',
            borderRadius: '50%',
            backgroundColor: '#ff4d4d', // Light red for past periods
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', // Add shadow for depth
          }}
        />
      );
    }

    // Red "X" for next period start date
    if (nextPeriodStart && nextPeriodStart === dateStr) {
      return (
        <div
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ff4d4d',
            textAlign: 'center',
            transform: 'scale(1.4)',
          }}
        >
          X
        </div>
      );
    }

    // Green dot for fertile window with grass-like appearance
    if (fertileWindowDays.has(dateStr)) {
      return (
        <div
          style={{
            marginTop: '2px',
            height: '12px',
            width: '12px',
            borderRadius: '50%',
            backgroundColor: '#4CAF50', // Green for fertile window
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '2px solid #388E3C', // Grass border for fertility
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Soft shadow for green dot
          }}
        />
      );
    }

    return null;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto space-y-6 border-2 border-gray-300 mt-4">
      <h2 className="text-2xl font-semibold text-center text-pink-600 mt-4">Period Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
        className="rounded-lg border-2 border-pink-400 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-pink-100"
      />
      <div className="text-center text-gray-500 text-sm mt-6">
        <p>Track your menstrual cycle, ovulation, and fertile windows easily!</p>
      </div>
    </div>
  );
};

export default PeriodCalendar;
