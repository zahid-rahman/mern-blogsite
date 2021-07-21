const router = require('express').Router();
const userLogic = require('./../logics/userLogic')
const signupValidation = require('./../validation/signupValidation')
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {

    const validation = signupValidation(req.body);
    if (validation.isValidation === false) {
        return res.status(httpStatus.BAD_REQUEST).json(validation.error)
    }
    else if (validation.isValidation === true) {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        req.body.password = hashedPassword;
        return await userLogic.userSignup(req.body,res)
    }
})

router.post('/login', (req, res) => {
    res.json('under construction')
})

module.exports = router;