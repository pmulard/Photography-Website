const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('packItem', ItemSchema);