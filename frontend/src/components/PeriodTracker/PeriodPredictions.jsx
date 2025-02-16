import React, { useState } from 'react';

const PeriodPredictions = ({ predictions }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!predictions) return null;

  const {
    nextPeriodStart,
    ovulationDay,
    fertileWindowStart,
    fertileWindowEnd,
  } = predictions;

  // Toggle fullscreen state
  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50 transition-all duration-300 ${
        isFullscreen ? 'p-0' : 'p-6'
      }`}
    >
      <div
        className={`w-full max-w-3xl bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-xl transition-all duration-300 ${
          isFullscreen ? 'w-full h-full' : 'w-full max-w-3xl'
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Predictions</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Next Period Start:</span>
              <span className="text-lg font-bold text-indigo-600">{nextPeriodStart}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Ovulation Day:</span>
              <span className="text-lg font-bold text-indigo-600">{ovulationDay}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Fertile Window:</span>
              <span className="text-lg font-bold text-indigo-600">
                {fertileWindowStart} - {fertileWindowEnd}
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={toggleFullscreen}
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodPredictions;
