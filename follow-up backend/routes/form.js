// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.form.index)
router.get('/:id', ctrl.form.show)
router.post('/', ctrl.form.create)
router.put('/:id', ctrl.form.update)
router.delete('/:id', ctrl.form.destroy)

// exports
module.exports = router