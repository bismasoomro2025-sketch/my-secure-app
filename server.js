const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const app = express();
app.use(express.json());
app.use(helmet());
const users = [];
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).send('Invalid email address');
  }
  if (!password || password.length < 6) {
    return res.status(400).send('Password must be 6 characters');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.send('User registered successfully!');
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).send('User not found');
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).send('Wrong password');
  }
  const token = jwt.sign({ email: user.email }, 'my-secret-key');
  res.send({ token });
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
