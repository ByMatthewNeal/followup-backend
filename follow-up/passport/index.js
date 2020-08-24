const passport = require('passport')
const localStrategy = require('./localStrategy')
const User = require('../models/user')

// is called on login, this function saves the logged in user ID to a session through req.session
passport.serializeUser((user, done) => {
    console.log('passport/index.js: serializeUser function is called')
    console.log(user)
    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    console.log('passport/index.js: deserializeUser function is called');
    
    // look for the user by their ID, return a user object containing only their email
    User.findById(id, 'email', (err, user) => {
        if (err) return done(err, null)
        console.log(user)
        done(null, user)
    })
})

passport.use(localStrategy)

module.exports = passport