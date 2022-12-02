const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token)
    return res.status(401).json({ msg: 'No token , Authentication Denied' });
  try {
    const decoded = jwt.verify(token, 'hashitouttoken');
    req.admin = decoded.admin;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
