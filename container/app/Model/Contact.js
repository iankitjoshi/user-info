const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        minLength : 10,
        maxLength : 10
    },
    message : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact