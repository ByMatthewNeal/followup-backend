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
    username: String,
})

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;