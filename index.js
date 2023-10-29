const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 8000;

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 

// now form now we will connect mongo and store data init
mongoose.connect('mongodb://127.0.0.1:27017/studentsContacts')
const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    number:Number,
    table:String
})
const Student = mongoose.model('Student', studentSchema)

app.post('/contact', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(doc => {
            res.send(doc)
            console.log(doc)
        })
        .catch(err => console.log(err))
})




app.listen(port,()=>{
    console.log(`This application is running sucessfully on port ${port}`)
})