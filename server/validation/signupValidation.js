const validator = require('validator');

const signupValidation = (userRequest) => {
    console.log(userRequest);
    const error = {};

    if (validator.isEmpty(userRequest.username)) {
        error.nid = "provide a user name"
    }
    if (!validator.isEmail(userRequest.email)) {
        error.email = "provide a valid email"
    }
    if (validator.isEmpty(userRequest.nid)) {
        error.nid = "provide a nid number"
    }
    if (validator.isEmpty(userRequest.status)) {
        error.status = "Please provide a status"
    }
    if (validator.isEmpty(userRequest.userType)) {
        error.userType = "couldn't set any userType"
    }
    if (validator.isEmpty(userRequest.password)) {
        error.password = "please provide a password"
    }
    if (!validator.isLength(userRequest.password, { min: 8 })) {
        error.password = "use maximum 8 length of your password"
    }
    if (!validator.equals(userRequest.confirmPassword, userRequest.password)) {
        error.confirmPassword = "password doesn't matched"
    }

    const isValidation = Object.keys(error).length === 0 ? true : false

    return {
        error,
        isValidation
    }
}

module.exports = signupValidation