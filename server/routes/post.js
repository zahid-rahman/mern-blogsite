const router = require('express').Router();
const httpStatus = require('http-status')
const bloggerMiddleware = require('../middlewares/bloggerAuthMiddleware');
const Post = require('./../models/PostModel');
const User = require('./../models/UserModel')
const mongoose = require('mongoose');


router.post('/create', bloggerMiddleware, async (req, res) => {
    const newPost = new Post({
        ...req.body,
        user: req.user._id
    })

    try {
        const post = await newPost.save();
        User.updateOne({
            _id: req.user._id
        }, {
            $push: {
                posts: post._id
            }
        })

        res.status(httpStatus.OK).json({
            message: "Post created successfully"
        })
    }
    catch (error) {
        console.error(error);
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }
});

router.get('/find/:postId', bloggerMiddleware, async (req, res) => {
    const { postId } = req.params;
    const user = mongoose.Types.ObjectId(req.user._id)
    console.log(user)
    try {
        const post = await Post.findOne({
            _id: postId,
            user
        })

        res.status(httpStatus.OK).json(post)
    }
    catch (error) {
        console.error(error);
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }


})

router.get('/list', bloggerMiddleware, async (req, res) => {
    const user = mongoose.Types.ObjectId(req.user._id)
    try {
        const posts = await Post.find({
            user
        }).populate("user")

        res.status(httpStatus.OK).json(posts)
    }
    catch (error) {
        console.error(error);
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }
})

module.exports = router;