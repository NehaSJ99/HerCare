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
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            backgroundColor: 'red',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      );
    }

    // Red "X" for next period start date
    if (nextPeriodStart && nextPeriodStart === dateStr) {
      return (
        <div
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'red',
            textAlign: 'center',
          }}
        >
          X
        </div>
      );
    }

    // Green dot for fertile window
    if (fertileWindowDays.has(dateStr)) {
      return (
        <div
          style={{
            marginTop: '2px',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            backgroundColor: 'green',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      );
    }

    return null;
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />
    </div>
  );
};

export default PeriodCalendar;
