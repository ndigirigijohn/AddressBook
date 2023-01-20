//Contact model
const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    secondName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone1: {
        type: String,
        required: true
    },
    phone2: {
        type: String,
    },
    company: {
        type: String,
    },
    user: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Contact', ContactSchema);