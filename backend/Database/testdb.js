import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const testDB = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Database connected! Current time:', res.rows[0].now);
  } catch (err) {
    console.error('❌ DB connection failed:', err.message);
  } finally {
    await pool.end();
  }
};

testDB();
