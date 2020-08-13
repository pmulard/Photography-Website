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

// @route   POST api/photoItems
// @desc    Add new photo item to database
// @access  Public
router.post('/', (req, res) => {
    const newPhotoItem = new PhotoItem({
        name: req.body.name,
        url: req.body.url,
        location: req.body.location,
        sizes: req.body.sizes,
        prices: req.body.prices,
        tags: req.body.tags,
        rating: req.body.rating
    })

    newPhotoItem.save().then(photoItem => res.json(photoItem));
});

// @route   DELETE api/photoItems/:id
// @desc    Delete photo item from database
// @access  Public
router.delete('/:url', (req, res) => {
    PhotoItem.findById(req.params.id)
        .then(item => item.remove().then(() => restart.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;