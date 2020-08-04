const express = require('express');

const app = express();

app.get('/api/photoInfo', (req, res) => {
    // Get from database but we will hardcode for now
    const photoInfo = [
        {id: 'WindAndSea Beach', fileName: 'WindAndSea_Beach.jpg', prints: {print2x3: 20.00, print4x6: 26.00}},
        {id: 'Canyonlands MilkyWay', fileName: 'Canyonlands_MilkyWay.jpg', prints: {print5x7: 30.00, print10x14: 38.00}},
        {id: 'Genie Lamp Rock', fileName: 'Genie_Lamp_Rock.jpg', prints: {print2x3: 20.00, print4x6: 26.00}}
    ];

    res.json(photoInfo);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));