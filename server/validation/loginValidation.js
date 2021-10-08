const validator = require('validator');

const loginValidation = (userRequest) => {
    const error = {};

    if (!validator.isEmail(userRequest.email)) {
        error.email = "provide a valid email"
    }
    if (validator.isEmpty(userRequest.password)) {
        error.password = "please provide a password"
    }

    const isValid = Object.keys(error).length === 0 ? true : false

    return {
        error,
        isValid
    }
}

module.exports = loginValidation;