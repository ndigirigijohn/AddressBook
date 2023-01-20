//user route
const express = require('express');

const router = express.Router();

//import controllers
const { getUsers, getUser, updateUser, deleteUser, login, signup } = require('../controllers/user');

//get all users

router.get('/', getUsers);

//get single user

router.get('/:id', getUser);

//update user

router.put('/:id', updateUser);

//delete user

router.delete('/:id', deleteUser);

//login

router.post('/login', login);

//signup

router.post('/signup', signup);

module.exports = router;