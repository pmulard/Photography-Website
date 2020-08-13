const express = require('express');
const router = express.Router();

//Pack Item Model
const PackItems = require('../../models/packItem');

// @route   GET api/packItems
// @desc    Get all pack items from database
// @access  Public
router.get('/', (req, res) => {
    console.log('getting PackItems...');
    PackItems.find()
    .then(items => res.json(items))
});

module.exports = router;