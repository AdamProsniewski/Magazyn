const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    shiftStart: {
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('worker', WorkerSchema);