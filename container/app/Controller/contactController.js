const Contact = require('../Model/Contact')

module.exports.create = (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.list = (req, res) => {
    Contact.find()
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Contact.findById(id)
        .then(contact => {
            if(contact){
                res.json(contact)
            }else{
                res.json('Contact is not exist')
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Contact.findByIdAndUpdate(id, body, {new : true, runValidators: true})
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(contact => {
            if(contact){
                res.json(contact)
            }else{
                res.json('Contact is not exist')
            }
        })
        .catch(err => {
            res.json(err)
        })
}