const db = require('./models')
const data = require('./formData.json')

db.Form.deleteMany({}, (err, deletedForms) => {
    db.Form.create(data.forms, (err, seededForms) => {
        if (err) console.log(err);
        
        console.log(data.forms.length, 'forms created successfully')
        
        process.exit()
    })
})