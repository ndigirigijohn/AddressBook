//user controllers

const User = require('../models/user');

module.exports = {
    //get all users
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.json({ message: err });
        }
    },
    //get single user
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.json({ message: err });
        }
    },
    //update user
    updateUser: async (req, res) => {
        try {
            const updatedUser = await User.updateOne(
                { _id: req.params.id },
                {
                    $set: {
                        firstName: req.body.firstName,
                        secondName: req.body.secondName,
                        email: req.body.email,
                        password: req.body.password
                    }
                }
            );
            res.json(updatedUser);
        } catch (err) {
            res.json({ message: err });
        }
    },
    //delete user
    deleteUser: async (req, res) => {
        try {
            const removedUser = await User.remove({ _id: req.params.id });
            res.json(removedUser);
        } catch (err) {
            res.json({ message: err });
        }
    },
    //sign up use bcrypt.js to hash password
    signup: async (req, res) => {
        //check if user exists
        const emailExists = await User.findOne({
            email: req.body.email
        });
        if (emailExists) {
            return res.status(400).send('Email already exists');
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //create new user
        const user = new User({
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            email: req.body.email,
            password: hashedPassword
        });
        try {
            const savedUser = await user.save();
            res.json(savedUser);
        }
        catch (err) {
            res.json({ message: err });
        }
    },
    //login
    login: async (req, res) => {
        //check if user exists
        const user = await User
            .findOne({
                email: req.body.email
            });
        if (!user) {
            return res.status(400).send('Email is wrong');
        }
        //check if password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) {
            return res.status(400).send('Password is wrong');
        }
        //send response as user
        res.send(user);

    },
    
    


}
