const router = require('express').Router();
const userLogic = require('./../logics/userLogic')
const signupValidation = require('./../validation/signupValidation');
const loginValidation = require('./../validation/loginValidation');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');

const bloggerMiddleware = require('./../middlewares/bloggerAuthMiddleware')

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
            console.error(error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
})

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
})

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
})

module.exports = router;