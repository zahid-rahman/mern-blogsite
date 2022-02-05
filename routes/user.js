const router = require('express').Router();
const userLogic = require('./../logics/userLogic')
const signupValidation = require('./../validation/signupValidation');
const loginValidation = require('./../validation/loginValidation');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const bloggerMiddleware = require('./../middlewares/bloggerAuthMiddleware');
const adminMiddleware = require('./../middlewares/adminAuthMiddleware');
const loggerMessage = require('./../utils/loggerMessage');

// USER SIGNUP API
router.post('/signup', async (req, res) => {

    const validation = signupValidation(req.body);

    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error);
    }
    else if (validation.isValid === true) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashedPassword;

        try {
            await userLogic.userSignup(req.body)
            return res.status(httpStatus.OK).json({
                message: "New user created successfully"
            })
        }
        catch (error) {
            loggerMessage(error, 'error')
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
})

// USER LOGIN API
router.post('/login', async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.bloggerLogin(req.body);
            const tokenOnly = token.slice(7, -1);
            res.status(httpStatus.OK).json({
                "message": "Login successfull",
                "accessTokenWithBearer": token,
                "tokenOnly": tokenOnly
            });
        }
        catch (error) {
            loggerMessage(error, 'error');
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: "Authentication failed !!",
                status: httpStatus.INTERNAL_SERVER_ERROR,
                errorMessage: error.message
            });
        }
    }
});

// USER LIST API FOR ADMIN
router.get('/list', adminMiddleware, async (req, res) => {
    try {
        const users = await userLogic.findAllUser();
        res.status(httpStatus.OK).json(users);
    }
    catch (error) {
        loggerMessage(error, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong"
        });
    }
});


// ADMIN LOGIN API
router.post('/admin/login', async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error);
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.adminLogin(req.body);
            const tokenOnly = token.slice(7, -1);
            res.status(httpStatus.OK).json({
                "message": "Login successfull",
                "accessTokenWithBearer": token,
                "tokenOnly": tokenOnly
            });
        }
        catch (error) {
            loggerMessage(error, 'error');
            res.status(httpStatus.UNAUTHORIZED).json({
                message: "Authentication failed !!"
            });
        }
    }
});


// TOTAL ACTIVE USER COUNT API
router.get('/activeUserCount', adminMiddleware, async (req, res) => {
    try {
        const activeUser = await userLogic.activeUserCount();
        loggerMessage(activeUser, 'debug');
        res.status(httpStatus.OK).json(activeUser.count);
    }
    catch (error) {
        loggerMessage({errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR}, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
});

// TOTAL INACTIVE USER COUNT API
router.get('/inactiveUserCount', adminMiddleware, async (req, res) => {
    try {
        const inactiveUser = await userLogic.inactiveUserCount();
        loggerMessage(inactiveUser, 'debug');
        res.status(httpStatus.OK).json(inactiveUser.count);
    }
    catch (error) {
        loggerMessage({errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR});
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
});

module.exports = router;