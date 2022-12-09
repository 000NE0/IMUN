const mongoose = require('mongoose')



const personSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    about: String,
    phone: Number,
    email: String,
    uid: Number
})

module.exports = mongoose.model('person', personSchema)


