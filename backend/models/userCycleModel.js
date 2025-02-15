const pool = require('../config/db');

async function insertCycle(userId, startDate, endDate, cycleLength) {
    const result = await pool.query(
        'INSERT INTO user_cycles (user_id, start_date, end_date, cycle_length) VALUES ($1, $2, $3, $4) RETURNING *',
        [userId, startDate, endDate, cycleLength]
    );
    return result.rows[0];
}

async function getUserCycles(userId) {
    const result = await pool.query('SELECT * FROM user_cycles WHERE user_id = $1 ORDER BY start_date DESC', [userId]);
    return result.rows;
}

module.exports = { insertCycle, getUserCycles };
