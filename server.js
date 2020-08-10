const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const photoItems = require('./routes/api/photoItems');
const packItems = require('./routes/api/packItems');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Configuration
// ** Need to fix bug and hook up with config/keys.js **
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Database Error'));

//Use Routes
app.use('./routes/api/photoItems', photoItems);
app.use('./routes/api/packItems', packItems);

// Sets local port
const port = 5000;

// Starts server on local port
app.listen(port, () => console.log(`Server started on port ${port}`));



// GET from db and serve @ localhost:5000/api/photoInfo
app.get('/api/photoItems', (req, res) => {
    // Get from database but we will hardcode for now
    const photoInfo = [
        {id: '111', url: 'WindAndSea_Beach.jpg', prints: {print2x3: 20.00, print4x6: 26.00}},
        {id: '222', url: 'Canyonlands_MilkyWay.jpg', prints: {print5x7: 30.00, print10x14: 38.00}},
        {id: '333', url: 'Genie_Lamp_Rock.jpg', prints: {print2x3: 20.00, print4x6: 26.00}}
    ];

    res.json(photoInfo);
})

app.get('/api/packItems', (req, res) => {
    const packItems = [
        {
            id: '444',
            url: 'Glen_Pass_MilkyWay.jpg',
            size: '16x24',
            price: 28.00,
            quantity: 2
        },
        {
            id: '555',
            url: 'Fossile_Lake.jpg',
            size: '8x12',
            price: 16.00,
            quantity: 1
        }
    ];

    res.json(packItems);
})

