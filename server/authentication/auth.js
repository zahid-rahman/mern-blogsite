const JwtStrategy = require('passport-jwt').Strategy;
const ExactJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/UserModel')

const opts = {}
opts.jwtFromRequest = ExactJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, async (payload, done) => {
        User.findOne({
            email: payload.email,
        })
            .then(user => {
                if (!user) {
                    return done(null, false)
                }
                else {
                    return done(null, user)
                }
            })
            .catch(error => {
                console.log(error)
                return done(error)
            })
    }))

}