const User = require('../models/UserModel');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSignup = async (payload) => {
    const newUser = new User(payload);
    const data = await newUser.save();
    return data
}

exports.userSignup = userSignup;

const userLogin = async (payload) => {
    const user = await User.findOne({ email: payload.email });
    if (user && user !== null) {
        const isValidPassword = await bcrypt.compare(payload.password, user.password)
        if (!isValidPassword) {
            return Promise.reject('')
        }
        else {
            const token = jwt.sign({
                _id: user._id,
                email: user.email,
                userType: user.userType,
                username: user.username
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            })

            return Promise.resolve(`Bearer ${token}`)
        }
    }
    else {
        return Promise.reject('')
    }
}

exports.userLogin = userLogin;


const findAllUser = async () => {
    const users = await User.find()
    return users;
}

exports.findAllUser = findAllUser;