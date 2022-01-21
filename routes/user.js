const router = require('express').Router();
const userLogic = require('./../logics/userLogic')
const signupValidation = require('./../validation/signupValidation');
const loginValidation = require('./../validation/loginValidation');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const bloggerMiddleware = require('./../middlewares/bloggerAuthMiddleware');
const loggerMiddleware = require('./../middlewares/loggerMiddleware');
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
            console.error(error);
            loggerMiddleware.log({
                message: error,
                level: 'error'
            });
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
})

// USER LOGIN API
router.post('/login', async (req, res) => {

    const validation = loginValidation(req.body);
    console.log(validation.isValid)
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.bloggerLogin(req.body)
            res.status(httpStatus.OK).json({
                "accessToken": token,
                "message": "Login successfull"
            })
        }
        catch (error) {
            console.error(error);
            res.status(httpStatus.UNAUTHORIZED).json({
                message: "Authentication failed !!"
            })
        }
    }
});

// STILL CONFUSED ABOUT THIS API (NEED TO CHECK)
router.get('/list', bloggerMiddleware, async (req, res) => {
    try {
        const users = await userLogic.findAllUser();
        res.status(httpStatus.OK).json(users)
    }
    catch (error) {
        console.error(error);
        res.status(httpStatus.UNAUTHORIZED).json({
            message: "Authentication failed !!"
        })
    }
});


// ADMIN LOGIN API
router.post('/admin/login', async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.adminLogin(req.body)
            res.status(httpStatus.OK).json({
                "accessToken": token,
                "message": "Admin Login successfull"
            })
        }
        catch (error) {
            console.error(error);
            res.status(httpStatus.UNAUTHORIZED).json({
                message: "Authentication failed !!"
            })
        }
    }
});


// TOTAL ACTIVE USER COUNT API
router.get('/activeUserCount', async (req, res) => {
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
router.get('/inactiveUserCount', async (req, res) => {
    try {
        const inactiveUser = await userLogic.inactiveUserCount();
        loggerMessage(inactiveUser, 'debug');
        res.status(httpStatus.OK).json(inactiveUser.count);
    }
    catch (error) {
        loggerMessage({errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR});
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
})

module.exports = router;