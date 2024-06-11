const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const secretKey = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Include userId in the response
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token, userId: user._id }); // Include userId in the response
  } catch (error) {
    res.status(500).json({ message: 'Failed to authenticate.' });
  }
};


exports.signup = async (req,res) =>{
  try {
    const { firstName, lastName, email, password, age } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ firstName, lastName, email, password, age });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

