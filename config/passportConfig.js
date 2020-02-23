const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt; 
const User = require('../models/users');
// const mongoose = require('mongoose');
// const Use = mongoose.model("users");
const secret = require('./keys').secret

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:  secret,
}
const newJwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
        .then (user => {
            if(user) {
                return done(null, user);
            };
            return done(null, false);
        })
        .catch (err => console.log(err));
})

module.exports = passport => {
  passport.use(newJwtStrategy);
}