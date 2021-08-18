const router = require('express').Router();
const httpStatus = require('http-status')
const bloggerMiddleware = require('../middlewares/bloggerAuthMiddleware');
const Post = require('./../models/PostModel');
const User = require('./../models/UserModel')
const mongoose = require('mongoose');
const { cloudinary } = require('../utils/cloudinary');


router.post('/create', bloggerMiddleware, async (req, res) => {
    try {
        const fileStr = req.body.base64EncodedImage;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        req.body.imagePublicId = uploadResponse.public_id                   ;
        const newPost = new Post({
            ...req.body,
            user: req.user._id
        })

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