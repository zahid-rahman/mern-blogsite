const router = require('express').Router();
const User = require('../models/UserModel');
const httpStatus = require('http-status')
const signupValidation = require('./../validation/signupValidation')

router.post('/signup', async (req, res) => {

    const validation = signupValidation(req.body);

    if (validation.isValidation === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValidation === true) {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(httpStatus.CREATED).json({
                message: "New User created successfully"
            })

        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    }
})


router.post('/login', (req, res) => {
    res.json('under construction')
})

module.exports = router;