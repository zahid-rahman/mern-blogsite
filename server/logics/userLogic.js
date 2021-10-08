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

const bloggerLogin = async (payload) => {
    const user = await User.findOne({ email: payload.email });
    if (user && user !== null && user.userType === 'blogger') {
        const isValidPassword = await bcrypt.compare(payload.password, user.password)
        if (!isValidPassword) {
            return Promise.reject('something went wrong')
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
        return Promise.reject('something went wrong')
    }
}

exports.bloggerLogin = bloggerLogin;


const findAllUser = async () => {
    const users = await User.find()
    return users;
}

exports.findAllUser = findAllUser;

const adminLogin = async (payload) => {
    const admin = await User.findOne({ email: payload.email });
    if (admin && admin !== null && admin.userType === 'admin') {
        const isValidPassword = await bcrypt.compare(payload.password, admin.password)
        if (!isValidPassword) {
            return Promise.reject('something went wrong')
        }
        else {
            const token = jwt.sign({
                _id: admin._id,
                email: admin.email,
                userType: admin.userType,
                username: admin.username
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            })
            return Promise.resolve(`Bearer ${token}`)
        }
    }
    else {
        return Promise.reject('something went wrong')
    }
}

exports.adminLogin = adminLogin;