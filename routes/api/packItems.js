const express = require('express');
const router = express.Router();

//Pack Item Model
const PackItem = require('../../models/packItem');

// @route   GET api/packItems
// @desc    Get all pack items from database
// @access  Public
router.get('/', (req, res) => {
    console.log('getting PackItems...');
    PackItem.find()
    .then(items => res.json(items))
});

module.exports = router;