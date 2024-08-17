// const bcrypt = require('bcryptjs');
// const User = require('../models/userModel');
// const { generateToken } = require('../utils/jwtUtils');

// const register = async (userData) => {
//     const { username, email, password, role } = userData;

    
//     const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }]
//     });
//     if (existingUser) {
//         throw new Error('User already exists');
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//         username,
//         email,
//         password: hashedPassword,
//         role,
//         passwordHistory: [hashedPassword],
//     });

//     await newUser.save();
//     return generateToken(newUser);
// };

// const login = async (email, username, password) => {
//     const user = await User.findOne({ $or: [{ email: email }, { username: username }]});
//     if (!user) {
//         throw new Error('Invalid credentials');
//     }

//     const isMatch = await user.isValidPassword(password);
//     if (!isMatch) {
//         throw new Error('Invalid credentials');
//     }

//     return generateToken(user);
// };

// module.exports = {
//     register,
//     login,
// };
