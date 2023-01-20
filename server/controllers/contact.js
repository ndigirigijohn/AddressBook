//contacts controllers

const Contact = require('../models/Contact');

module.exports = {
    getContacts: async (req, res) => {
        try {
            const contacts = await Contact.find();
            res.json(contacts);
        } catch (err) {
            res.json({ message: err });
        }
    },

    getContact: async (req, res) => {
        try {
            const contact = await Contact.findById(req.params.id);
            res.json(contact);
        } catch (err) {
            res.json({ message: err });
        }
    },

    getContactsByUserId: async (req, res) => {
        try {
            const contacts = await Contact.find({ user: req.params.id });
            res.json(contacts);
        } catch (err) {
            res.json({ message: err });
        }
    },

    addContact: async (req, res) => {
        const contact = new Contact({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            email: req.body.email,
            phone1: req.body.phone1,
            phone2: req.body.phone2,
            company: req.body.company,
            user: req.body.user
        });

        try {
            const savedContact = await contact.save();
            res.json(savedContact);
        } catch (err) {
            res.json({ message: err });
        }
    },


    updateContact: async (req, res) => {
        try {
            const updatedContact = await Contact.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        firstName: req.body.firstName,
                        secondName: req.body.secondName,
                        email: req.body.email,
                        phone1: req.body.phone1,
                        phone2: req.body.phone2,
                        company: req.body.company,
                        user: req.body.user
                    }
                }
            );
            res.json(updatedContact);
        } catch (err) {
            res.json({ message: err });
        }
    },

    deleteContact: async (req, res) => {
        try {
            const removedContact = await Contact.remove({ _id: req.params.id });
            res.json(removedContact);
        } catch (err) {
            res.json({ message: err });
        }
    }

}
