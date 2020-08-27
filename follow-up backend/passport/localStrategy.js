const User = require('../models/user')
const localStrategy = require('passport-local').Strategy

const strategy = new localStrategy(
    // which field in the DB is our 'username'
    { usernameField: 'email' },
    // callback function that verifies the user
    function(email, password, done) {
        // find a user through the unique property - email
        User.findOne({ email: email }, (err, foundUser) => {
            console.log('error', err)
            console.log(foundUser)
            // error handling
            if (err) return done(err)
            // no user is found
            if (!foundUser) return done(null, false, { message: 'Invalid Credentials' })
            // user is found but password doesn't match
            if (!foundUser.checkPassword(password)) return done(null, false, { message: 'Invalid Credentials'})
            // return the user object
            return done(null, foundUser)
        })
    }
)

module.exports = strategy