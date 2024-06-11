const router = require("express").Router();
const authController = require('../../controllers/authController');

router.post('/register', authController.signup);
router.post('/login', authController.login);

// Protected route
router.get('/protected', (req, res) => {
  res.json({ message: 'You are authenticated' });
});

module.exports = router;
