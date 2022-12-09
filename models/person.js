const mongoose = require('mongoose')



const personSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    description: String,
    phone: Number,
    email: String
})

const person = mongoose.model('person', personSchema)


module.exports.person = 