import React, { useState } from 'react';
import { logPeriodData } from '../../services/periodService';

const PeriodForm = ({ onDataLogged }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [averageCycleLength, setAverageCycleLength] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      startDate,
      endDate,
      averageCycleLength: Number(averageCycleLength),
    };

    try {
      const response = await logPeriodData(payload);
      // Suppose the backend returns { predictions, allPeriods } in response.data
      const { predictions, allPeriods } = response.data;

      // Pass that data up to the parent
      onDataLogged(predictions, allPeriods);

      // Reset form
      setStartDate('');
      setEndDate('');
      setAverageCycleLength('');
    } catch (error) {
      console.error('Error logging period data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-4">
      <div>
        <label className="block font-semibold">Period Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Period End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block font-semibold">Average Cycle Length (days)</label>
        <input
          type="number"
          value={averageCycleLength}
          onChange={(e) => setAverageCycleLength(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Log Period
      </button>
    </form>
  );
};

export default PeriodForm;
