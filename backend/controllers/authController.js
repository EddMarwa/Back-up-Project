const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

const users = [
  { email: 'admin@greenmarket.com', password: '$2a$10$Xjr.lfsVQmGp9s5u91BwvK6LJK6O9f/t3MGdXhMbD5EjZu3FfaXqa', role: 'admin' }, // Admin
  { email: 'user@greenmarket.com', password: '$2a$10$6gU7Tb1.VY2uWz64p5v74uLBm64y1kqTsyVVeaWDEh.Ll5D32fMI6', role: 'user' }, // Normal User
];

app.use(express.json());

// Simulate user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find user by email
  const user = users.find(u => u.email === email);
  
  if (user && bcrypt.compareSync(password, user.password)) {
    // Generate JWT (optional)
    const token = jwt.sign({ email: user.email, role: user.role }, 'secretKey', { expiresIn: '1h' });
    res.json({ status: 'success', role: user.role, token });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
