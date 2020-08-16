const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    sizes: {
        type: Object,
        required: false
    },
    prices: {
        type: Object,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    rating: {
        type: Number,
        required: false
    }
});

module.exports = PhotoItem = mongoose.model('photoitems', ItemSchema);