const express = require('express');
const router = express.Router();

//Photo Item Model
const PhotoItem = require('../../models/photoItem');
const { restart } = require('nodemon');

// @route   GET api/photoItems
// @desc    Get all photo items from database
// @access  Public
router.get('/', (req, res) => {
    PhotoItem.find()
    // .sort({ rating: 1 })
    .then(items => res.json(items))
});

module.exports = router;