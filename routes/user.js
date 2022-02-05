const router = require('express').Router();
const adminMiddleware = require('./../middlewares/adminAuthMiddleware');
const userController = require('./../controllers/userController');

// USER SIGNUP API
router.post('/signup', userController.bloggerSignup);

// USER/BLOGGER LOGIN API
router.post('/login', userController.bloggerLogin);

// ADMIN LOGIN API
router.post('/admin/login', userController.adminLogin);

// TOTAL ACTIVE USER COUNT API
router.get('/activeUserCount', adminMiddleware, userController.getActiveUserCount);

// USER LIST API FOR ADMIN
router.get('/list', adminMiddleware, userController.getUserListForAdmin);

// TOTAL INACTIVE USER COUNT API
router.get('/inactiveUserCount', adminMiddleware, userController.getInactiveUserCount);

module.exports = router;