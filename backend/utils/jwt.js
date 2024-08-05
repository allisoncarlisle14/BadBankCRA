const jwt = require('jsonwebtoken');
const SECRET_KEY = 'j23190ut8gwehianijq2390utw4eg8riuhsjoa9u08ihu'; // Replace with your secret key

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };