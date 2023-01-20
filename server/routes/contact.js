//contact routes

const express = require('express');

const router = express.Router();

//import controllers
const { getContacts, 
    getContact,
     getContactsByUserId, 
     addContact, 
     updateContact,
      deleteContact } = require('../controllers/contact');


//get all contacts
router.get('/', getContacts);

//get single contact

router.get('/:id', getContact);

//get by user id

router.get('/user/:id', getContactsByUserId);

//add contact

router.post('/', addContact);

//update contact

router.put('/:id', updateContact);

//delete contact

router.delete('/:id', deleteContact);

module.exports = router;