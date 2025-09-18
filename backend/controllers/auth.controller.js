import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../Database/db.js';
import { v4 as uuidv4 } from 'uuid';


export const test = (req, res) => {
  res.send('🚀 Server is running with Postgres + Express');
}

// export const ConnectDB= async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json({ dbTime: result.rows[0].now });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: 'DB connection failed' });
//   }
// }

export const ConnectDB = async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ dbTime: result.rows[0].now });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'DB connection failed' });
  }
};



export const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

  const client = await pool.connect();
  try {
   
    const existing = await client.query(
      'SELECT * FROM users WHERE username=$1',
      [username]
    );
    if (existing.rows.length)
      return res.status(400).json({ error: 'User already exists' });

    const password_hash = await bcrypt.hash(password, 10);
    const userId = uuidv4();

    await client.query(
      'INSERT INTO users (user_id, username, password_hash) VALUES ($1,$2,$3)',
      [userId, username, password_hash]
    );

    const token = jwt.sign(
      { user_id: userId, username },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '7d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, 
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    
    return res.status(201).json({ success: true, message: 'Signup successful' ,token:token});
  } catch (e) {
    console.error('Signup error:', e);
    res.status(500).json({ error: 'Signup failed' });
  } finally {
    client.release();
  }
};


export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'Missing fields' });

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username=$1',
      [username]
    );
    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { user_id: user.user_id, username: user.username },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '7d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: 'Login successful', token : token});
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ error: 'Login failed' });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  return res.json({ success: true, message: "Logged out successfully" });
};

export const profile = async (req, res) => {
  try {
    const userId = req.user.user_id;
    console.log('req.user:', req.user);

    const result = await pool.query(
      'SELECT user_id, username, created_at FROM users WHERE user_id=$1',
      [userId]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ error: 'User not found' });

    return res.status(200).json({ profile: result.rows[0], success: true });
  } catch (e) {
    console.error('Profile fetch error:', e);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

