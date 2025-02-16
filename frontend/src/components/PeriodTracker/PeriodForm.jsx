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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-6 mt-16 border-2 border-pink-500"
    >
      <h2 className="text-2xl font-semibold text-pink-500 text-center">Log Your Period</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Period Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Period End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Average Cycle Length (days)</label>
          <input
            type="number"
            value={averageCycleLength}
            onChange={(e) => setAverageCycleLength(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        Log Period
      </button>
    </form>
  );
};

export default PeriodForm;

