const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')
const testingFunction = (req, res, next) => {
    console.log('testing server')
    next()
}

//  PATH = /api/v1/auth
router.post('/login', testingFunction, passport.authenticate('local'), testingFunction, ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)
// utility route - not for users
router.get('/verify', ctrl.auth.verify)

module.exports = router