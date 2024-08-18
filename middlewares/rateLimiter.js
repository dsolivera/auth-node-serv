const rateLimit = require('express-rate-limit');

class RateLimiters {
    
  static generateLimiter(windowMs, max, errorMessage) {
    return rateLimit({
      windowMs: windowMs,
      max: max,
      message: {
        status: 'error',
        message: errorMessage || 'Too many requests, please try again later.',
        retryAfter: Math.ceil(windowMs / 1000 / 60), // minutes
      },
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });
  }

  static generalLimiter = this.generateLimiter(
    15 * 60 * 1000, 
    100, 
    'Rate limit exceeded. Please try again in a few minutes.'
  );

  static loginLimiter = this.generateLimiter(
    15 * 60 * 1000, 
    5, 
    'Too many login attempts. Please try again in 15 minutes.'
  );

  static signupLimiter = this.generateLimiter(
    60 * 60 * 1000, 
    3, 
    'Account creation rate limit reached. Please try again in an hour.'
  );

  static passwordResetLimiter = this.generateLimiter(
    60 * 60 * 1000, 
    3, 
    'Password reset limit reached. Please try again in an hour.'
  );

  static profileUpdateLimiter = this.generateLimiter(
    60 * 60 * 1000, 
    10, 
    'Profile update limit reached. Please try again later.'
  );

  static addressOperationLimiter = this.generateLimiter(
    60 * 60 * 1000, 
    20, 
    'Address operation limit reached. Please try again in an hour.'
  );

  static twoFALimiter = this.generateLimiter(
    60 * 60 * 1000, 
    5, 
    'Two-factor authentication operation limit reached. Please try again in an hour.'
  );
}

module.exports = RateLimiters;