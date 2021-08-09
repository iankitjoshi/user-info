const express = require('express')
const setupDB = require('./container/config/database')
const router = require('./container/config/route')
const cors = require('cors')
const path = require('path')

const app = express()
setupDB()

const port = 3002

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, './', 'client', 'build')));


app.get('/', (req, res) => {
    res.json('Welcome to Project')
})

app.use('/api', router)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './', 'client', 'build', 'index.html'));
  });


app.listen(port,() => {
    console.log('server in listning on port',port)
})