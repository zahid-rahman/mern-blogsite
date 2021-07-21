const User = require('../models/UserModel');
const httpStatus = require('http-status');

const userSignup = async (payload, response) => {
    try {
        const newUser = new User(payload);
        await newUser.save();
        return response.status(httpStatus.CREATED).json({
            message: "New User created successfully"
        })

    } catch (error) {
        return response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)

    }
}

exports.userSignup = userSignup;