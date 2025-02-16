const pool = require('../config/db');

// Insert new user
async function createDoctor(name, userId, password) {
  const query = `
    INSERT INTO doctors (name, user_id, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, userId, password];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Get user by user_id
async function getDoctorById(userId) {
  const query = `SELECT * FROM doctors WHERE user_id = $1;`;
  const values = [userId];
  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = { createDoctor, getDoctorById };
