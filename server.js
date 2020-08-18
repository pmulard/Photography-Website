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
const db = require('./config/keys').mongoAtlasURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log('Database Error'));

//Use Routes
app.use('/api/photoItems', photoItems);
app.use('/api/packItems', packItems);

// Sets local port
const port = process.env.PORT || 5000;

// Starts server on local port
app.listen(port, () => console.log(`Server started on port ${port}`));