const loggerMiddleware = require('./../middlewares/loggerMiddleware');

const loggerMessage = (message, level) => {
    return loggerMiddleware.log({
        message,
        level
    });
}

module.exports = loggerMessage;