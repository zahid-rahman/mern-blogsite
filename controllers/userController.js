const userLogic = require('./../logics/userLogic')
const signupValidation = require('./../validation/signupValidation');
const loginValidation = require('./../validation/loginValidation');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const loggerMessage = require('./../utils/loggerMessage');

const bloggerSignup = async (req, res) => {

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
}

const getUserListForAdmin = async (req, res) => {
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
}

const bloggerLogin = async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.bloggerLogin(req.body);
            const tokenOnly = token.split(" ");
            res.status(httpStatus.OK).json({
                "message": "Login successfull",
                "accessTokenWithBearer": token,
                "tokenOnly": tokenOnly[1]
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
}

const adminLogin = async (req, res) => {
    const validation = loginValidation(req.body);
    if (validation.isValid === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error);
    }
    else if (validation.isValid === true) {
        try {
            const token = await userLogic.adminLogin(req.body);
            const tokenOnly = token.split(" ");
            res.status(httpStatus.OK).json({
                "message": "Login successfull",
                "accessTokenWithBearer": token,
                "tokenOnly": tokenOnly[1]
            });
        }
        catch (error) {
            loggerMessage(error, 'error');
            res.status(httpStatus.UNAUTHORIZED).json({
                message: "Authentication failed !!"
            });
        }
    }
}

const getActiveUserCount = async (req, res) => {
    try {
        const activeUser = await userLogic.activeUserCount();
        loggerMessage(activeUser, 'debug');
        res.status(httpStatus.OK).json(activeUser.count);
    }
    catch (error) {
        loggerMessage({errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR}, 'error');
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
}

const getInactiveUserCount = async (req, res) => {
    try {
        const inactiveUser = await userLogic.inactiveUserCount();
        loggerMessage(inactiveUser, 'debug');
        res.status(httpStatus.OK).json(inactiveUser.count);
    }
    catch (error) {
        loggerMessage({errorMessage: error, statusCode: httpStatus.INTERNAL_SERVER_ERROR});
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
}

module.exports = {
    bloggerSignup,
    getUserListForAdmin,
    adminLogin,
    getActiveUserCount,
    bloggerLogin,
    getInactiveUserCount
}