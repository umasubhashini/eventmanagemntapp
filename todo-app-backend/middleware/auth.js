// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Get token from the request headers
  const token = req.header('x-auth-token');

  // If no token is provided, return a 401 Unauthorized response
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token using JWT
    const decoded = jwt.verify(token, 'your_jwt_secret');
    
    // Add the decoded user to the request object
    req.user = decoded.user;
    
    // Call the next middleware or route handler
    next();
  } catch (err) {
    // If token verification fails, return a 401 Unauthorized response
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
