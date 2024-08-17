const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

// Define the Mongoose schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'customer', 'guest', 'seller'], default: 'guest' },
    passwordHistory: [{ type: String }],
    isTwoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: { type: String, default: null },
}, { timestamps: true });

// Add method to check password validity
userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Create a Joi validation schema
const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('admin', 'customer', 'guest', 'seller').default('guest'),
    passwordHistory: Joi.array().items(Joi.string()),
    isTwoFactorEnabled: Joi.boolean().default(false),
    twoFactorSecret: Joi.string().allow(null, '')
});

// Function to validate user data
const validateUser = (userData) => {
    return userValidationSchema.validate(userData, { abortEarly: false });
};

userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
// Create the Mongoose model
const User = mongoose.model('User', userSchema);

// Export the model and validation function
module.exports = {
    User,
    validateUser
};
