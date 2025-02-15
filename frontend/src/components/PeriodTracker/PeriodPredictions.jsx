import React from 'react';

const PeriodPredictions = ({ predictions }) => {
  if (!predictions) return null;

  const {
    nextPeriodStart,
    ovulationDay,
    fertileWindowStart,
    fertileWindowEnd,
  } = predictions;

  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Predictions</h2>
      <p><strong>Next Period Start:</strong> {nextPeriodStart}</p>
      <p><strong>Ovulation Day:</strong> {ovulationDay}</p>
      <p><strong>Fertile Window:</strong> {fertileWindowStart} - {fertileWindowEnd}</p>
    </div>
  );
};

export default PeriodPredictions;
