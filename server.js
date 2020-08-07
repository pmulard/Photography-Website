const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const photoItems = require('./routes/api/photoItems');

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

// Sets local port
const port = 5000;

// Starts server on local port
app.listen(port, () => console.log(`Server started on port ${port}`));



// GET from db and serve @ localhost:5000/api/photoInfo
app.get('/api/photoInfo', (req, res) => {
    // Get from database but we will hardcode for now
    const photoInfo = [];

    res.json(photoInfo);
})

