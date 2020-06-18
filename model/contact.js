const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    } ,
    phone : {
        type: String,
        required: true
    }

});

const Contacts = mongoose.model('Contacts', contactSchema);

module.exports = Contacts;

