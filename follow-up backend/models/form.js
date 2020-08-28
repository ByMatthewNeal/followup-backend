const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    appdate: String,
    appliedThrough: String,
    followupdate: String,
    jobType: String,
    location: String,
    name: String,
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;