const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// An example protected route
router.get('/', auth, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
