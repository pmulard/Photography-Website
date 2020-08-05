const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Configuration
const db = 'mongodb://localhost:27017/photography_website';

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Database Error'));

// Sets local port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



app.get('/api/photoInfo', (req, res) => {
    // Get from database but we will hardcode for now
    const photoInfo = [
        {id: 'WindAndSea Beach', fileName: 'WindAndSea_Beach.jpg', prints: {print2x3: 20.00, print4x6: 26.00}},
        {id: 'Canyonlands MilkyWay', fileName: 'Canyonlands_MilkyWay.jpg', prints: {print5x7: 30.00, print10x14: 38.00}},
        {id: 'Genie Lamp Rock', fileName: 'Genie_Lamp_Rock.jpg', prints: {print2x3: 20.00, print4x6: 26.00}}
    ];

    res.json(photoInfo);
})

