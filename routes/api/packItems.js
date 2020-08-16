const express = require('express');
const router = express.Router();

//Pack Item Model
const PackItem = require('../../models/packItem');

// @route   GET api/packItems
// @desc    Get all pack items from server
// @access  Public
router.get('/', (req, res) => {
    console.log('getting PackItems...');
    PackItem.find()
    .then(items => res.json(items))
});

// @route   POST api/packItems
// @desc    Add new pack item to server
// @access  Public
router.post('/', (req, res) => {
    const newPackItem = new PackItem({
        _id: req.body._id,
        url: req.body.url,
        size: req.body.size,
        price: req.body.price,
        quantity: req.body.quantity
    })
    console.log("testing post");
    newPackItem.save().then(packItem => res.json(packItem));
});

// @route   DELETE api/packItems/:id
// @desc    Delete pack item from server
// @access  Public
router.delete('/:id', (req, res) => {
    console.log('testing delete');
    PackItem.findById(req.params.id) // *** check if id or _id
        .then(item => item.remove().then(() => restart.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;