const router = require('express').Router();
const bloggerMiddleware = require('../middlewares/bloggerAuthMiddleware');
const adminMiddleware = require('../middlewares/adminAuthMiddleware');
const postController = require('./../controllers/postController');

// CREATE POST API (BLOGGER)
router.post('/create', bloggerMiddleware, postController.createPost);

// FIND A SINGLE POST API (BY POSTID)
router.get('/find/:postId', bloggerMiddleware, postController.findPostById);

// FIND ALL POST API (BLOGGER)
router.get('/list', bloggerMiddleware, postController.findBloggerPosts);

// FIND ALL EXPOSED/PUBLIC POSTS
router.get('/listV2', postController.findActivePosts);

// TOTAL ACTIVE USER COUNT API
router.get('/activePostCount', adminMiddleware, postController.getActivePostCount);

// TOTAL INACTIVE USER COUNT API
router.get('/pendingPostCount', adminMiddleware, postController.getPendingPostCount);

module.exports = router;