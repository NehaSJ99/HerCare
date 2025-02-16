import React, { useState } from 'react';
import PeriodForm from '../components/PeriodTracker/PeriodForm';
import PeriodPredictions from '../components/PeriodTracker/PeriodPredictions';
import PeriodCalendar from '../components/PeriodTracker/PeriodCalendar';

const PeriodTrackerPage = () => {
  const [predictions, setPredictions] = useState(null);
  const [periodDataList, setPeriodDataList] = useState([]);

  // This will be called after the backend responds with predictions & updated period list
  const handleDataLogged = (predictionsData, userPeriods) => {
    setPredictions(predictionsData);
    setPeriodDataList(userPeriods);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Period Tracker</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left side: Form and predictions */}
        <div className="md:w-1/2">
          <PeriodForm onDataLogged={handleDataLogged} />
          <PeriodPredictions predictions={predictions} />
        </div>

        {/* Right side: Calendar */}
        <div className="md:w-1/2">
          <PeriodCalendar
            periodDataList={periodDataList}
            predictions={predictions}
          />
        </div>
      </div>
    </div>
  );
};

export default PeriodTrackerPage; 