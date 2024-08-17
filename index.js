const authMiddleware = require('./middlewares/authMiddleware');
const rateLimiter = require('./middlewares/rateLimiter');
const roleMiddleware = require('./middlewares/roleMiddleware');

module.exports = {
  authMiddleware,
  rateLimiter,
  roleMiddleware
};
