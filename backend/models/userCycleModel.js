/**
 * Ensure table (user_cycles) exists in your PostgreSQL:
 * 
 * CREATE TABLE IF NOT EXISTS user_cycles (
 *   id SERIAL PRIMARY KEY,
 *   user_id INT NOT NULL,
 *   start_date DATE NOT NULL,
 *   end_date DATE NOT NULL,
 *   cycle_length INT NOT NULL,
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 */

const pool = require('../config/db');

// Insert a new cycle record
async function insertCycle(userId, startDate, endDate, cycleLength) {
  const query = `
    INSERT INTO user_cycles (user_id, start_date, end_date, cycle_length)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [userId, startDate, endDate, cycleLength];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Fetch all cycles for a user
async function getUserCycles(userId) {
  const query = `
    SELECT *
    FROM user_cycles
    WHERE user_id = $1
    ORDER BY start_date DESC
  `;
  const values = [userId];
  const result = await pool.query(query, values);
  return result.rows;
}

module.exports = {
  insertCycle,
  getUserCycles,
};
