const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    imagePublicId: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = postSchema
