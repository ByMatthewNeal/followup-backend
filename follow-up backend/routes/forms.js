// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.get('/', ctrl.forms.index)
router.get('/:id', ctrl.forms.show)
router.post('/', ctrl.forms.create)
router.put('/:id', ctrl.forms.update)
router.delete('/:id', ctrl.forms.destroy)

// exports
module.exports = router