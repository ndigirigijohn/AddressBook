//import connection
const connection = require('./connection');

//express router
const express = require('express');
const router = express.Router();

//get all contacts
router.get('/contacts', (req, res) => {
  
    connection.query('CALL get_all_contacts()', (err, results) => {

        if (err) throw err;
        res.json(results[0]);
    });
});

//add contact

router.post('/contacts', (req, res) => {
    console.log(req.body)
    const {firstName, secondName, email,company, phone1, phone2} = req.body;
    connection.query("CALL insert_contact(?,?,?,?,?,?)",[firstName, secondName, phone1, phone2, email, company], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Contact inserted successfully");
        }
    });
});

//update contact
router.put('/contacts/:id', (req, res) => {
    const {firstName, secondName, email,company, phone1, phone2} = req.body;
    connection.query("CALL update_contact(?,?,?,?,?,?,?)",[req.params.id, firstName, secondName, phone1, phone2, email, company], (err, results) => {
        if (err) {
            res.status(500).send(err + " " + req.params.id);
        } else {
            res.status(200).send("Contact updated successfully");
        }
});
});

//get single contact
router.get('/contacts/:id', (req, res) => {
    connection.query('CALL get_contact_by_id(?)', [req.params.id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });

});

//delete contact
router.delete('/contacts/:id', (req, res) => {
    connection.query('CALL delete_contact(?)', [req.params.id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//search
router.get('/contacts/search/:search', (req, res) => {
    connection.query('CALL search_contacts(?)', [req.params.search], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//export router
module.exports = router;

