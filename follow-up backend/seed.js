const db = require('./models')
const data = require('./formData.json')

db.Form.deleteMany({}, (err, deletedForm) => {
    db.Form.create(data.form, (err, seededForm) => {
        if (err) console.log(err);
        
        console.log(data.form.length, 'form created successfully')
        
        process.exit()
    })
})