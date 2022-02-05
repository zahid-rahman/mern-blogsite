const passport = require('passport');
const httpStatus = require('http-status');
const loggerMessage = require('./../utils/loggerMessage');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (error, user, info) => {
        if (error) {
            loggerMessage(error, 'error');
            loggerMessage(info, 'info');
            return next(error)
        }
        if (!user || user.userType !== 'blogger') {
            loggerMessage(info, 'error');
            return res.status(httpStatus.UNAUTHORIZED).json({
                error: "Authorization required !!"
            })
        }
        req.user = user
        return next()
    })(req, res, next)
}