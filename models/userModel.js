const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: {
        type: String,
        required: true,
        minLength: 6,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)