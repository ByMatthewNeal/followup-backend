const db = require('../models')

const index = (req, res) => {
    console.log('get route', req.user)
    db.Form.find({user: req.user._id}, (err, foundForms) => {
        if (err) console.log('Error in forms#index:', err)
        console.log('found forms', foundForms)
        if(!foundForms) return res.json({
            message: 'No Forms found in database.'
        })

        res.status(200).json({ forms: foundForms });
    })
}

const show = (req, res) => {
    db.Form.findById(req.params.id, (err, foundForm) => {
        if (err) console.log('Error in forms#show:', err)
        
        if (!foundForm) return res.json({
            message: 'Form with provided ID not found.'
        })
        
        res.status(200).json({ form: foundForm })
    })
}

const create = (req, res) => {
    console.log('post route', req.body)
    req.body.user = req.user._id
    db.Form.create(req.body, (err, savedForm) => {
        if (err) console.log('Error in forms#create:', err)
        
        // Validations and error handling here

        res.status(200).json({ form: savedForm })
    })
}

const update = (req, res) => {
    const options = { new: true }
    db.Form.findByIdAndUpdate(req.params.id, req.body, options, (err, updatedForm) => {
        if (err) console.log('Error in form#update:', err)
        if (!updatedForm) return res.json({
            message: "No form with that ID found."
        })

        // Validations and error handling here

        res.status(200).json({ form: updatedForm })
    })
}

const destroy = (req, res) => {
    db.Form.findByIdAndDelete(req.params.id, (err, deletedForm) => {
        if (err) console.log('Error in forms#destroy:', err)
        if (!deletedForm) return res.json({
            message: "No form with that ID found."
        })

        res.status(200).json({ form: deletedForm })
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}