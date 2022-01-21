const winston = require('winston');

let alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.label({
        label:'[LOGGER]'
    }),
    winston.format.timestamp({
        format:"YY-MM-DD HH:MM:SS"
    }),
    winston.format.printf(
        info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
    )
);

const logConfiguration = {
    level: "debug",
    transports: [
        new (winston.transports.Console)({
            format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
        })
    ],
};

winston.addColors({
    info: 'bold blue', // fontStyle color
    warn: 'italic yellow',
    error: 'bold red',
    debug: 'green'});

const logger = winston.createLogger(logConfiguration);

module.exports = logger;