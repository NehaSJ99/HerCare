import axios from 'axios';

// Adjust based on your backend’s URL/port
const API_URL = 'http://localhost:5000/api';

export const logPeriodData = async (payload) => {
  // POST to /api/periods with the user’s data
  const response = await axios.post(`${API_URL}/periods`, payload);
  return response; // { data: { predictions, allPeriods } }
};

export const fetchUserPeriods = async () => {
  // GET /api/periods
  const response = await axios.get(`${API_URL}/periods`);
  return response; // { data: { allPeriods } }
};
