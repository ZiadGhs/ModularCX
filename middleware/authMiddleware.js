const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');
const secretKey = process.env.JWT_SECRET;

const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Malformed token.' });
  }

  const token = tokenParts[1];

  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }

    try {
      console.log(decoded);
      req.user = decoded.userId;
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  });
};

module.exports = authenticateJWT;
