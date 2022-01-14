const userSchema = require('../schemas/UserSchema')
const mongoose = require('mongoose')

const User = new mongoose.model('User',userSchema)

module.exports = User;