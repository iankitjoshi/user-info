const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/new_project', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => {
            console.log('Connected to db')
        })
        .catch((err) => {
            console.log('this is error', err)
        })
}


module.exports = setupDB