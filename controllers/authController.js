const { register, login } = require('../services/authService');
const axios = require('axios');

const userServiceUrl = process.env.USER_SERVICE_URL;

const  validateUser = async(username, password) => {
    try {
        const response = await axios.post(`${userServiceUrl}/api/user/validate`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error('User validation failed');
    }
}

// const registerUser = async (req, res) => {
//     try {
//         const token = await register(req.body);
//         res.status(201).json({ token });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };

// const loginUser = async (req, res) => {
//     try {
//         const token = await login(req.body.email, req.body.username, req.body.password);
//         res.status(200).json({ token });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };

module.exports = {
    // registerUser,
    // loginUser,
    validateUser,
};
