const db = require('../models')

const index = (req, res) => {
    db.Form.find({}, (err, foundForm) => {
        if (err) console.log('Error in form#index:', err)
        
        if(!foundForm) return res.json({
            message: 'No Form found in database.'
        })

        res.status(200).json({ form: foundForm });
    })
}

const show = (req, res) => {
    db.Form.findById(req.params.id, (err, foundForm) => {
        if (err) console.log('Error in form#show:', err)
        
        if (!foundForm) return res.json({
            message: 'Form with provided ID not found.'
        })
        
        res.status(200).json({ form: foundForm })
    })
}

const create = (req, res) => {
    db.Form.create(req.body, (err, savedForm) => {
        if (err) console.log('Error in form#create:', err)

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
        if (err) console.log('Error in form#destroy:', err)
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