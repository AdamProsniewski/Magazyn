const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    itemsIds: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: false
    },
    ownerId: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('order', OrderSchema)