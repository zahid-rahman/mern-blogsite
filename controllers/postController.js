const httpStatus = require('http-status')
const bloggerMiddleware = require('../middlewares/bloggerAuthMiddleware');
const Post = require('./../models/PostModel');
const User = require('./../models/UserModel');
const mongoose = require('mongoose');
const { cloudinary } = require('../utils/cloudinary');
const loggerMessage = require('./../utils/loggerMessage');

const createPost = async (req, res) => {
    try {
        const fileStr = req.body.base64EncodedImage;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: process.env.UPLOAD_PRESET,
        });
        req.body.imagePublicId = uploadResponse.public_id;;
        const newPost = new Post({
            ...req.body,
            user: req.user._id
        });

        const post = await newPost.save();
        User.updateOne({
            _id: req.user._id
        }, {
            $push: {
                posts: post._id
            }
        });

        res.status(httpStatus.OK).json({
            message: "Post created successfully",
        });
    }
    catch (error) {
        loggerMessage(error, 'error');
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        });
    }
}

const findPostById = async (req, res) => {
    const { postId } = req.params;
    const user = mongoose.Types.ObjectId(req.user._id)
    try {
        const post = await Post.findOne({
            _id: postId,
            user
        }).populate('user')

        res.status(httpStatus.OK).json(post)
    }
    catch (error) {
        loggerMessage(error, 'error');
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        });
    }
}

const findBloggerPosts = async (req, res) => {
    const user = mongoose.Types.ObjectId(req.user._id)
    try {
        const posts = await Post.find({
            user
        }).populate("user")
            .sort({ date: -1 })

        res.status(httpStatus.OK).json(posts)
    }
    catch (error) {
        loggerMessage(error, 'error');
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }
}

const findActivePosts = async (req, res) => {
    try {
        const postsForPublicSite = await Post.find({
            status: "active"
        })
            .populate('user');

        res.status(httpStatus.OK).json(postsForPublicSite)
    }
    catch (error) {
        loggerMessage(error, 'error');
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }
}

const getActivePostCount = async (req, res) => {
    try {
        const response = await Post.find({
            status: 'active',
        });

        const activePostCount = response.length;
        loggerMessage({ response, count: activePostCount }, 'debug');
        res.status(httpStatus.OK).json(activePostCount);
    }
    catch (error) {
        loggerMessage({ errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR }, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
}

const getPendingPostCount = async (req, res) => {
    try {
        const response = await Post.find({
            status: 'pending',
        });
        const pendingPostCount = response.length;
        loggerMessage({ response, count: pendingPostCount }, 'debug');
        res.status(httpStatus.OK).json(pendingPostCount);
    }
    catch (error) {
        loggerMessage({ errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR }, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
}

const getBloggerPostsForAdmin = async (req, res) => {
    try {
        const result = await Post.find()
        .populate('user');;
        res.status(httpStatus.OK).json(result)
    }
    catch (error) {
        loggerMessage({ errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR }, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "Authentication failed !!",
            status: httpStatus.INTERNAL_SERVER_ERROR,
            errorMessage: error.message
        })
    }
}

module.exports = {
    createPost,
    findPostById,
    findBloggerPosts,
    findActivePosts,
    getActivePostCount,
    getPendingPostCount,
    getBloggerPostsForAdmin
}