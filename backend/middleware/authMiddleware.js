const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import your User model

const protect = async (req, res, next) => {
  let token;

  // Check for the token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Extract the token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT);

      // Find user by ID from the token payload
      req.user = await User.findById(decoded.id).select('-password'); // Add user to the request

      console.log('Decoded token:', decoded);
console.log('User attached to request:', req.user);

      next(); // Proceed to the next middleware or controller
    } catch (error) {
      console.error('Token verification failed:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

module.exports = protect;
