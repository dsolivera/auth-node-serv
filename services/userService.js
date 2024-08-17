const User = require('../models/userModel');

const getUserById = async (userId) => {
    return await User.findById(userId);
};

const updateUserRole = async (userId, role) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    user.role = role;
    await user.save();
    return user;
};

module.exports = {
    getUserById,
    updateUserRole,
};
