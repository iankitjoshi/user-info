const express = require('express')
const router = express.Router()

const contactController = require('../app/Controller/contactController')

router.post('/contacts', contactController.create)
router.get('/contacts', contactController.list)
router.get('/contacts/:id', contactController.show)
router.delete('/contacts/:id', contactController.destroy)
router.put('/contacts/:id', contactController.update)

module.exports = router