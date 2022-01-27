const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { append } = require('express/lib/response');

//routes

//pobieranie wszystkich userów

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({message:err});
    }
});

//Rejestracja

router.post('/register', async (req, res) => {
    try {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(409).json({ message: "This user already exists" })
            }
        });
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hashedPassword
        }).save().then(user => {
            console.log(user);
            res.status(201).json({message: "Dodano usera"})
        });

    } catch (err) {
        res.status(500).json({message: "Access denied"});
    }
});

//logogwanie

router.post('/login', (req, res) => {
    try {
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                return res.status(409).json({ message: "User doesn't exist" })
            }
            if (bcrypt.compare(req.body.password, user.password)) {
                res.json({message: "Logged in!"})
            } else {
                res.json({message: "Wrong password"})
            }
        });
    } catch (err) {
        res.status(500).json({message: "Access denied"});
    }
});
 
//usuwanie

router.delete('/:userId', (req, res,) => {
    User.findByIdAndRemove(req.params.userId).then(user => {
        res.status(200).json({message: "User deleted"});
    }).catch(err => {console.log(err);});
});

module.exports = router;