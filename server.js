const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const photoItems = require('./routes/api/photoItems');

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

//Use Routes
app.use('./routes/api/photoItems', photoItems);

// Sets local port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



app.get('/api/photoInfo', (req, res) => {
    // Get from database but we will hardcode for now
    const photoInfo = [];

    res.json(photoInfo);
})

