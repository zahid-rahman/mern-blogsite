const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nid: {
        type: String
    },
    userType: {
        type: String,
        required: true,
        enum: ['admin', 'blogger']
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = userSchema