const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// Protected routes
router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.status(200).json({ msg: 'Welcome Admin' });
});

module.exports = router;
