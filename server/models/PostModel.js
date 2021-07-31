const postSchema = require('../schemas/PostSchema')
const mongoose = require('mongoose')

const Post = new mongoose.model('Post',postSchema)

module.exports = Post;