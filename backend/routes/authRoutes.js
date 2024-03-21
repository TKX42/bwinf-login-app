const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');

const router = express.Router();
JWT_SECRET = "mySuperSecretKey"

// Registration route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const database = req.app.locals.database;
  const usersCollection = database.collection('users');

  try {
    // Check if email already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).send('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const database = req.app.locals.database;
  const usersCollection = database.collection('users');

  try {
    const user = await usersCollection.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send('Invalid email or password');
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
