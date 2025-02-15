const pool = require('../config/db');

// Insert new user
async function createUser(name, userId, password) {
  const query = `
    INSERT INTO users (name, user_id, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, userId, password];
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Get user by user_id
async function getUserById(userId) {
  const query = `SELECT * FROM users WHERE user_id = $1;`;
  const values = [userId];
  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = { createUser, getUserById };
