const { insertCycle, getUserCycles } = require('../models/userCycleModel');

// Simple placeholder logic for period predictions
function calculatePredictions(startDate, endDate, avgCycleLength) {
  // Convert to Date objects
  const start = new Date(startDate);
  const cycleLen = Number(avgCycleLength);

  // Next period start = startDate + cycleLen days
  const nextPeriodStart = new Date(start.getTime());
  nextPeriodStart.setDate(nextPeriodStart.getDate() + cycleLen);

  // Ovulation day = nextPeriodStart - (cycleLen - 14) [approx for 28-day cycle]
  const ovulationDay = new Date(nextPeriodStart.getTime());
  ovulationDay.setDate(ovulationDay.getDate() - (cycleLen - 14));

  // Fertile window = ovulationDay -2 to ovulationDay +2
  const fertileWindowStart = new Date(ovulationDay.getTime());
  fertileWindowStart.setDate(fertileWindowStart.getDate() - 2);

  const fertileWindowEnd = new Date(ovulationDay.getTime());
  fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 2);

  // Return date strings in YYYY-MM-DD
  return {
    nextPeriodStart: nextPeriodStart.toISOString().split('T')[0],
    ovulationDay: ovulationDay.toISOString().split('T')[0],
    fertileWindowStart: fertileWindowStart.toISOString().split('T')[0],
    fertileWindowEnd: fertileWindowEnd.toISOString().split('T')[0],
  };
}

exports.logPeriod = async (req, res) => {
  try {
      const { userId, startDate, endDate, averageCycleLength } = req.body;
      const cycle = await insertCycle(userId, startDate, endDate, averageCycleLength);
      res.status(201).json(cycle);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to log period data' });
  }
};

exports.getPeriods = async (req, res) => {
  try {
      const { userId } = req.query;
      const cycles = await getUserCycles(userId);
      res.status(200).json(cycles);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch period data' });
  }
};
